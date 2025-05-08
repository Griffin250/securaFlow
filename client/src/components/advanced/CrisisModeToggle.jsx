import { useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function CrisisModeToggle() {
  const [isCrisisMode, setIsCrisisMode] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const activateCrisisMode = async () => {
    const response = await fetch('/api/crisis-mode', {
      method: 'POST',
      body: JSON.stringify({ activate: true })
    });
    if (response.ok) {
      setIsCrisisMode(true);
    }
    setIsConfirmOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsConfirmOpen(true)}
        className={`px-4 py-2 rounded-full font-bold transition-all ${isCrisisMode 
          ? 'bg-red-600 text-white pulse-animation' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
      >
        {isCrisisMode ? 'CRISIS ACTIVE' : 'ACTIVATE CRISIS MODE'}
      </button>

      <Dialog 
        open={isConfirmOpen} 
        onClose={() => setIsConfirmOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      >
        <Dialog.Panel className="bg-gray-900 rounded-lg p-6 max-w-md">
          <Dialog.Title className="text-xl font-bold text-white mb-2">
            Confirm Crisis Activation
          </Dialog.Title>
          <Dialog.Description className="text-gray-300 mb-6">
            This will immediately isolate compromised systems and restrict access.
            Only proceed if under active attack.
          </Dialog.Description>
          <div className="flex justify-end space-x-3">
            <button 
              onClick={() => setIsConfirmOpen(false)}
              className="px-4 py-2 bg-gray-700 rounded"
            >
              Cancel
            </button>
            <button 
              onClick={activateCrisisMode}
              className="px-4 py-2 bg-red-600 text-white rounded font-bold"
            >
              Activate
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}