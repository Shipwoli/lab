import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-12">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block text-primary">Vi Lab</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your virtual technology laboratory for coding, electronics, 3D modeling, robotics, game development, AI, and more.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/labs"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
                >
                  Explore Labs
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/register"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Lab Types */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Lab Types</h3>
                <ul className="mt-4 space-y-2">
                  <li>Student Lab</li>
                  <li>Personal Lab</li>
                  <li>Company Lab</li>
                  <li>Institution Lab</li>
                  <li>Educators Lab</li>
                  <li>Professional Lab</li>
                </ul>
              </div>

              {/* Technologies */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Technologies</h3>
                <ul className="mt-4 space-y-2">
                  <li>Coding & Programming</li>
                  <li>Electronics & Circuits</li>
                  <li>3D Modeling</li>
                  <li>Robotics</li>
                  <li>Game Development</li>
                  <li>AI & Machine Learning</li>
                </ul>
              </div>

              {/* Features */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Features</h3>
                <ul className="mt-4 space-y-2">
                  <li>Live Collaboration</li>
                  <li>Real Hardware Integration</li>
                  <li>Interactive Tutorials</li>
                  <li>Project Sharing</li>
                  <li>Premium Resources</li>
                  <li>Expert Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}