import { useEffect } from 'react';

interface KeyboardShortcut {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
  callback: () => void;
}

export const useKeyboardShortcuts = (shortcuts: KeyboardShortcut[]) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in input fields
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      shortcuts.forEach(({ key, ctrl, shift, callback }) => {
        const ctrlMatch = ctrl === undefined || ctrl === (e.ctrlKey || e.metaKey);
        const shiftMatch = shift === undefined || shift === e.shiftKey;
        const keyMatch = e.key.toLowerCase() === key.toLowerCase();

        if (ctrlMatch && shiftMatch && keyMatch) {
          e.preventDefault();
          callback();
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
};

export const KeyboardShortcutsHelp = () => {
  return (
    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
      <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Ctrl+R</kbd> Refresh weather</div>
      <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">/</kbd> Focus search</div>
      <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Esc</kbd> Close panels</div>
      <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">S</kbd> Open settings</div>
      <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">L</kbd> Open saved locations</div>
      <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">D</kbd> Toggle dark mode</div>
      <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">C</kbd> Compare locations</div>
    </div>
  );
};
