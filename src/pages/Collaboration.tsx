import { useState } from 'react';

export default function Collaboration() {
  const [roomId, setRoomId] = useState('');
  const [isCreatingRoom, setIsCreatingRoom] = useState(false);

  const handleCreateRoom = () => {
    // Implementation for room creation would go here
    setIsCreatingRoom(true);
  };

  const handleJoinRoom = () => {
    // Implementation for joining a room would go here
    if (roomId) {
      console.log('Joining room:', roomId);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Collaboration Space</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Create a Room</h3>
              <p className="text-gray-600 mb-4">
                Start a new collaboration session and invite others to join.
              </p>
              <button
                onClick={handleCreateRoom}
                className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
              >
                Create Room
              </button>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Join a Room</h3>
              <p className="text-gray-600 mb-4">
                Enter a room code to join an existing session.
              </p>
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  placeholder="Enter room code"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={handleJoinRoom}
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          {isCreatingRoom && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Room Created!</h3>
              <p className="text-gray-600 mb-4">
                Share this code with others to invite them to your session:
              </p>
              <div className="bg-white p-4 rounded-md border border-gray-300">
                <code className="text-lg font-mono">ROOM-123-456</code>
              </div>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Live Sessions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Example live sessions */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-900">Web Development Workshop</h4>
                <p className="text-gray-600">By John Doe</p>
                <p className="text-sm text-gray-500">5 participants</p>
                <button className="mt-2 text-primary hover:text-primary/80">
                  Join Session
                </button>
              </div>
              {/* Add more session cards as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}