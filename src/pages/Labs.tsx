import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const labTypes = [
  { id: 'student', name: 'Student Lab', description: 'Perfect for learning and practicing' },
  { id: 'personal', name: 'Personal Lab', description: 'For individual projects and experiments' },
  { id: 'company', name: 'Company Lab', description: 'Enterprise-grade virtual laboratory' },
  { id: 'institution', name: 'Institution Lab', description: 'For schools and educational institutions' },
  { id: 'educator', name: 'Educator Lab', description: 'Tools for teaching and course creation' },
  { id: 'professional', name: 'Professional Lab', description: 'Advanced tools for professionals' },
];

export default function Labs() {
  const [selectedLab, setSelectedLab] = useState('');
  const [activeTab, setActiveTab] = useState('code');
  const navigate = useNavigate();

  const defaultCode = `// Welcome to Vi Lab Code Editor
console.log("Hello, World!");`;

  return (
    <div className="min-h-screen bg-background p-6">
      {!selectedLab ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {labTypes.map((lab) => (
            <div
              key={lab.id}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setSelectedLab(lab.id)}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{lab.name}</h3>
              <p className="text-gray-600">{lab.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setSelectedLab('')}
            className="mb-4 text-primary hover:text-primary/80"
          >
            ← Back to Labs
          </button>
          
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex space-x-4 mb-4">
              <button
                className={`px-4 py-2 rounded-md ${
                  activeTab === 'code' ? 'bg-primary text-white' : 'bg-gray-100'
                }`}
                onClick={() => setActiveTab('code')}
              >
                Code Editor
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  activeTab === 'circuits' ? 'bg-primary text-white' : 'bg-gray-100'
                }`}
                onClick={() => setActiveTab('circuits')}
              >
                Circuits
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  activeTab === '3d' ? 'bg-primary text-white' : 'bg-gray-100'
                }`}
                onClick={() => setActiveTab('3d')}
              >
                3D Modeling
              </button>
            </div>

            <div className="h-[600px] bg-gray-50 rounded-lg">
              {activeTab === 'code' && (
                <Editor
                  height="100%"
                  defaultLanguage="javascript"
                  defaultValue={defaultCode}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                  }}
                />
              )}
              {activeTab === 'circuits' && (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Circuit Simulator</h3>
                    <p className="text-gray-600">
                      Interactive circuit building and testing environment
                    </p>
                  </div>
                </div>
              )}
              {activeTab === '3d' && (
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="orange" />
                  </mesh>
                  <OrbitControls />
                </Canvas>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}