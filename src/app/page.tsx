import Link from "next/link";

export default function Home() {
  return (
    // Main container with full viewport height and centered content
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      
      {/* Hero section with centered content */}
      <main className="text-center max-w-4xl mx-auto">
        
        {/* Main headline - large, bold, and prominent */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Validate Your Business Idea Instantly
        </h1>
        
        {/* Subheadline - descriptive and compelling */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Get real feedback using live market data and AI analysis. No signup required.
        </p>
        
        {/* Call-to-action button - large and prominent */}
        <Link 
          href="/assessment"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Start
        </Link>
        
      </main>
      
      {/* Optional: Add some visual elements or additional content below */}
      <div className="mt-16 text-center">
        {/* You can add features, testimonials, or other content here */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Live Market Data</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Real-time insights from current market trends</p>
          </div>
          
          <div className="p-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Advanced algorithms provide deep insights</p>
          </div>
          
          <div className="p-6">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No Signup Required</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Start validating immediately, no barriers</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
