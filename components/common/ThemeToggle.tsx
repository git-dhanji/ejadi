'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by waiting for mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full bg-border/20 blur-sm animate-pulse" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-foreground group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 transition-transform group-hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform group-hover:-rotate-12" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
