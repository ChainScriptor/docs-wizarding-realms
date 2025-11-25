'use client';

import React from 'react';
import { Home, BookOpen } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

// Twitter/X Logo SVG
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// Discord Logo SVG
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

// TikTok Logo SVG
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// YouTube Logo SVG
const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const socialLinks: SocialLink[] = [
  {
    name: 'Home',
    url: '/',
    icon: <Home className="w-6 h-6" />,
  },
  {
    name: 'Documentation',
    url: '/documentation',
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    name: 'Twitter/X',
    url: 'https://twitter.com',
    icon: <TwitterIcon className="w-6 h-6" />,
  },
  {
    name: 'Discord',
    url: 'https://discord.com',
    icon: <DiscordIcon className="w-6 h-6" />,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com',
    icon: <TikTokIcon className="w-6 h-6" />,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com',
    icon: <YouTubeIcon className="w-6 h-6" />,
  },
];

export function SocialLinks() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-black/90 backdrop-blur-sm px-4 py-6 rounded-r-2xl border-r border-white/10 shadow-2xl">
      <div className="flex flex-col gap-6">
        {socialLinks.map((link) => {
          const isExternal = link.url.startsWith('http');
          return (
            <a
              key={link.name}
              href={link.url}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="group relative flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
              aria-label={link.name}
            >
              <span className="text-white group-hover:text-white transition-colors">
                {link.icon}
              </span>
              <span className="absolute left-full ml-4 px-3 py-1.5 bg-black/90 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-200 border border-white/10">
                {link.name}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

