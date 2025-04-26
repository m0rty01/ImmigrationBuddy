"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ResultsDisplay from "../../components/ResultsDisplay";

interface ImmigrationOption {
  option: string;
  details: string;
  eligibility: string;
  nextSteps: string;
}

interface QueryResult {
  options: ImmigrationOption[];
  queryId?: string;
  planId?: string;
}

export default function Results() {
  const searchParams = useSearchParams();
  const [results, setResults] = useState<QueryResult | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const data = searchParams.get("data");
    
    if (!data) {
      setError("No results data found. Please try again.");
      return;
    }

    try {
      const parsedData = JSON.parse(decodeURIComponent(data));
      setResults(parsedData);
    } catch (err) {
      setError("Failed to parse results data. Please try again.");
      console.error("Error parsing results data:", err);
    }
  }, [searchParams]);

  if (error) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
                <p className="mt-4">
                  <a href="/" className="text-sm font-medium text-red-700 hover:text-red-600">
                    Return to home page &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-gray-700">Loading your immigration options...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ResultsDisplay 
          options={results.options} 
          queryId={results.queryId} 
          planId={results.planId} 
        />
        
        <div className="mt-8 text-center">
          <a href="/" className="text-sm font-medium text-blue-600 hover:text-blue-500">
            &larr; Start a new query
          </a>
        </div>
      </div>
    </div>
  );
} 