
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Card from '../components/Card';
import { AcademicCapIcon, BriefcaseIcon, TrophyIcon, UserCircleIcon } from '../components/icons';
import { getDashboardData } from '../services/api';
import type { Course, Job } from '../types';
import { Link } from 'react-router-dom';

const StatCard = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: string | number; }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
        <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
            {icon}
        </div>
        <div className="ml-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{title}</p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
    </div>
);


const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { stats, ongoingCourses, recommendedJobs } = getDashboardData();

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Here's your personal career dashboard.</p>
        </div>
        <div className="flex-shrink-0">
             {user?.avatarUrl ? <img src={user.avatarUrl} alt={user.name} className="h-20 w-20 rounded-full" /> : <UserCircleIcon className="h-20 w-20 text-gray-400" />}
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard icon={<AcademicCapIcon className="h-6 w-6"/>} title="Courses in Progress" value={stats.coursesInProgress} />
          <StatCard icon={<BriefcaseIcon className="h-6 w-6"/>} title="Jobs Applied" value={stats.jobsApplied} />
          <StatCard icon={<TrophyIcon className="h-6 w-6"/>} title="Competitions Won" value={stats.competitionsWon} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ongoing Courses */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
          <div className="space-y-4">
            {ongoingCourses.map((course: Course) => (
              <div key={course.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4">
                  <img src={course.imageUrl} alt={course.title} className="w-24 h-16 object-cover rounded-md"/>
                  <div className="flex-1">
                    <h3 className="font-semibold">{course.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">by {course.instructor}</p>
                  </div>
                  <Link to="/courses" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 font-semibold">Continue</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Jobs */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
           <div className="space-y-4">
            {recommendedJobs.map((job: Job) => (
              <div key={job.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{job.company} - {job.location}</p>
                    </div>
                    <span className="text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full">{job.type}</span>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <p className="text-green-600 dark:text-green-400 font-semibold">{job.pay}</p>
                    <Link to="/freelance" className="bg-indigo-600 text-white px-4 py-1 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">Apply</Link>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
