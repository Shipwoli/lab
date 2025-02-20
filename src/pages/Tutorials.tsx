import { useState } from 'react';

const tutorials = [
  {
    id: 1,
    title: 'Introduction to Programming',
    category: 'coding',
    difficulty: 'Beginner',
    duration: '30 min',
    content: 'Learn the basics of programming with JavaScript...',
  },
  {
    id: 2,
    title: 'Basic Electronics',
    category: 'electronics',
    difficulty: 'Beginner',
    duration: '45 min',
    content: 'Understanding voltage, current, and basic components...',
  },
  {
    id: 3,
    title: '3D Modeling Fundamentals',
    category: '3d',
    difficulty: 'Beginner',
    duration: '60 min',
    content: 'Get started with 3D modeling basics...',
  },
];

export default function Tutorials() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTutorial, setSelectedTutorial] = useState<typeof tutorials[0] | null>(null);

  const filteredTutorials = selectedCategory === 'all'
    ? tutorials
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {!selectedTutorial ? (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tutorials</h2>
              <div className="flex space-x-4">
                <button
                  className={`px-4 py-2 rounded-md ${
                    selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory('all')}
                >
                  All
                </button>
                <button
                  className={`px-4 py-2 rounded-md ${
                    selectedCategory === 'coding' ? 'bg-primary text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory('coding')}
                >
                  Coding
                </button>
                <button
                  className={`px-4 py-2 rounded-md ${
                    selectedCategory === 'electronics' ? 'bg-primary text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory('electronics')}
                >
                  Electronics
                </button>
                <button
                  className={`px-4 py-2 rounded-md ${
                    selectedCategory === '3d' ? 'bg-primary text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory('3d')}
                >
                  3D Modeling
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedTutorial(tutorial)}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tutorial.title}
                  </h3>
                  <div className="flex space-x-4 mb-4">
                    <span className="text-sm text-gray-500">{tutorial.difficulty}</span>
                    <span className="text-sm text-gray-500">{tutorial.duration}</span>
                  </div>
                  <p className="text-gray-600">{tutorial.content}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <button
              onClick={() => setSelectedTutorial(null)}
              className="mb-4 text-primary hover:text-primary/80"
            >
              ← Back to Tutorials
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedTutorial.title}
            </h2>
            <div className="flex space-x-4 mb-4">
              <span className="text-sm text-gray-500">{selectedTutorial.difficulty}</span>
              <span className="text-sm text-gray-500">{selectedTutorial.duration}</span>
            </div>
            <div className="prose max-w-none">
              <p>{selectedTutorial.content}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}