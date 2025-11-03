
import React from 'react';
import Card from '../components/Card';
import { getCourses } from '../services/api';
import type { Course } from '../types';

const CoursesPage: React.FC = () => {
  const courses = getCourses();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Explore Our Courses</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Level up your skills with courses designed by industry experts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course: Course) => (
          <Card key={course.id} title={course.title} imageUrl={course.imageUrl} footerContent={
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Instructor</p>
                    <p className="font-semibold">{course.instructor}</p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors">
                    Enroll Now
                </button>
            </div>
          }>
            <p className="text-sm mb-4">{course.description}</p>
            <p className="text-sm font-medium">Duration: {course.duration}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
