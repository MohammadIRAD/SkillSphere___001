
import React, { useState } from 'react';
import { enhanceResume } from '../services/geminiService';
import { SparklesIcon } from '../components/icons';

const AiToolsPage: React.FC = () => {
  const [resumeText, setResumeText] = useState('');
  const [enhancedResume, setEnhancedResume] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEnhance = async () => {
    if (!resumeText.trim()) {
      setError('Please paste your resume text first.');
      return;
    }
    setIsLoading(true);
    setError('');
    setEnhancedResume('');
    try {
      const result = await enhanceResume(resumeText);
      setEnhancedResume(result);
    } catch (err) {
      setError('Failed to enhance resume. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <SparklesIcon className="h-12 w-12 mx-auto text-indigo-500" />
        <h1 className="text-4xl font-bold mt-4">AI-Powered Resume Enhancer</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Let our Gemini-powered AI polish your resume to perfection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Area */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Resume</h2>
          <textarea
            className="w-full h-96 p-4 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="Paste your current resume text here..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
          />
        </div>

        {/* Output Area */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Enhanced Version</h2>
          <div className="w-full h-96 p-4 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 overflow-y-auto">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : enhancedResume ? (
              <pre className="whitespace-pre-wrap font-sans text-gray-900 dark:text-gray-200">{enhancedResume}</pre>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Your enhanced resume will appear here...</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleEnhance}
          disabled={isLoading}
          className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors text-lg inline-flex items-center disabled:bg-indigo-400 disabled:cursor-not-allowed"
        >
          <SparklesIcon className="h-5 w-5 mr-2" />
          {isLoading ? 'Enhancing...' : 'Enhance My Resume'}
        </button>
      </div>
    </div>
  );
};

export default AiToolsPage;
