
import React from 'react';
import Card from '../components/Card';
import { getCompetitions, getLeaderboard } from '../services/api';
import type { Competition, LeaderboardEntry } from '../types';
import { TrophyIcon } from '../components/icons';

const CompetitionsPage: React.FC = () => {
  const competitions = getCompetitions();
  const leaderboard = getLeaderboard();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Coding Competitions</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            Showcase your skills, climb the ranks, and win exciting prizes.
          </p>
        </div>
        <div className="space-y-6">
          {competitions.map((comp: Competition) => (
            <Card key={comp.id} title={comp.title}>
              <p className="text-sm mb-4">{comp.description}</p>
              <div className="flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold text-green-500">Prize: {comp.prize}</p>
                  <p className="text-gray-500 dark:text-gray-400">Ends: {comp.endDate}</p>
                </div>
                <button disabled={comp.status === 'Completed'} className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
                  {comp.status === 'Ongoing' ? 'Participate' : 'View Results'}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md sticky top-24">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <TrophyIcon className="h-6 w-6 mr-2 text-yellow-500" /> Leaderboard
          </h2>
          <ul className="space-y-4">
            {leaderboard.map((entry: LeaderboardEntry) => (
              <li key={entry.rank} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className={`font-bold w-8 text-center ${entry.rank <= 3 ? 'text-yellow-500' : ''}`}>
                    {entry.rank}
                  </span>
                  <img src={entry.user.avatarUrl} alt={entry.user.name} className="h-10 w-10 rounded-full mx-3" />
                  <span className="font-medium">{entry.user.name}</span>
                </div>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{entry.score} pts</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompetitionsPage;
