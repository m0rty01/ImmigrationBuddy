"use client";

import { useState } from "react";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is ImmigrationBuddy?",
      answer: "ImmigrationBuddy is a web application that helps prospective U.S. immigrants understand their pathway options by providing personalized guidance based on their nationality and personal situation. Our AI-powered platform analyzes your information to identify the most relevant immigration options for your specific circumstances."
    },
    {
      question: "How does ImmigrationBuddy work?",
      answer: "Simply select your nationality from our dropdown menu and describe your personal situation, including details about your family connections, work experience, education, or any specific immigration goals. Our AI will analyze this information and provide you with personalized immigration pathway options, eligibility assessments, and next steps."
    },
    {
      question: "Is ImmigrationBuddy a legal service?",
      answer: "No, ImmigrationBuddy is an informational tool designed to help you understand your potential immigration options. We do not provide legal advice or legal representation. For specific legal guidance, we recommend consulting with a licensed immigration attorney who can address your unique situation."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we take data security and privacy seriously. We use encryption and secure protocols to protect your information. We do not share your personal data with third parties without your consent, except as required by law. For more details, please review our Privacy Policy."
    },
    {
      question: "Do I need to create an account?",
      answer: "No, you can use the basic features of ImmigrationBuddy without creating an account. However, creating a free account allows you to save your immigration plan, track your progress, and access additional resources and updates."
    },
    {
      question: "How accurate is the immigration guidance?",
      answer: "Our platform provides information based on current U.S. immigration policies and regulations. While we strive for accuracy, immigration laws can change, and individual cases can be complex. The guidance provided should be used as a starting point, and we recommend verifying information with official USCIS resources or consulting with an immigration attorney."
    },
    {
      question: "What types of immigration pathways does ImmigrationBuddy cover?",
      answer: "Our platform covers major U.S. immigration pathways, including family-based immigration, employment-based visas, diversity visa lottery, humanitarian programs, and more. We continuously update our system to reflect current immigration options and requirements."
    },
    {
      question: "Is ImmigrationBuddy affiliated with the U.S. government?",
      answer: "No, ImmigrationBuddy is not affiliated with, endorsed by, or associated with USCIS, the Department of Homeland Security, or any other government agency. We are an independent platform providing informational resources to help immigrants navigate the U.S. immigration system."
    },
    {
      question: "How much does it cost to use ImmigrationBuddy?",
      answer: "Basic features of ImmigrationBuddy are currently free to use. You can get personalized immigration pathway information without any charge. In the future, we may introduce premium features with subscription options, but our core services will remain accessible to all users."
    },
    {
      question: "Can ImmigrationBuddy help me fill out immigration forms?",
      answer: "Currently, ImmigrationBuddy does not provide form-filling services. We focus on helping you understand which immigration pathways might be suitable for your situation and providing guidance on next steps. We do provide links to official USCIS forms and resources."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Find answers to common questions about ImmigrationBuddy and U.S. immigration.
          </p>
        </div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                <svg
                  className={`h-6 w-6 text-gray-400 transform transition-transform duration-200 ${
                    openItem === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openItem === index && (
                <div className="p-6 pt-0 border-t border-gray-200">
                  <p className="text-base text-gray-500">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-bold text-blue-800 mb-4">Still have questions?</h2>
          <p className="text-blue-700">
            We're here to help! If you couldn't find the answer you were looking for, please reach out to us.
          </p>
          <div className="mt-4">
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 