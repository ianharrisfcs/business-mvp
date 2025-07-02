'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Define the structure for our form data (same as assessment page)
interface AssessmentData {
  businessIdea: string;
  primaryProduct: string;
  location: string;
  targetCustomer: string;
  averageSale: string;
  startupCapital: string;
  differentiation: string;
  seekingLoan: string;
}

// Define the questions for display (same as assessment page)
const questions = [
  { id: 'businessIdea', label: "What's your business idea?" },
  { id: 'primaryProduct', label: 'What is your primary product or service?' },
  { id: 'location', label: 'Where will your business be located?' },
  { id: 'targetCustomer', label: 'Who is your target customer?' },
  { id: 'averageSale', label: 'What is your expected average sale amount?' },
  { id: 'startupCapital', label: 'How much startup capital do you have or need?' },
  { id: 'differentiation', label: 'What makes your business different?' },
  { id: 'seekingLoan', label: 'Are you seeking a business loan?' }
];

export default function Results() {
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve assessment data from localStorage
    const storedData = localStorage.getItem('assessmentData');
    if (storedData) {
      setAssessmentData(JSON.parse(storedData));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (!assessmentData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            No Assessment Data Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            It looks like you haven't completed the assessment yet. Please start the assessment to see your results.
          </p>
          <Link
            href="/assessment"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Start Assessment
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              Assessment Results
            </h1>
            <Link 
              href="/assessment"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              Retake Assessment
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Results header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Business Assessment Results
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's a summary of your business idea and key details. This information will be used to generate your personalized business validation scorecard.
          </p>
        </div>

        {/* Results grid */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {questions.map((question) => (
              <div key={question.id} className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {question.label}
                </h3>
                <p className="text-lg text-gray-900 dark:text-white font-medium">
                  {assessmentData[question.id as keyof AssessmentData] || 'Not provided'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder for future scorecard */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Business Validation Scorecard
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your personalized business validation analysis will appear here. This will include market analysis, competitive insights, and actionable recommendations.
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Coming Soon:</strong> AI-powered market analysis, competitive landscape assessment, and personalized recommendations based on your business idea.
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/assessment"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-center"
          >
            Retake Assessment
          </Link>
          <Link
            href="/"
            className="inline-block bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 font-semibold px-8 py-3 rounded-lg transition-colors text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 