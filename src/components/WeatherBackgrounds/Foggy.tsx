import React from 'react';

export const Foggy: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Misty gray sky */}
    <defs>
      <linearGradient id="foggySkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#A8B2BE', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#D0D5DB', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#foggySkyGradient)" />
    
    {/* Fog layers - horizontal bands */}
    <g opacity="0.7">
      <ellipse cx="600" cy="100" rx="700" ry="60" fill="white" opacity="0.5"/>
      <ellipse cx="600" cy="130" rx="750" ry="65" fill="white" opacity="0.45"/>
      <ellipse cx="600" cy="170" rx="680" ry="55" fill="white" opacity="0.5"/>
      <ellipse cx="600" cy="210" rx="720" ry="60" fill="white" opacity="0.48"/>
    </g>
    
    {/* More fog layers */}
    <g className="animate-float" opacity="0.6">
      <ellipse cx="200" cy="250" rx="400" ry="70" fill="#E8EAED" opacity="0.6"/>
      <ellipse cx="800" cy="270" rx="450" ry="75" fill="#E8EAED" opacity="0.55"/>
      <ellipse cx="500" cy="300" rx="420" ry="65" fill="#E8EAED" opacity="0.6"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.65">
      <ellipse cx="350" cy="330" rx="380" ry="70" fill="#DFE1E4" opacity="0.6"/>
      <ellipse cx="900" cy="350" rx="400" ry="72" fill="#DFE1E4" opacity="0.58"/>
    </g>
    
    {/* Barely visible mountains through fog */}
    <path d="M0 380 L200 320 L400 360 L600 300 L800 340 L1000 280 L1200 320 L1200 500 L0 500 Z" 
          fill="#8A95A0" opacity="0.3"/>
    <path d="M0 410 L180 350 L360 400 L540 340 L720 390 L900 330 L1080 380 L1200 350 L1200 500 L0 500 Z" 
          fill="#9AA5B0" opacity="0.35"/>
    
    {/* Hills barely visible */}
    <path d="M0 450 L300 430 L600 440 L900 425 L1200 435 L1200 500 L0 500 Z" 
          fill="#B0B5BA" opacity="0.5"/>
    
    {/* Dense fog in foreground */}
    <g opacity="0.75">
      <ellipse cx="250" cy="430" rx="350" ry="80" fill="white" opacity="0.6"/>
      <ellipse cx="750" cy="445" rx="400" ry="85" fill="white" opacity="0.65"/>
      <ellipse cx="500" cy="465" rx="380" ry="75" fill="white" opacity="0.7"/>
    </g>
    
    {/* Tree silhouettes barely visible through fog */}
    <g opacity="0.25">
      <rect x="300" y="455" width="10" height="30" fill="#606060"/>
      <path d="M305 455 L288 455 L296.5 430 Z" fill="#505050"/>
      
      <rect x="650" y="450" width="11" height="32" fill="#606060"/>
      <path d="M655.5 450 L637 450 L646.25 422 Z" fill="#505050"/>
      
      <rect x="950" y="458" width="9" height="28" fill="#606060"/>
      <path d="M954.5 458 L938 458 L946.25 435 Z" fill="#505050"/>
    </g>
    
    {/* House outline barely visible */}
    <g opacity="0.3">
      <rect x="500" y="460" width="45" height="38" fill="#808080"/>
      <path d="M494 460 L522.5 440 L551 460 Z" fill="#707070"/>
    </g>
    
    {/* More fog wisps in front */}
    <g className="animate-float" opacity="0.8">
      <ellipse cx="150" cy="480" rx="300" ry="60" fill="white" opacity="0.7"/>
      <ellipse cx="950" cy="475" rx="280" ry="55" fill="white" opacity="0.68"/>
    </g>
  </svg>
);

export const FoggyDay = Foggy;

export const FoggyNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Dark misty night sky */}
    <defs>
      <linearGradient id="foggyNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2a3542', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#3f4d5b', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#foggyNightSkyGradient)" />
    
    {/* Dim moon behind fog */}
    <g opacity="0.3">
      <circle cx="900" cy="90" r="40" fill="#d4c4a8"/>
    </g>
    
    {/* Dark fog layers - horizontal bands */}
    <g opacity="0.6">
      <ellipse cx="600" cy="100" rx="700" ry="60" fill="#606870" opacity="0.5"/>
      <ellipse cx="600" cy="130" rx="750" ry="65" fill="#606870" opacity="0.45"/>
      <ellipse cx="600" cy="170" rx="680" ry="55" fill="#606870" opacity="0.5"/>
      <ellipse cx="600" cy="210" rx="720" ry="60" fill="#606870" opacity="0.48"/>
    </g>
    
    {/* More fog layers */}
    <g className="animate-float" opacity="0.55">
      <ellipse cx="200" cy="250" rx="400" ry="70" fill="#505860" opacity="0.6"/>
      <ellipse cx="800" cy="270" rx="450" ry="75" fill="#505860" opacity="0.55"/>
      <ellipse cx="500" cy="300" rx="420" ry="65" fill="#505860" opacity="0.6"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.6">
      <ellipse cx="350" cy="330" rx="380" ry="70" fill="#4a5560" opacity="0.6"/>
      <ellipse cx="900" cy="350" rx="400" ry="72" fill="#4a5560" opacity="0.58"/>
    </g>
    
    {/* Barely visible mountains through fog */}
    <path d="M0 380 L200 320 L400 360 L600 300 L800 340 L1000 280 L1200 320 L1200 500 L0 500 Z" 
          fill="#2a3540" opacity="0.4"/>
    <path d="M0 410 L180 350 L360 400 L540 340 L720 390 L900 330 L1080 380 L1200 350 L1200 500 L0 500 Z" 
          fill="#2f3a45" opacity="0.45"/>
    
    {/* Hills barely visible */}
    <path d="M0 450 L300 430 L600 440 L900 425 L1200 435 L1200 500 L0 500 Z" 
          fill="#3a4550" opacity="0.5"/>
    
    {/* Dense fog in foreground */}
    <g opacity="0.7">
      <ellipse cx="250" cy="430" rx="350" ry="80" fill="#4a5560" opacity="0.6"/>
      <ellipse cx="750" cy="445" rx="400" ry="85" fill="#4a5560" opacity="0.65"/>
      <ellipse cx="500" cy="465" rx="380" ry="75" fill="#4a5560" opacity="0.7"/>
    </g>
    
    {/* Tree silhouettes barely visible through fog */}
    <g opacity="0.2">
      <rect x="300" y="455" width="10" height="30" fill="#2a2a2a"/>
      <path d="M305 455 L288 455 L296.5 430 Z" fill="#1a1a1a"/>
      
      <rect x="650" y="450" width="11" height="32" fill="#2a2a2a"/>
      <path d="M655.5 450 L637 450 L646.25 422 Z" fill="#1a1a1a"/>
      
      <rect x="950" y="458" width="9" height="28" fill="#2a2a2a"/>
      <path d="M954.5 458 L938 458 L946.25 435 Z" fill="#1a1a1a"/>
    </g>
    
    {/* House outline with lit window */}
    <g opacity="0.35">
      <rect x="500" y="460" width="45" height="38" fill="#3a4550"/>
      <path d="M494 460 L522.5 440 L551 460 Z" fill="#2a3540"/>
      <rect x="515" y="472" width="10" height="10" fill="#ffcc66" opacity="0.7"/>
    </g>
    
    {/* More fog wisps in front */}
    <g className="animate-float" opacity="0.75">
      <ellipse cx="150" cy="480" rx="300" ry="60" fill="#505860" opacity="0.7"/>
      <ellipse cx="950" cy="475" rx="280" ry="55" fill="#505860" opacity="0.68"/>
    </g>
  </svg>
);
