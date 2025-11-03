
import React from 'react';
import Card from '../components/Card';
import { getJobs } from '../services/api';
import type { Job } from '../types';

const JobCard: React.FC<{ job: Job }> = ({ job }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                <p className="text-md text-gray-600 dark:text-gray-400">{job.company} - {job.location}</p>
            </div>
            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${job.type === 'Freelance' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'}`}>
                {job.type}
            </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-4 line-clamp-3">{job.description}</p>
        <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{job.pay}</p>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors">
                View & Apply
            </button>
        </div>
    </div>
);

const FreelancePage: React.FC = () => {
  const jobs = getJobs();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Find Your Next Opportunity</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Browse freelance projects and full-time positions from top companies.
        </p>
      </div>
      <div className="space-y-6">
        {jobs.map((job: Job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FreelancePage;
