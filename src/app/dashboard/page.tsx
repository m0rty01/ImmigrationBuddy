"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ResultsDisplay from "../../components/ResultsDisplay";
import ImmigrationForm from "../../components/ImmigrationForm";

interface Query {
  id: string;
  nationality: string;
  description: string;
  createdAt: string;
  plan?: Plan;
}

interface Plan {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface ImmigrationOption {
  option: string;
  details: string;
  eligibility: string;
  nextSteps: string;
}

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [queries, setQueries] = useState<Query[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedQuery, setSelectedQuery] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [results, setResults] = useState<ImmigrationOption[] | null>(null);

  useEffect(() => {
    // Redirect if not authenticated
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }

    // Fetch user's queries if authenticated
    if (status === "authenticated") {
      fetchQueries();
    }
  }, [status, router]);

  const fetchQueries = async () => {
    try {
      setLoading(true);
      setError("");

      // This is a mock function since we don't have a real API yet
      // In a real app, you would call an actual API endpoint
      // const response = await fetch("/api/queries");
      // const data = await response.json();
      
      // For demo purposes, using mock data
      const mockData = [
        {
          id: "1",
          nationality: "India",
          description: "I'm a software engineer with 5 years of experience looking to work in the US.",
          createdAt: "2023-10-15T10:30:00Z",
          plan: {
            id: "p1",
            content: JSON.stringify([
              {
                option: "H-1B Visa",
                details: "The H-1B visa is for workers in specialty occupations that require theoretical or technical expertise.",
                eligibility: "High",
                nextSteps: "Find a US employer willing to sponsor you."
              },
              {
                option: "EB-2 Green Card",
                details: "For professionals with advanced degrees or exceptional ability in sciences, arts, or business.",
                eligibility: "Medium",
                nextSteps: "Obtain a job offer and have your employer file Form I-140."
              }
            ]),
            createdAt: "2023-10-15T10:35:00Z",
            updatedAt: "2023-10-15T10:35:00Z"
          }
        },
        {
          id: "2",
          nationality: "Mexico",
          description: "My spouse is a US citizen and I want to move to the US to live with them.",
          createdAt: "2023-11-02T15:45:00Z",
          plan: {
            id: "p2",
            content: JSON.stringify([
              {
                option: "IR-1/CR-1 Spouse Visa",
                details: "For spouses of US citizens who want to immigrate to the United States.",
                eligibility: "High",
                nextSteps: "Your US citizen spouse needs to file Form I-130."
              }
            ]),
            createdAt: "2023-11-02T15:50:00Z",
            updatedAt: "2023-11-02T15:50:00Z"
          }
        }
      ];

      setQueries(mockData);
    } catch (err) {
      setError("Failed to fetch your queries. Please try again later.");
      console.error("Error fetching queries:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleQuerySelect = (queryId: string) => {
    setSelectedQuery(queryId === selectedQuery ? null : queryId);
    setResults(null);
  };

  const handleViewPlan = (planContent: string) => {
    try {
      setResults(JSON.parse(planContent));
    } catch (err) {
      setError("Failed to parse plan data.");
      console.error("Error parsing plan:", err);
    }
  };

  const handleNewQuery = () => {
    setShowForm(true);
    setSelectedQuery(null);
    setResults(null);
  };

  const handleResultsReceived = (data: any) => {
    setResults(data.options);
    setShowForm(false);
    fetchQueries(); // Refresh the queries list to include the new one
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-gray-700">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">My Dashboard</h1>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">My Queries</h2>
                <button
                  onClick={handleNewQuery}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  New Query
                </button>
              </div>

              {queries.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">You haven't made any queries yet.</p>
                  <button
                    onClick={handleNewQuery}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Create your first query
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {queries.map((query) => (
                    <div
                      key={query.id}
                      className={`border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                        selectedQuery === query.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
                      }`}
                      onClick={() => handleQuerySelect(query.id)}
                    >
                      <div className="flex justify-between">
                        <h3 className="font-medium text-gray-900">{query.nationality}</h3>
                        <span className="text-xs text-gray-500">
                          {new Date(query.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">{query.description}</p>
                      
                      {selectedQuery === query.id && query.plan && (
                        <div className="mt-4">
                          <button
                            onClick={() => handleViewPlan(query.plan!.content)}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            View Immigration Plan
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            {showForm ? (
              <ImmigrationForm onResultsReceived={handleResultsReceived} />
            ) : results ? (
              <ResultsDisplay options={results} />
            ) : (
              <div className="bg-white shadow rounded-lg p-6 flex items-center justify-center h-full">
                <div className="text-center max-w-md">
                  <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">Select a query or create a new one</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    View your saved immigration plans or start a new query to explore your options.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 