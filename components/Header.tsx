
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { BriefcaseIcon, CodeBracketIcon, LightBulbIcon, AcademicCapIcon, ChatBubbleLeftRightIcon, TrophyIcon, UserCircleIcon } from './icons';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const navLinkClasses = "flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors";
  const activeNavLinkClasses = "bg-gray-900 text-white";

  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 text-white text-xl font-bold flex items-center">
              <LightBulbIcon className="h-8 w-8 mr-2 text-indigo-400" />
              SkillSphere
            </Link>
            <nav className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavLink to="/courses" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>
                  <AcademicCapIcon className="h-5 w-5 mr-2" /> Courses
                </NavLink>
                <NavLink to="/freelance" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>
                  <BriefcaseIcon className="h-5 w-5 mr-2" /> Freelance
                </NavLink>
                <NavLink to="/competitions" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>
                  <TrophyIcon className="h-5 w-5 mr-2" /> Competitions
                </NavLink>
              </div>
            </nav>
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                 <NavLink to="/dashboard" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Dashboard</NavLink>
                 <NavLink to="/portfolio" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}><CodeBracketIcon className="h-5 w-5 mr-2"/>Portfolio</NavLink>
                 <NavLink to="/ai-tools" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}><LightBulbIcon className="h-5 w-5 mr-2"/>AI Tools</NavLink>
                 <NavLink to="/chat" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}><ChatBubbleLeftRightIcon className="h-5 w-5 mr-2"/>Chat</NavLink>
                 <div className="flex items-center">
                   {user?.avatarUrl ? <img src={user.avatarUrl} alt={user.name} className="h-8 w-8 rounded-full" /> : <UserCircleIcon className="h-8 w-8 text-gray-400" />}
                   <span className="text-white ml-2 hidden sm:inline">{user?.name}</span>
                 </div>
                 <button onClick={logout} className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition-colors">
                   Logout
                 </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Login
                </Link>
                <Link to="/signup" className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition-colors">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
