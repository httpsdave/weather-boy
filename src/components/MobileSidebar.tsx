import React from 'react';
import { X, Star, Settings as SettingsIcon, TrendingUp, Sun, Moon, Share2 } from 'lucide-react';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onShowSavedLocations: () => void;
  onShowSettings: () => void;
  onShowComparison: () => void;
  onToggleTheme: () => void;
  onShare?: () => void;
  effectiveTheme: 'light' | 'dark';
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  onClose,
  onShowSavedLocations,
  onShowSettings,
  onShowComparison,
  onToggleTheme,
  onShare,
  effectiveTheme,
}) => {
  if (!isOpen) return null;

  const menuItems = [
    {
      icon: <Star className="w-6 h-6" />,
      label: 'Saved Locations',
      onClick: () => {
        onShowSavedLocations();
        onClose();
      },
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: 'Compare Locations',
      onClick: () => {
        onShowComparison();
        onClose();
      },
    },
    {
      icon: effectiveTheme === 'dark' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />,
      label: effectiveTheme === 'dark' ? 'Dark Mode' : 'Light Mode',
      onClick: () => {
        onToggleTheme();
      },
    },
    ...(onShare ? [{
      icon: <Share2 className="w-6 h-6" />,
      label: 'Share Weather',
      onClick: () => {
        onShare();
        onClose();
      },
    }] : []),
    {
      icon: <SettingsIcon className="w-6 h-6" />,
      label: 'Settings',
      onClick: () => {
        onShowSettings();
        onClose();
      },
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-800 z-50 shadow-2xl animate-slide-in-left">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={item.onClick}
                  className="w-full flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 text-left group"
                >
                  <div className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-base font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Weather Boy v1.0
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
