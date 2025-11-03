
import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon, BriefcaseIcon, CodeBracketIcon, LightBulbIcon, TrophyIcon } from '../components/icons';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{description}</p>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center bg-gray-100 dark:bg-gray-800/50 py-20 px-4 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Welcome to <span className="text-indigo-600 dark:text-indigo-400">SkillSphere</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Your all-in-one AI-powered platform to learn, freelance, compete, and build your career.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/signup" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors text-lg">
            Get Started
          </Link>
          <Link to="/courses" className="inline-block bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-300 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-lg">
            Explore Courses
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            From upskilling to landing your dream job, we've got you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<AcademicCapIcon className="h-6 w-6" />}
            title="Expert-Led Courses"
            description="Master new skills with our extensive library of courses taught by industry professionals."
          />
          <FeatureCard 
            icon={<BriefcaseIcon className="h-6 w-6" />}
            title="Freelance & Job Board"
            description="Find your next gig or full-time position on our curated job board for tech talents."
          />
          <FeatureCard 
            icon={<CodeBracketIcon className="h-6 w-6" />}
            title="Build Your Portfolio"
            description="Showcase your projects and skills to potential employers and clients with a stunning portfolio."
          />
          <FeatureCard 
            icon={<TrophyIcon className="h-6 w-6" />}
            title="Coding Competitions"
            description="Test your abilities, compete with others, and win amazing prizes in our regular competitions."
          />
          <FeatureCard 
            icon={<LightBulbIcon className="h-6 w-6" />}
            title="AI-Powered Tools"
            description="Enhance your resume and get personalized career recommendations with our Gemini-powered AI."
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
