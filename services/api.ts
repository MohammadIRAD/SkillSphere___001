
import type { Course, Job, Project, Competition, LeaderboardEntry, User, ChatMessage } from '../types';

export const getCourses = (): Course[] => [
  { id: '1', title: 'React for Beginners', description: 'Learn the fundamentals of React and build your first web app.', instructor: 'John Doe', duration: '6 weeks', imageUrl: 'https://picsum.photos/seed/react/600/400' },
  { id: '2', title: 'Advanced FastAPI', description: 'Deep dive into advanced features of FastAPI for production-ready APIs.', instructor: 'Jane Smith', duration: '8 weeks', imageUrl: 'https://picsum.photos/seed/fastapi/600/400' },
  { id: '3', title: 'MongoDB Masterclass', description: 'Master NoSQL databases with MongoDB from scratch.', instructor: 'Peter Jones', duration: '5 weeks', imageUrl: 'https://picsum.photos/seed/mongodb/600/400' },
  { id: '4', title: 'Tailwind CSS Pro', description: 'Design beautiful, responsive websites with Tailwind CSS.', instructor: 'Emily White', duration: '4 weeks', imageUrl: 'https://picsum.photos/seed/tailwind/600/400' },
];

export const getJobs = (): Job[] => [
    { id: '1', title: 'Frontend Developer', company: 'Tech Solutions Inc.', location: 'Remote', type: 'Full-time', description: 'Seeking a skilled React developer to join our dynamic team. Experience with TypeScript is a plus.', pay: '$120,000/year' },
    { id: '2', title: 'UI/UX Designer for Mobile App', company: 'Creative Co.', location: 'Remote', type: 'Freelance', description: 'We need a creative designer for a 3-month project to design our new mobile application.', pay: '$75/hour' },
    { id: '3', title: 'Backend Python Engineer', company: 'Data Systems', location: 'New York, NY', type: 'Full-time', description: 'Develop and maintain our FastAPI-based microservices. Strong Python and database skills required.', pay: '$140,000/year' },
];

export const getPortfolioProjects = (): Project[] => [
    { id: '1', title: 'E-commerce Platform', description: 'A full-stack e-commerce site built with React, Node.js, and MongoDB.', imageUrl: 'https://picsum.photos/seed/project1/600/400', projectUrl: '#', tags: ['React', 'Node.js', 'MongoDB', 'E-commerce'] },
    { id: '2', title: 'Data Visualization Dashboard', description: 'An interactive dashboard for visualizing sales data using D3.js and React.', imageUrl: 'https://picsum.photos/seed/project2/600/400', projectUrl: '#', tags: ['React', 'D3.js', 'Data Viz'] },
    { id: '3', title: 'Real-time Chat Application', description: 'A chat app built with FastAPI WebSockets and React for instant messaging.', imageUrl: 'https://picsum.photos/seed/project3/600/400', projectUrl: '#', tags: ['FastAPI', 'WebSockets', 'React'] },
];

export const getCompetitions = (): Competition[] => [
    { id: '1', title: 'AlgoChallenge May 2024', description: 'Solve 5 algorithmic problems in 3 hours. Test your problem-solving skills.', prize: '$1000', endDate: 'May 31, 2024', status: 'Ongoing' },
    { id: '2', title: 'Frontend UI Challenge', description: 'Recreate a complex UI design using any frontend framework within 48 hours.', prize: 'MacBook Pro', endDate: 'June 15, 2024', status: 'Ongoing' },
    { id: '3', title: 'API Design Contest', description: 'Design and implement a RESTful API for a given problem statement.', prize: '$500', endDate: 'April 20, 2024', status: 'Completed' },
];

export const getLeaderboard = (): LeaderboardEntry[] => [
    { rank: 1, user: { name: 'Alice', avatarUrl: 'https://picsum.photos/id/1027/100/100' }, score: 2500 },
    { rank: 2, user: { name: 'Bob', avatarUrl: 'https://picsum.photos/id/1005/100/100' }, score: 2350 },
    { rank: 3, user: { name: 'Charlie', avatarUrl: 'https://picsum.photos/id/1011/100/100' }, score: 2200 },
    { rank: 4, user: { name: 'David', avatarUrl: 'https://picsum.photos/id/1012/100/100' }, score: 2100 },
    { rank: 5, user: { name: 'Eve', avatarUrl: 'https://picsum.photos/id/1013/100/100' }, score: 1950 },
];

export const getDashboardData = () => ({
    stats: {
        coursesInProgress: 2,
        jobsApplied: 5,
        competitionsWon: 1,
    },
    ongoingCourses: getCourses().slice(0, 2),
    recommendedJobs: getJobs().slice(0, 2),
});

export const getChatUser = (): User => ({
    id: '2',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatarUrl: 'https://picsum.photos/seed/partner/100/100',
});

export const getChatMessages = (): ChatMessage[] => [
    { id: '1', sender: 'other', text: 'Hi there! How can I help you with your career goals today?', timestamp: '10:30 AM', avatarUrl: 'https://picsum.photos/seed/partner/100/100' },
    { id: '2', sender: 'user', text: 'I was hoping to get some advice on my resume.', timestamp: '10:31 AM', avatarUrl: 'https://picsum.photos/seed/user/100/100' },
];
