import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function Dashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <p className="text-gray-600">Welcome back, {user?.email}</p>
          </div>

          <div className="flex space-x-4 mb-6">
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === 'projects' ? 'bg-primary text-white' : 'bg-gray-100'
              }`}
              onClick={() => setActiveTab('projects')}
            >
              My Projects
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === 'courses' ? 'bg-primary text-white' : 'bg-gray-100'
              }`}
              onClick={() => setActiveTab('courses')}
            >
              My Courses
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === 'settings' ? 'bg-primary text-white' : 'bg-gray-100'
              }`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
          </div>

          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900">Circuit Design Project</h3>
                <p className="text-gray-600">Last modified: 2 days ago</p>
                <div className="mt-4">
                  <button className="text-primary hover:text-primary/80">
                    Open Project
                  </button>
                </div>
              </div>
              {/* Add more project cards */}
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900">Introduction to Electronics</h3>
                <p className="text-gray-600">Progress: 60%</p>
                <div className="mt-4">
                  <button className="text-primary hover:text-primary/80">
                    Continue Course
                  </button>
                </div>
              </div>
              {/* Add more course cards */}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-2xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Profile Settings</h3>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        value={user?.email || ''}
                        disabled
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Subscription Plan
                      </label>
                      <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50">
                        Free Plan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}