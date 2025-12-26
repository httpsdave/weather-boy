import React from 'react';

export const LightSnow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="lightSnowSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#A0AEC0', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#D0D8E0', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#lightSnowSkyGradient)" />
    
    {/* Light gray clouds */}
    <g className="animate-float" opacity="0.85">
      <ellipse cx="220" cy="90" rx="68" ry="44" fill="#C8D0D8"/>
      <ellipse cx="285" cy="85" rx="63" ry="41" fill="#C8D0D8"/>
      <ellipse cx="345" cy="93" rx="58" ry="38" fill="#C8D0D8"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.88">
      <ellipse cx="780" cy="105" rx="72" ry="46" fill="#D0D8E0"/>
      <ellipse cx="850" cy="100" rx="68" ry="44" fill="#D0D8E0"/>
      <ellipse cx="915" cy="108" rx="63" ry="41" fill="#D0D8E0"/>
    </g>
    
    {/* Light snowflakes */}
    <g className="animate-snow" opacity="0.7">
      <circle cx="150" cy="180" r="3" fill="white"/>
      <circle cx="280" cy="210" r="2.5" fill="white"/>
      <circle cx="420" cy="190" r="3" fill="white"/>
      <circle cx="550" cy="220" r="2.5" fill="white"/>
      <circle cx="680" cy="200" r="3" fill="white"/>
      <circle cx="810" cy="215" r="2.5" fill="white"/>
      <circle cx="940" cy="195" r="3" fill="white"/>
      <circle cx="1070" cy="205" r="2.5" fill="white"/>
      
      <circle cx="200" cy="270" r="2.5" fill="white"/>
      <circle cx="330" cy="250" r="3" fill="white"/>
      <circle cx="470" cy="280" r="2.5" fill="white"/>
      <circle cx="600" cy="260" r="3" fill="white"/>
      <circle cx="730" cy="275" r="2.5" fill="white"/>
      <circle cx="860" cy="255" r="3" fill="white"/>
      <circle cx="990" cy="270" r="2.5" fill="white"/>
      <circle cx="1120" cy="265" r="3" fill="white"/>
    </g>
    
    {/* Snowy mountains */}
    <path d="M0 360 L150 290 L300 330 L450 270 L600 310 L750 250 L900 290 L1050 240 L1200 280 L1200 500 L0 500 Z" 
          fill="#B0BCC8" opacity="0.6"/>
    <path d="M0 390 L200 310 L400 350 L600 290 L800 330 L1000 270 L1200 310 L1200 500 L0 500 Z" 
          fill="#98A8B8" opacity="0.7"/>
    
    {/* Snow-covered peaks */}
    <path d="M150 290 L180 315 L120 315 Z" fill="white" opacity="0.95"/>
    <path d="M450 270 L485 300 L415 300 Z" fill="white" opacity="0.95"/>
    <path d="M750 250 L790 280 L710 280 Z" fill="white" opacity="0.95"/>
    <path d="M1050 240 L1090 270 L1010 270 Z" fill="white" opacity="0.95"/>
    
    {/* Snowy hills */}
    <path d="M0 440 L300 420 L600 430 L900 415 L1200 425 L1200 500 L0 500 Z" 
          fill="#E8ECF0" opacity="0.9"/>
    <path d="M0 465 L400 455 L800 460 L1200 450 L1200 500 L0 500 Z" 
          fill="#F0F4F8" opacity="0.95"/>
    
    {/* Snow-covered trees */}
    <g opacity="0.8">
      <rect x="250" y="445" width="11" height="33" fill="#5A4A3A"/>
      <path d="M255.5 445 L237 445 L246.25 417 Z" fill="#2A4020"/>
      <path d="M255.5 430 L239 430 L247.25 406 Z" fill="#3A5030"/>
      {/* Snow on tree */}
      <ellipse cx="246.25" cy="420" rx="12" ry="8" fill="white" opacity="0.9"/>
      
      <rect x="720" y="450" width="12" height="35" fill="#5A4A3A"/>
      <path d="M726 450 L705 450 L715.5 420 Z" fill="#2A4020"/>
      <path d="M726 435 L708 435 L717 410 Z" fill="#3A5030"/>
      {/* Snow on tree */}
      <ellipse cx="715.5" cy="423" rx="13" ry="8" fill="white" opacity="0.9"/>
    </g>
  </svg>
);

export const ModerateSnow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="moderateSnowSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#8A98AC', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#B8C4D0', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#moderateSnowSkyGradient)" />
    
    {/* Darker clouds */}
    <g className="animate-float" opacity="0.9">
      <ellipse cx="200" cy="80" rx="75" ry="48" fill="#A8B0B8"/>
      <ellipse cx="270" cy="75" rx="70" ry="45" fill="#A8B0B8"/>
      <ellipse cx="335" cy="83" rx="65" ry="42" fill="#A8B0B8"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.92">
      <ellipse cx="700" cy="95" rx="78" ry="50" fill="#B0B8C0"/>
      <ellipse cx="775" cy="90" rx="73" ry="47" fill="#B0B8C0"/>
      <ellipse cx="845" cy="98" rx="68" ry="44" fill="#B0B8C0"/>
    </g>
    
    {/* Moderate snowfall - more dense */}
    <g className="animate-snow" opacity="0.8">
      {/* Layer 1 */}
      <circle cx="100" cy="170" r="3.5" fill="white"/>
      <circle cx="200" cy="190" r="3" fill="white"/>
      <circle cx="300" cy="180" r="3.5" fill="white"/>
      <circle cx="400" cy="200" r="3" fill="white"/>
      <circle cx="500" cy="175" r="3.5" fill="white"/>
      <circle cx="600" cy="195" r="3" fill="white"/>
      <circle cx="700" cy="185" r="3.5" fill="white"/>
      <circle cx="800" cy="205" r="3" fill="white"/>
      <circle cx="900" cy="178" r="3.5" fill="white"/>
      <circle cx="1000" cy="198" r="3" fill="white"/>
      <circle cx="1100" cy="188" r="3.5" fill="white"/>
      
      {/* Layer 2 */}
      <circle cx="150" cy="240" r="3" fill="white"/>
      <circle cx="250" cy="220" r="3.5" fill="white"/>
      <circle cx="350" cy="250" r="3" fill="white"/>
      <circle cx="450" cy="230" r="3.5" fill="white"/>
      <circle cx="550" cy="245" r="3" fill="white"/>
      <circle cx="650" cy="225" r="3.5" fill="white"/>
      <circle cx="750" cy="255" r="3" fill="white"/>
      <circle cx="850" cy="235" r="3.5" fill="white"/>
      <circle cx="950" cy="248" r="3" fill="white"/>
      <circle cx="1050" cy="228" r="3.5" fill="white"/>
      <circle cx="1150" cy="242" r="3" fill="white"/>
      
      {/* Layer 3 */}
      <circle cx="120" cy="310" r="3.5" fill="white"/>
      <circle cx="220" cy="290" r="3" fill="white"/>
      <circle cx="320" cy="305" r="3.5" fill="white"/>
      <circle cx="420" cy="295" r="3" fill="white"/>
      <circle cx="520" cy="315" r="3.5" fill="white"/>
      <circle cx="620" cy="300" r="3" fill="white"/>
      <circle cx="720" cy="310" r="3.5" fill="white"/>
      <circle cx="820" cy="292" r="3" fill="white"/>
      <circle cx="920" cy="308" r="3.5" fill="white"/>
      <circle cx="1020" cy="297" r="3" fill="white"/>
      <circle cx="1120" cy="312" r="3.5" fill="white"/>
    </g>
    
    {/* Snowy mountains */}
    <path d="M0 370 L200 300 L400 340 L600 280 L800 320 L1000 260 L1200 300 L1200 500 L0 500 Z" 
          fill="#9AA8B4" opacity="0.7"/>
    <path d="M0 400 L180 330 L360 380 L540 320 L720 370 L900 310 L1080 360 L1200 330 L1200 500 L0 500 Z" 
          fill="#8A98A4" opacity="0.75"/>
    
    {/* Heavily snow-covered ground */}
    <path d="M0 445 L300 425 L600 435 L900 420 L1200 430 L1200 500 L0 500 Z" 
          fill="#E0E8F0" opacity="0.95"/>
    <path d="M0 468 L400 458 L800 463 L1200 453 L1200 500 L0 500 Z" 
          fill="#F0F6FC" opacity="0.98"/>
    
    {/* Snow-covered trees */}
    <g opacity="0.75">
      <rect x="300" y="450" width="10" height="30" fill="#4A3A2A"/>
      <path d="M305 450 L288 450 L296.5 425 Z" fill="#1A3010"/>
      <ellipse cx="296.5" cy="428" rx="13" ry="9" fill="white" opacity="0.95"/>
      
      <rect x="800" y="448" width="11" height="32" fill="#4A3A2A"/>
      <path d="M805.5 448 L787 448 L796.25 420 Z" fill="#1A3010"/>
      <ellipse cx="796.25" cy="423" rx="14" ry="9" fill="white" opacity="0.95"/>
    </g>
  </svg>
);

export const HeavySnow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="heavySnowSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#6A7884', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#98A4B0', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#heavySnowSkyGradient)" />
    
    {/* Very dark snow clouds */}
    <g className="animate-float" opacity="0.95">
      <ellipse cx="180" cy="70" rx="85" ry="55" fill="#808C98"/>
      <ellipse cx="260" cy="65" rx="80" ry="52" fill="#808C98"/>
      <ellipse cx="335" cy="73" rx="75" ry="50" fill="#808C98"/>
      <ellipse cx="255" cy="88" rx="70" ry="45" fill="#707C88"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.97">
      <ellipse cx="650" cy="85" rx="90" ry="58" fill="#889098"/>
      <ellipse cx="735" cy="80" rx="85" ry="55" fill="#889098"/>
      <ellipse cx="815" cy="88" rx="80" ry="52" fill="#889098"/>
      <ellipse cx="730" cy="103" rx="75" ry="48" fill="#788088"/>
    </g>
    
    {/* Very heavy snowfall - very dense */}
    <g className="animate-snow" opacity="0.9">
      {/* Multiple dense layers */}
      <circle cx="60" cy="150" r="4" fill="white"/>
      <circle cx="120" cy="165" r="3.5" fill="white"/>
      <circle cx="180" cy="155" r="4" fill="white"/>
      <circle cx="240" cy="170" r="3.5" fill="white"/>
      <circle cx="300" cy="160" r="4" fill="white"/>
      <circle cx="360" cy="175" r="3.5" fill="white"/>
      <circle cx="420" cy="152" r="4" fill="white"/>
      <circle cx="480" cy="168" r="3.5" fill="white"/>
      <circle cx="540" cy="158" r="4" fill="white"/>
      <circle cx="600" cy="172" r="3.5" fill="white"/>
      <circle cx="660" cy="162" r="4" fill="white"/>
      <circle cx="720" cy="177" r="3.5" fill="white"/>
      <circle cx="780" cy="154" r="4" fill="white"/>
      <circle cx="840" cy="169" r="3.5" fill="white"/>
      <circle cx="900" cy="159" r="4" fill="white"/>
      <circle cx="960" cy="174" r="3.5" fill="white"/>
      <circle cx="1020" cy="164" r="4" fill="white"/>
      <circle cx="1080" cy="171" r="3.5" fill="white"/>
      <circle cx="1140" cy="161" r="4" fill="white"/>
      
      <circle cx="90" cy="210" r="3.5" fill="white"/>
      <circle cx="150" cy="225" r="4" fill="white"/>
      <circle cx="210" cy="215" r="3.5" fill="white"/>
      <circle cx="270" cy="230" r="4" fill="white"/>
      <circle cx="330" cy="220" r="3.5" fill="white"/>
      <circle cx="390" cy="235" r="4" fill="white"/>
      <circle cx="450" cy="212" r="3.5" fill="white"/>
      <circle cx="510" cy="228" r="4" fill="white"/>
      <circle cx="570" cy="218" r="3.5" fill="white"/>
      <circle cx="630" cy="232" r="4" fill="white"/>
      <circle cx="690" cy="222" r="3.5" fill="white"/>
      <circle cx="750" cy="237" r="4" fill="white"/>
      <circle cx="810" cy="214" r="3.5" fill="white"/>
      <circle cx="870" cy="229" r="4" fill="white"/>
      <circle cx="930" cy="219" r="3.5" fill="white"/>
      <circle cx="990" cy="234" r="4" fill="white"/>
      <circle cx="1050" cy="224" r="3.5" fill="white"/>
      <circle cx="1110" cy="231" r="4" fill="white"/>
      <circle cx="1170" cy="221" r="3.5" fill="white"/>
      
      <circle cx="75" cy="280" r="4" fill="white"/>
      <circle cx="135" cy="295" r="3.5" fill="white"/>
      <circle cx="195" cy="285" r="4" fill="white"/>
      <circle cx="255" cy="300" r="3.5" fill="white"/>
      <circle cx="315" cy="290" r="4" fill="white"/>
      <circle cx="375" cy="305" r="3.5" fill="white"/>
      <circle cx="435" cy="282" r="4" fill="white"/>
      <circle cx="495" cy="298" r="3.5" fill="white"/>
      <circle cx="555" cy="288" r="4" fill="white"/>
      <circle cx="615" cy="302" r="3.5" fill="white"/>
      <circle cx="675" cy="292" r="4" fill="white"/>
      <circle cx="735" cy="307" r="3.5" fill="white"/>
      <circle cx="795" cy="284" r="4" fill="white"/>
      <circle cx="855" cy="299" r="3.5" fill="white"/>
      <circle cx="915" cy="289" r="4" fill="white"/>
      <circle cx="975" cy="304" r="3.5" fill="white"/>
      <circle cx="1035" cy="294" r="4" fill="white"/>
      <circle cx="1095" cy="301" r="3.5" fill="white"/>
      <circle cx="1155" cy="291" r="4" fill="white"/>
    </g>
    
    {/* Barely visible mountains through heavy snow */}
    <path d="M0 380 L200 310 L400 350 L600 290 L800 330 L1000 270 L1200 310 L1200 500 L0 500 Z" 
          fill="#7A8690" opacity="0.5"/>
    <path d="M0 410 L180 340 L360 390 L540 330 L720 380 L900 320 L1080 370 L1200 340 L1200 500 L0 500 Z" 
          fill="#6A7680" opacity="0.6"/>
    
    {/* Deep snow-covered ground */}
    <path d="M0 450 L300 430 L600 440 L900 425 L1200 435 L1200 500 L0 500 Z" 
          fill="#DDE8F4" opacity="0.98"/>
    <path d="M0 470 L400 460 L800 465 L1200 455 L1200 500 L0 500 Z" 
          fill="#F0F8FF" opacity="1"/>
    
    {/* Nearly buried trees */}
    <g opacity="0.6">
      <rect x="380" y="458" width="9" height="25" fill="#3A2A1A"/>
      <path d="M384.5 458 L368 458 L376.25 438 Z" fill="#0A2000"/>
      <ellipse cx="376.25" cy="440" rx="14" ry="10" fill="white" opacity="0.98"/>
      
      <rect x="920" y="456" width="10" height="28" fill="#3A2A1A"/>
      <path d="M925 456 L908 456 L916.5 434 Z" fill="#0A2000"/>
      <ellipse cx="916.5" cy="436" rx="15" ry="10" fill="white" opacity="0.98"/>
    </g>
  </svg>
);
