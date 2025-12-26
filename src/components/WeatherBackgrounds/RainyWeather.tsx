import React from 'react';

export const LightDrizzle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="drizzleSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#7A8C9E', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#A5B5C5', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#drizzleSkyGradient)" />
    
    {/* Clouds */}
    <g className="animate-float" opacity="0.85">
      <ellipse cx="250" cy="90" rx="65" ry="42" fill="#C0C8D0"/>
      <ellipse cx="310" cy="85" rx="60" ry="40" fill="#C0C8D0"/>
      <ellipse cx="365" cy="93" rx="55" ry="38" fill="#C0C8D0"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.88">
      <ellipse cx="750" cy="110" rx="70" ry="45" fill="#B8C0C8"/>
      <ellipse cx="815" cy="105" rx="65" ry="42" fill="#B8C0C8"/>
      <ellipse cx="875" cy="113" rx="60" ry="40" fill="#B8C0C8"/>
    </g>
    
    {/* Light drizzle drops */}
    <g className="animate-rain" opacity="0.4">
      <line x1="150" y1="200" x2="145" y2="240" stroke="#7AA5C5" strokeWidth="1.5"/>
      <line x1="280" y1="180" x2="275" y2="220" stroke="#7AA5C5" strokeWidth="1.5"/>
      <line x1="410" y1="210" x2="405" y2="250" stroke="#7AA5C5" strokeWidth="1.5"/>
      <line x1="540" y1="190" x2="535" y2="230" stroke="#7AA5C5" strokeWidth="1.5"/>
      <line x1="670" y1="205" x2="665" y2="245" stroke="#7AA5C5" strokeWidth="1.5"/>
      <line x1="800" y1="185" x2="795" y2="225" stroke="#7AA5C5" strokeWidth="1.5"/>
      <line x1="930" y1="200" x2="925" y2="240" stroke="#7AA5C5" strokeWidth="1.5"/>
      <line x1="1060" y1="195" x2="1055" y2="235" stroke="#7AA5C5" strokeWidth="1.5"/>
    </g>
    
    {/* Mountains */}
    <path d="M0 370 L200 300 L400 340 L600 280 L800 320 L1000 260 L1200 300 L1200 500 L0 500 Z" 
          fill="#758590" opacity="0.6"/>
    <path d="M0 400 L180 330 L360 380 L540 320 L720 370 L900 310 L1080 360 L1200 330 L1200 500 L0 500 Z" 
          fill="#65767F" opacity="0.7"/>
    
    {/* Hills */}
    <path d="M0 445 L300 425 L600 435 L900 420 L1200 430 L1200 500 L0 500 Z" 
          fill="#5C7860" opacity="0.75"/>
    <path d="M0 468 L400 458 L800 463 L1200 453 L1200 500 L0 500 Z" 
          fill="#4D6850" opacity="0.8"/>
    
    {/* Trees */}
    <g opacity="0.7">
      <rect x="220" y="455" width="10" height="30" fill="#5A4A3A"/>
      <path d="M225 455 L208 455 L216.5 430 Z" fill="#3A5030"/>
      
      <rect x="680" y="450" width="11" height="32" fill="#5A4A3A"/>
      <path d="M685.5 450 L667 450 L676.25 422 Z" fill="#3A5030"/>
    </g>
  </svg>
);

export const ModerateRain: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="rainSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#5A6C7E', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8A9AA8', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#rainSkyGradient)" />
    
    {/* Dark rain clouds */}
    <g className="animate-float" opacity="0.9">
      <ellipse cx="200" cy="80" rx="75" ry="48" fill="#6B7B8C"/>
      <ellipse cx="270" cy="75" rx="70" ry="45" fill="#6B7B8C"/>
      <ellipse cx="335" cy="83" rx="65" ry="42" fill="#6B7B8C"/>
      <ellipse cx="265" cy="95" rx="60" ry="38" fill="#5D6D7C"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.92">
      <ellipse cx="650" cy="100" rx="80" ry="50" fill="#707F90"/>
      <ellipse cx="725" cy="95" rx="75" ry="48" fill="#707F90"/>
      <ellipse cx="795" cy="103" rx="70" ry="45" fill="#707F90"/>
      <ellipse cx="720" cy="115" rx="65" ry="42" fill="#626F80"/>
    </g>
    
    <g className="animate-float" opacity="0.9">
      <ellipse cx="1000" cy="90" rx="72" ry="46" fill="#6B7B8C"/>
      <ellipse cx="1065" cy="85" rx="68" ry="44" fill="#6B7B8C"/>
      <ellipse cx="1125" cy="93" rx="63" ry="41" fill="#6B7B8C"/>
    </g>
    
    {/* Moderate rain */}
    <g className="animate-rain" opacity="0.6">
      <line x1="100" y1="180" x2="93" y2="240" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="180" y1="200" x2="173" y2="260" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="260" y1="170" x2="253" y2="230" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="340" y1="190" x2="333" y2="250" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="420" y1="185" x2="413" y2="245" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="500" y1="195" x2="493" y2="255" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="580" y1="175" x2="573" y2="235" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="660" y1="188" x2="653" y2="248" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="740" y1="192" x2="733" y2="252" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="820" y1="178" x2="813" y2="238" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="900" y1="198" x2="893" y2="258" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="980" y1="182" x2="973" y2="242" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="1060" y1="190" x2="1053" y2="250" stroke="#6A95B5" strokeWidth="2.5"/>
      <line x1="1140" y1="185" x2="1133" y2="245" stroke="#6A95B5" strokeWidth="2.5"/>
    </g>
    
    {/* Mountains */}
    <path d="M0 380 L200 310 L400 350 L600 290 L800 330 L1000 270 L1200 310 L1200 500 L0 500 Z" 
          fill="#5A6A75" opacity="0.65"/>
    <path d="M0 410 L180 340 L360 390 L540 330 L720 380 L900 320 L1080 370 L1200 340 L1200 500 L0 500 Z" 
          fill="#4A5A65" opacity="0.75"/>
    
    {/* Hills */}
    <path d="M0 450 L300 430 L600 440 L900 425 L1200 435 L1200 500 L0 500 Z" 
          fill="#4A5E52" opacity="0.8"/>
    <path d="M0 470 L400 460 L800 465 L1200 455 L1200 500 L0 500 Z" 
          fill="#3A4E42" opacity="0.85"/>
    
    {/* Trees */}
    <g opacity="0.65">
      <rect x="280" y="455" width="10" height="30" fill="#4A3A2A"/>
      <path d="M285 455 L268 455 L276.5 430 Z" fill="#2A4020"/>
      
      <rect x="750" y="450" width="11" height="32" fill="#4A3A2A"/>
      <path d="M755.5 450 L737 450 L746.25 422 Z" fill="#2A4020"/>
    </g>
  </svg>
);

export const HeavyRain: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="heavyRainSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3A4A5C', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#5A6A7C', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#heavyRainSkyGradient)" />
    
    {/* Very dark storm clouds */}
    <g className="animate-float" opacity="0.95">
      <ellipse cx="180" cy="70" rx="85" ry="55" fill="#4A5563"/>
      <ellipse cx="260" cy="65" rx="80" ry="52" fill="#4A5563"/>
      <ellipse cx="335" cy="73" rx="75" ry="50" fill="#4A5563"/>
      <ellipse cx="255" cy="88" rx="70" ry="45" fill="#3C4651"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.97">
      <ellipse cx="550" cy="90" rx="90" ry="58" fill="#505D6B"/>
      <ellipse cx="635" cy="85" rx="85" ry="55" fill="#505D6B"/>
      <ellipse cx="715" cy="93" rx="80" ry="52" fill="#505D6B"/>
      <ellipse cx="630" cy="108" rx="75" ry="48" fill="#424F5C"/>
    </g>
    
    <g className="animate-float" opacity="0.95">
      <ellipse cx="950" cy="80" rx="82" ry="53" fill="#4A5563"/>
      <ellipse cx="1025" cy="75" rx="78" ry="51" fill="#4A5563"/>
      <ellipse cx="1095" cy="83" rx="73" ry="48" fill="#4A5563"/>
    </g>
    
    {/* Heavy rain - denser pattern */}
    <g className="animate-rain" opacity="0.75">
      {/* Row 1 */}
      <line x1="80" y1="160" x2="70" y2="240" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="140" y1="180" x2="130" y2="260" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="200" y1="170" x2="190" y2="250" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="260" y1="190" x2="250" y2="270" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="320" y1="165" x2="310" y2="245" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="380" y1="185" x2="370" y2="265" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="440" y1="175" x2="430" y2="255" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="500" y1="195" x2="490" y2="275" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="560" y1="168" x2="550" y2="248" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="620" y1="188" x2="610" y2="268" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="680" y1="178" x2="670" y2="258" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="740" y1="192" x2="730" y2="272" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="800" y1="172" x2="790" y2="252" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="860" y1="186" x2="850" y2="266" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="920" y1="182" x2="910" y2="262" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="980" y1="176" x2="970" y2="256" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="1040" y1="190" x2="1030" y2="270" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="1100" y1="185" x2="1090" y2="265" stroke="#5A85A5" strokeWidth="3"/>
      
      {/* Row 2 - offset */}
      <line x1="110" y1="220" x2="100" y2="300" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="170" y1="210" x2="160" y2="290" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="230" y1="225" x2="220" y2="305" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="290" y1="215" x2="280" y2="295" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="350" y1="230" x2="340" y2="310" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="410" y1="220" x2="400" y2="300" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="470" y1="212" x2="460" y2="292" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="530" y1="228" x2="520" y2="308" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="590" y1="218" x2="580" y2="298" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="650" y1="222" x2="640" y2="302" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="710" y1="216" x2="700" y2="296" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="770" y1="226" x2="760" y2="306" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="830" y1="214" x2="820" y2="294" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="890" y1="224" x2="880" y2="304" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="950" y1="218" x2="940" y2="298" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="1010" y1="228" x2="1000" y2="308" stroke="#5A85A5" strokeWidth="3"/>
      <line x1="1070" y1="220" x2="1060" y2="300" stroke="#5A85A5" strokeWidth="3"/>
    </g>
    
    {/* Mountains barely visible */}
    <path d="M0 390 L200 320 L400 360 L600 300 L800 340 L1000 280 L1200 320 L1200 500 L0 500 Z" 
          fill="#3A4A55" opacity="0.6"/>
    <path d="M0 420 L180 350 L360 400 L540 340 L720 390 L900 330 L1080 380 L1200 350 L1200 500 L0 500 Z" 
          fill="#2A3A45" opacity="0.7"/>
    
    {/* Dark hills */}
    <path d="M0 455 L300 435 L600 445 L900 430 L1200 440 L1200 500 L0 500 Z" 
          fill="#2A3E32" opacity="0.8"/>
    
    {/* Tree silhouettes */}
    <g opacity="0.5">
      <rect x="350" y="460" width="10" height="28" fill="#2A2A1A"/>
      <path d="M355 460 L338 460 L346.5 438 Z" fill="#1A2A10"/>
      
      <rect x="850" y="458" width="11" height="30" fill="#2A2A1A"/>
      <path d="M855.5 458 L837 458 L846.25 432 Z" fill="#1A2A10"/>
    </g>
  </svg>
);
