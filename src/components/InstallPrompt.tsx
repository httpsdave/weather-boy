import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Check if user has dismissed this before
      const dismissed = localStorage.getItem('weatherboy_install_dismissed');
      if (!dismissed) {
        setShowPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('weatherboy_install_dismissed', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 animate-slide-up">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center">
            <Download className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
              Install Weather Boy
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Add to your home screen for quick access and a better experience!
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleInstall}
                className="flex-1 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-200 text-sm"
              >
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="px-3 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                aria-label="Dismiss install prompt"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
