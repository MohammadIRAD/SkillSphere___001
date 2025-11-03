
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  imageUrl: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Freelance' | 'Full-time' | 'Part-time';
  description: string;
  pay: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
}

export interface Competition {
  id: string;
  title: string;
  description: string;
  prize: string;
  endDate: string;
  status: 'Ongoing' | 'Completed';
}

export interface LeaderboardEntry {
  rank: number;
  user: {
    name: string;
    avatarUrl: string;
  };
  score: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'other';
  text: string;
  timestamp: string;
  avatarUrl: string;
}
