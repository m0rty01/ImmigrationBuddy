"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

interface ImmigrationOption {
  option: string;
  details: string;
  eligibility: string;
  nextSteps: string;
}

interface ResultsDisplayProps {
  options: ImmigrationOption[];
  queryId?: string;
  planId?: string;
}

export default function ResultsDisplay({ options, queryId, planId }: ResultsDisplayProps) {
  const { data: session } = useSession();
  const [expandedOption, setExpandedOption] = useState<number | null>(null);

  const toggleOption = (index: number) => {
    setExpandedOption(expandedOption === index ? null : index);
  };

  const getEligibilityColor = (eligibility: string) => {
    switch (eligibility.toLowerCase()) {
      case "high":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-orange-100 text-orange-800";
      case "not eligible":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Your Immigration Options</h2>
        <p className="mt-2 text-sm text-gray-500">
          Based on your information, we've identified the following pathways:
        </p>
      </div>

      <div className="divide-y divide-gray-200">
        {options.map((option, index) => (
          <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-150">
            <div 
              className="flex items-start justify-between cursor-pointer" 
              onClick={() => toggleOption(index)}
            >
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">{option.option}</h3>
                <div className="mt-1">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getEligibilityColor(option.eligibility)}`}>
                    Eligibility: {option.eligibility}
                  </span>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <svg 
                  className={`h-5 w-5 text-gray-400 transform transition-transform duration-150 ${expandedOption === index ? 'rotate-180' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {expandedOption === index && (
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Details</h4>
                  <p className="mt-1 text-sm text-gray-600">{option.details}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Next Steps</h4>
                  <p className="mt-1 text-sm text-gray-600">{option.nextSteps}</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <a 
                    href={`https://www.uscis.gov/search-results?searchQuery=${encodeURIComponent(option.option)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Learn more about this pathway
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {!session && (
        <div className="p-6 bg-blue-50">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Save your results</h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  Create an account to save these results and get personalized immigration guidance.
                </p>
                <div className="mt-4">
                  <Link
                    href="/auth/register"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign up to save your plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 