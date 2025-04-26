import { NextResponse } from "next/server";
import { prisma } from "../../../lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";

// Mock LLM response function (replace with actual LLM integration)
async function generateLLMResponse(nationality: string, description: string): Promise<string> {
  // In a real implementation, this would call your LLM API
  // For now, we'll return a mock response based on the input
  
  return JSON.stringify([
    {
      option: "Family-Based Immigration",
      details: "If you have close relatives who are U.S. citizens or permanent residents, you may qualify for family-based immigration.",
      eligibility: nationality === "Mexico" ? "High" : "Medium",
      nextSteps: "Contact USCIS to file Form I-130, Petition for Alien Relative."
    },
    {
      option: "Employment-Based Immigration",
      details: "Based on your professional background, you might qualify for employment-based immigration pathways.",
      eligibility: description.includes("engineer") || description.includes("doctor") ? "High" : "Medium",
      nextSteps: "Find a U.S. employer willing to sponsor you and file Form I-140, Immigrant Petition for Alien Worker."
    },
    {
      option: "Diversity Visa Program",
      details: "The Diversity Visa lottery program issues 50,000 immigrant visas annually to people from countries with low rates of immigration to the U.S.",
      eligibility: ["Mexico", "Canada", "China", "India", "United Kingdom"].includes(nationality) ? "Not Eligible" : "Medium",
      nextSteps: "Check eligibility and apply during the next open registration period at dvlottery.state.gov."
    }
  ]);
}

export async function POST(req: Request) {
  try {
    const { nationality, description } = await req.json();
    const session = await getServerSession(authOptions);

    if (!nationality || !description) {
      return NextResponse.json(
        { error: "Nationality and description are required" },
        { status: 400 }
      );
    }

    // Get LLM response
    const llmResponse = await generateLLMResponse(nationality, description);

    // Save query and plan if user is logged in
    if (session?.user?.id) {
      const query = await prisma.query.create({
        data: {
          nationality,
          description,
          userId: session.user.id,
          plan: {
            create: {
              content: llmResponse,
              userId: session.user.id,
            },
          },
        },
        include: {
          plan: true,
        },
      });

      return NextResponse.json({
        queryId: query.id,
        planId: query.plan?.id,
        options: JSON.parse(llmResponse),
      });
    }

    // For non-authenticated users, just return the response
    return NextResponse.json({
      options: JSON.parse(llmResponse),
    });
  } catch (error) {
    console.error("Error in query:", error);
    return NextResponse.json(
      { error: "An error occurred processing your query" },
      { status: 500 }
    );
  }
} 