'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Define the structure for our form data
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

// Define the questions for each step
const questions = [
  {
    id: 'businessIdea',
    question: "What's your business idea?",
    type: 'text',
    placeholder: 'Describe your business concept...'
  },
  {
    id: 'primaryProduct',
    question: 'What is your primary product or service?',
    type: 'text',
    placeholder: 'e.g., Software as a Service, Consulting, Physical Product...'
  },
  {
    id: 'location',
    question: 'Where will your business be located?',
    type: 'text',
    placeholder: 'City, State, ZIP (or "Online Only")'
  },
  {
    id: 'targetCustomer',
    question: 'Who is your target customer?',
    type: 'text',
    placeholder: 'Describe your ideal customer...'
  },
  {
    id: 'averageSale',
    question: 'What is your expected average sale amount?',
    type: 'number',
    placeholder: 'Enter amount in dollars'
  },
  {
    id: 'startupCapital',
    question: 'How much startup capital do you have or need?',
    type: 'text',
    placeholder: 'Enter amount or "not sure"'
  },
  {
    id: 'differentiation',
    question: 'What makes your business different?',
    type: 'text',
    placeholder: 'Your unique value proposition...'
  },
  {
    id: 'seekingLoan',
    question: 'Are you seeking a business loan?',
    type: 'select',
    options: ['Yes', 'No', 'Maybe']
  }
];

export default function Assessment() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<AssessmentData>({
    businessIdea: '',
    primaryProduct: '',
    location: '',
    targetCustomer: '',
    averageSale: '',
    startupCapital: '',
    differentiation: '',
    seekingLoan: ''
  });

  // Handle input changes
  const handleInputChange = (value: string) => {
    const currentQuestion = questions[currentStep];
    setFormData(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  // Navigate to next step
  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Store data in localStorage for results page
      localStorage.setItem('assessmentData', JSON.stringify(formData));
      router.push('/results');
    }
  };

  // Navigate to previous step
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Check if current step is valid
  const isCurrentStepValid = () => {
    const currentQuestion = questions[currentStep];
    const value = formData[currentQuestion.id as keyof AssessmentData];
    return value.trim() !== '';
  };

  const currentQuestion = questions[currentStep];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header with progress indicator */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Back to home link */}
            <Link 
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
            
            {/* Progress indicator */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Step {currentStep + 1} of {questions.length}
              </span>
              <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main form content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          
          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {currentQuestion.question}
            </h2>
            
            {/* Input field based on question type */}
            {currentQuestion.type === 'text' && (
              <input
                type="text"
                value={formData[currentQuestion.id as keyof AssessmentData]}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={currentQuestion.placeholder}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            )}
            
            {currentQuestion.type === 'number' && (
              <input
                type="number"
                value={formData[currentQuestion.id as keyof AssessmentData]}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={currentQuestion.placeholder}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            )}
            
            {currentQuestion.type === 'select' && (
              <select
                value={formData[currentQuestion.id as keyof AssessmentData]}
                onChange={(e) => handleInputChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select an option...</option>
                {currentQuestion.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center">
            {/* Back button */}
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500'
              }`}
            >
              Back
            </button>

            {/* Next/Submit button */}
            <button
              onClick={handleNext}
              disabled={!isCurrentStepValid()}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isCurrentStepValid()
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
              }`}
            >
              {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
            </button>
          </div>

          {/* Step indicator dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentStep
                    ? 'bg-blue-600'
                    : index < currentStep
                    ? 'bg-green-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 