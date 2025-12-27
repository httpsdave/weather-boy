import React from 'react';

export const PartlyCloudy: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Sky gradient */}
    <defs>
      <linearGradient id="partlyCloudySkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#6BA3D0', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#B8D8F0', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#partlyCloudySkyGradient)" />
    
    {/* Sun partially behind clouds */}
    <g className="animate-float" opacity="0.7">
      <circle cx="300" cy="110" r="45" fill="#FFD700"/>
      <circle cx="300" cy="110" r="38" fill="#FFA500"/>
    </g>
    
    {/* Multiple clouds */}
    <g className="animate-float">
      <ellipse cx="250" cy="120" rx="55" ry="35" fill="white" opacity="0.95"/>
      <ellipse cx="295" cy="115" rx="60" ry="38" fill="white" opacity="0.95"/>
      <ellipse cx="340" cy="122" rx="50" ry="32" fill="white" opacity="0.95"/>
      <ellipse cx="280" cy="135" rx="45" ry="28" fill="#F0F0F0" opacity="0.9"/>
    </g>
    
    <g className="animate-float-delayed">
      <ellipse cx="750" cy="90" rx="60" ry="38" fill="white" opacity="0.9"/>
      <ellipse cx="800" cy="85" rx="55" ry="35" fill="white" opacity="0.9"/>
      <ellipse cx="840" cy="93" rx="50" ry="32" fill="white" opacity="0.9"/>
      <ellipse cx="790" cy="105" rx="48" ry="30" fill="#F5F5F5" opacity="0.85"/>
    </g>
    
    <g className="animate-float" opacity="0.85">
      <ellipse cx="950" cy="160" rx="50" ry="32" fill="white"/>
      <ellipse cx="990" cy="155" rx="48" ry="30" fill="white"/>
      <ellipse cx="1025" cy="163" rx="45" ry="28" fill="white"/>
    </g>
    
    {/* Mountains */}
    <path d="M0 360 L150 290 L300 330 L450 270 L600 310 L750 250 L900 290 L1050 240 L1200 280 L1200 500 L0 500 Z" 
          fill="#8FA8C0" opacity="0.55"/>
    <path d="M0 390 L200 310 L400 350 L600 290 L800 330 L1000 270 L1200 310 L1200 500 L0 500 Z" 
          fill="#7598B3" opacity="0.65"/>
    
    {/* Hills */}
    <path d="M0 440 L300 420 L600 430 L900 415 L1200 425 L1200 500 L0 500 Z" 
          fill="#72A56C" opacity="0.85"/>
    <path d="M0 465 L400 455 L800 460 L1200 450 L1200 500 L0 500 Z" 
          fill="#5E8F58" opacity="0.9"/>
    
    {/* Trees */}
    <g opacity="0.8">
      <rect x="200" y="450" width="11" height="33" fill="#6D4C41"/>
      <path d="M205.5 450 L187 450 L196.25 422 Z" fill="#2E7D32"/>
      <path d="M205.5 436 L189 436 L197.25 412 Z" fill="#388E3C"/>
      
      <rect x="480" y="455" width="10" height="30" fill="#6D4C41"/>
      <path d="M485 455 L468 455 L476.5 430 Z" fill="#2E7D32"/>
      
      <rect x="820" y="448" width="12" height="35" fill="#6D4C41"/>
      <path d="M826 448 L805 448 L815.5 418 Z" fill="#2E7D32"/>
      <path d="M826 433 L808 433 L817 408 Z" fill="#388E3C"/>
      
      <rect x="1050" y="452" width="10" height="30" fill="#6D4C41"/>
      <path d="M1055 452 L1038 452 L1046.5 427 Z" fill="#2E7D32"/>
    </g>
    
    {/* Small house */}
    <g opacity="0.85">
      <rect x="650" y="455" width="50" height="42" fill="#D4A574"/>
      <path d="M643 455 L675 432 L707 455 Z" fill="#B8342A"/>
      <rect x="663" y="473" width="14" height="24" fill="#795548"/>
      <rect x="682" y="464" width="11" height="11" fill="#87CEEB" opacity="0.65"/>
    </g>
  </svg>
);

export const Overcast: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Dark gray sky */}
    <defs>
      <linearGradient id="overcastSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#7A8A99', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#A8B5C2', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#overcastSkyGradient)" />
    
    {/* Dense cloud coverage */}
    <g className="animate-float" opacity="0.9">
      <ellipse cx="100" cy="80" rx="70" ry="45" fill="#C0C8D0"/>
      <ellipse cx="160" cy="75" rx="65" ry="42" fill="#C0C8D0"/>
      <ellipse cx="210" cy="82" rx="60" ry="40" fill="#C0C8D0"/>
      <ellipse cx="145" cy="95" rx="55" ry="35" fill="#B5BDC5"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.95">
      <ellipse cx="350" cy="100" rx="75" ry="48" fill="#C5CDD5"/>
      <ellipse cx="415" cy="95" rx="70" ry="45" fill="#C5CDD5"/>
      <ellipse cx="475" cy="103" rx="65" ry="42" fill="#C5CDD5"/>
      <ellipse cx="410" cy="115" rx="60" ry="38" fill="#BABCC8"/>
    </g>
    
    <g className="animate-float" opacity="0.92">
      <ellipse cx="650" cy="70" rx="68" ry="44" fill="#C0C8D0"/>
      <ellipse cx="710" cy="65" rx="72" ry="46" fill="#C0C8D0"/>
      <ellipse cx="770" cy="73" rx="65" ry="42" fill="#C0C8D0"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.9">
      <ellipse cx="950" cy="110" rx="70" ry="45" fill="#BFC7CF"/>
      <ellipse cx="1010" cy="105" rx="68" ry="43" fill="#BFC7CF"/>
      <ellipse cx="1065" cy="113" rx="62" ry="40" fill="#BFC7CF"/>
      <ellipse cx="1005" cy="125" rx="58" ry="37" fill="#B5BDC5"/>
    </g>
    
    {/* Lower cloud layer */}
    <g className="animate-float" opacity="0.85">
      <ellipse cx="200" cy="160" rx="80" ry="50" fill="#B0B8C0"/>
      <ellipse cx="270" cy="155" rx="75" ry="48" fill="#B0B8C0"/>
      <ellipse cx="330" cy="163" rx="70" ry="45" fill="#B0B8C0"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.88">
      <ellipse cx="600" cy="140" rx="78" ry="50" fill="#B5BDC5"/>
      <ellipse cx="670" cy="135" rx="73" ry="47" fill="#B5BDC5"/>
      <ellipse cx="735" cy="143" rx="68" ry="44" fill="#B5BDC5"/>
    </g>
    
    {/* Distant mountains - muted colors */}
    <path d="M0 370 L200 300 L400 340 L600 280 L800 320 L1000 260 L1200 300 L1200 500 L0 500 Z" 
          fill="#748591" opacity="0.6"/>
    <path d="M0 400 L180 330 L360 380 L540 320 L720 370 L900 310 L1080 360 L1200 330 L1200 500 L0 500 Z" 
          fill="#65767F" opacity="0.7"/>
    
    {/* Hills */}
    <path d="M0 445 L300 425 L600 435 L900 420 L1200 430 L1200 500 L0 500 Z" 
          fill="#5A6B5A" opacity="0.8"/>
    <path d="M0 468 L400 458 L800 463 L1200 453 L1200 500 L0 500 Z" 
          fill="#4A5A4A" opacity="0.85"/>
    
    {/* Muted trees */}
    <g opacity="0.65">
      <rect x="350" y="455" width="11" height="32" fill="#4A4034"/>
      <path d="M355.5 455 L337 455 L346.25 427 Z" fill="#3A4A2E"/>
      
      <rect x="750" y="450" width="12" height="35" fill="#4A4034"/>
      <path d="M756 450 L735 450 L745.5 420 Z" fill="#3A4A2E"/>
      <path d="M756 435 L738 435 L747 410 Z" fill="#4A5A38"/>
    </g>
  </svg>
);

export const PartlyCloudyDay = PartlyCloudy;

export const PartlyCloudyNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Night sky gradient */}
    <defs>
      <linearGradient id="partlyCloudyNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1a2332', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2d3e50', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#partlyCloudyNightSkyGradient)" />
    
    {/* Stars */}
    <circle cx="150" cy="60" r="2" fill="white" opacity="0.9"/>
    <circle cx="280" cy="45" r="1.5" fill="white" opacity="0.8"/>
    <circle cx="520" cy="70" r="2" fill="white" opacity="0.9"/>
    <circle cx="680" cy="55" r="1.5" fill="white" opacity="0.7"/>
    <circle cx="850" cy="40" r="2" fill="white" opacity="0.95"/>
    <circle cx="1000" cy="65" r="1.5" fill="white" opacity="0.8"/>
    <circle cx="1120" cy="50" r="2" fill="white" opacity="0.85"/>
    
    {/* Moon partially behind clouds */}
    <g className="animate-float" opacity="0.85">
      <circle cx="300" cy="110" r="42" fill="#f0e6d2"/>
      <circle cx="308" cy="105" r="38" fill="#e8dcc0"/>
      {/* Moon craters */}
      <circle cx="295" cy="105" r="6" fill="#d4c4a8" opacity="0.3"/>
      <circle cx="310" cy="115" r="4" fill="#d4c4a8" opacity="0.25"/>
    </g>
    
    {/* Multiple clouds with night coloring */}
    <g className="animate-float">
      <ellipse cx="250" cy="120" rx="55" ry="35" fill="#8a9db0" opacity="0.7"/>
      <ellipse cx="295" cy="115" rx="60" ry="38" fill="#8a9db0" opacity="0.7"/>
      <ellipse cx="340" cy="122" rx="50" ry="32" fill="#8a9db0" opacity="0.7"/>
      <ellipse cx="280" cy="135" rx="45" ry="28" fill="#7a8d9f" opacity="0.65"/>
    </g>
    
    <g className="animate-float-delayed">
      <ellipse cx="750" cy="90" rx="60" ry="38" fill="#8a9db0" opacity="0.65"/>
      <ellipse cx="800" cy="85" rx="55" ry="35" fill="#8a9db0" opacity="0.65"/>
      <ellipse cx="840" cy="93" rx="50" ry="32" fill="#8a9db0" opacity="0.65"/>
      <ellipse cx="790" cy="105" rx="48" ry="30" fill="#7a8d9f" opacity="0.6"/>
    </g>
    
    <g className="animate-float" opacity="0.6">
      <ellipse cx="950" cy="160" rx="50" ry="32" fill="#8a9db0"/>
      <ellipse cx="990" cy="155" rx="48" ry="30" fill="#8a9db0"/>
      <ellipse cx="1025" cy="163" rx="45" ry="28" fill="#8a9db0"/>
    </g>
    
    {/* Dark mountains */}
    <path d="M0 360 L150 290 L300 330 L450 270 L600 310 L750 250 L900 290 L1050 240 L1200 280 L1200 500 L0 500 Z" 
          fill="#2a3f52" opacity="0.7"/>
    <path d="M0 390 L200 310 L400 350 L600 290 L800 330 L1000 270 L1200 310 L1200 500 L0 500 Z" 
          fill="#1f3142" opacity="0.8"/>
    
    {/* Dark hills */}
    <path d="M0 440 L300 420 L600 430 L900 415 L1200 425 L1200 500 L0 500 Z" 
          fill="#2d4a38" opacity="0.85"/>
    <path d="M0 465 L400 455 L800 460 L1200 450 L1200 500 L0 500 Z" 
          fill="#1f3828" opacity="0.9"/>
    
    {/* Dark trees */}
    <g opacity="0.7">
      <rect x="200" y="450" width="11" height="33" fill="#2d2520"/>
      <path d="M205.5 450 L187 450 L196.25 422 Z" fill="#1a3520"/>
      <path d="M205.5 436 L189 436 L197.25 412 Z" fill="#234528"/>
      
      <rect x="480" y="455" width="10" height="30" fill="#2d2520"/>
      <path d="M485 455 L468 455 L476.5 430 Z" fill="#1a3520"/>
      
      <rect x="820" y="448" width="12" height="35" fill="#2d2520"/>
      <path d="M826 448 L805 448 L815.5 418 Z" fill="#1a3520"/>
      <path d="M826 433 L808 433 L817 408 Z" fill="#234528"/>
      
      <rect x="1050" y="452" width="10" height="30" fill="#2d2520"/>
      <path d="M1055 452 L1038 452 L1046.5 427 Z" fill="#1a3520"/>
    </g>
    
    {/* Small house with lit window */}
    <g opacity="0.8">
      <rect x="650" y="455" width="50" height="42" fill="#3a4550"/>
      <path d="M643 455 L675 432 L707 455 Z" fill="#2a2220"/>
      <rect x="663" y="473" width="14" height="24" fill="#2d2520"/>
      <rect x="682" y="464" width="11" height="11" fill="#ffcc66" opacity="0.8"/>
    </g>
  </svg>
);

export const OvercastDay = Overcast;

export const OvercastNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    {/* Dark night sky */}
    <defs>
      <linearGradient id="overcastNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2a3540', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#4a5560', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#overcastNightSkyGradient)" />
    
    {/* Dense cloud coverage - darker for night */}
    <g className="animate-float" opacity="0.8">
      <ellipse cx="100" cy="80" rx="70" ry="45" fill="#5a6570"/>
      <ellipse cx="160" cy="75" rx="65" ry="42" fill="#5a6570"/>
      <ellipse cx="210" cy="82" rx="60" ry="40" fill="#5a6570"/>
      <ellipse cx="145" cy="95" rx="55" ry="35" fill="#4a5560"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.85">
      <ellipse cx="350" cy="100" rx="75" ry="48" fill="#606870"/>
      <ellipse cx="415" cy="95" rx="70" ry="45" fill="#606870"/>
      <ellipse cx="475" cy="103" rx="65" ry="42" fill="#606870"/>
      <ellipse cx="410" cy="115" rx="60" ry="38" fill="#555d68"/>
    </g>
    
    <g className="animate-float" opacity="0.82">
      <ellipse cx="650" cy="70" rx="68" ry="44" fill="#5a6570"/>
      <ellipse cx="710" cy="65" rx="72" ry="46" fill="#5a6570"/>
      <ellipse cx="770" cy="73" rx="65" ry="42" fill="#5a6570"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.8">
      <ellipse cx="950" cy="110" rx="70" ry="45" fill="#5f6770"/>
      <ellipse cx="1010" cy="105" rx="68" ry="43" fill="#5f6770"/>
      <ellipse cx="1065" cy="113" rx="62" ry="40" fill="#5f6770"/>
      <ellipse cx="1005" cy="125" rx="58" ry="37" fill="#4f5760"/>
    </g>
    
    {/* Lower cloud layer */}
    <g className="animate-float" opacity="0.75">
      <ellipse cx="200" cy="160" rx="80" ry="50" fill="#4a5560"/>
      <ellipse cx="270" cy="155" rx="75" ry="48" fill="#4a5560"/>
      <ellipse cx="330" cy="163" rx="70" ry="45" fill="#4a5560"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.78">
      <ellipse cx="600" cy="140" rx="78" ry="50" fill="#505860"/>
      <ellipse cx="670" cy="135" rx="73" ry="47" fill="#505860"/>
      <ellipse cx="735" cy="143" rx="68" ry="44" fill="#505860"/>
    </g>
    
    {/* Very dark mountains */}
    <path d="M0 370 L200 300 L400 340 L600 280 L800 320 L1000 260 L1200 300 L1200 500 L0 500 Z" 
          fill="#2a3540" opacity="0.8"/>
    <path d="M0 400 L180 330 L360 380 L540 320 L720 370 L900 310 L1080 360 L1200 330 L1200 500 L0 500 Z" 
          fill="#1f2a35" opacity="0.85"/>
    
    {/* Dark hills */}
    <path d="M0 445 L300 425 L600 435 L900 420 L1200 430 L1200 500 L0 500 Z" 
          fill="#2a3a30" opacity="0.8"/>
    <path d="M0 468 L400 458 L800 463 L1200 453 L1200 500 L0 500 Z" 
          fill="#1f2f25" opacity="0.85"/>
    
    {/* Very dark trees */}
    <g opacity="0.6">
      <rect x="350" y="455" width="11" height="32" fill="#202020"/>
      <path d="M355.5 455 L337 455 L346.25 427 Z" fill="#1a2520"/>
      
      <rect x="750" y="450" width="12" height="35" fill="#202020"/>
      <path d="M756 450 L735 450 L745.5 420 Z" fill="#1a2520"/>
      <path d="M756 435 L738 435 L747 410 Z" fill="#1f3028"/>
    </g>
  </svg>
);
