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
    
    {/* Snowy mountains - flat 2.0 */}
    <g opacity="0.7">
      <path d="M0 360 L110 300 L155 325 L0 380 Z" fill="#C0CAD8"/>
      <path d="M155 325 L110 300 L250 285 L295 310 Z" fill="#B0BDCB"/>
      <path d="M295 310 L250 285 L390 275 L435 300 Z" fill="#C0CAD8"/>
      <path d="M435 300 L390 275 L530 270 L575 295 Z" fill="#B0BDCB"/>
      <path d="M575 295 L530 270 L670 280 L715 305 Z" fill="#C0CAD8"/>
      <path d="M715 305 L670 280 L810 285 L855 310 Z" fill="#B0BDCB"/>
      <path d="M855 310 L810 285 L950 290 L995 315 Z" fill="#C0CAD8"/>
      <path d="M995 315 L950 290 L1090 295 L1200 320 Z" fill="#B0BDCB"/>
      <path d="M0 380 L155 325 L295 310 L435 300 L575 295 L715 305 L855 310 L995 315 L1200 320 L1200 500 L0 500 Z" fill="#A0B0BE"/>
    </g>
    <g opacity="0.8">
      <path d="M0 390 L125 330 L165 355 L0 410 Z" fill="#A8B6C4"/>
      <path d="M165 355 L125 330 L285 318 L325 343 Z" fill="#98A8B4"/>
      <path d="M325 343 L285 318 L445 310 L485 335 Z" fill="#A8B6C4"/>
      <path d="M485 335 L445 310 L605 307 L645 332 Z" fill="#98A8B4"/>
      <path d="M645 332 L605 307 L765 315 L805 340 Z" fill="#A8B6C4"/>
      <path d="M805 340 L765 315 L925 322 L965 347 Z" fill="#98A8B4"/>
      <path d="M965 347 L925 322 L1085 328 L1200 350 Z" fill="#A8B6C4"/>
      <path d="M0 410 L165 355 L325 343 L485 335 L645 332 L805 340 L965 347 L1200 350 L1200 500 L0 500 Z" fill="#88A0AE"/>
    </g>
    
    {/* Snow-covered peaks - flat 2.0 */}
    <g opacity="0.95">
      <path d="M110 300 L95 300 L110 280 L125 300 Z" fill="white"/>
      <path d="M110 300 L95 300 L110 287 Z" fill="#F0F8FF"/>
      <path d="M390 275 L375 275 L390 255 L405 275 Z" fill="white"/>
      <path d="M390 275 L375 275 L390 262 Z" fill="#F0F8FF"/>
      <path d="M670 280 L655 280 L670 260 L685 280 Z" fill="white"/>
      <path d="M670 280 L655 280 L670 267 Z" fill="#F0F8FF"/>
      <path d="M950 290 L935 290 L950 270 L965 290 Z" fill="white"/>
      <path d="M950 290 L935 290 L950 277 Z" fill="#F0F8FF"/>
    </g>
    
    {/* Snowy hills - flat 2.0 layered */}
    <path d="M0 440 L150 430 L300 425 L450 420 L600 427 L750 422 L900 419 L1050 425 L1200 429 L1200 500 L0 500 Z" 
          fill="#E8ECF0"/>
    <path d="M0 440 L150 430 L300 425 L450 420 L600 427 L750 422 L900 419 L1050 425 L1200 429 L1200 465 L0 465 Z" 
          fill="#F0F4F8" opacity="0.5"/>
    <path d="M0 467 L200 462 L400 457 L600 461 L800 464 L1000 459 L1200 454 L1200 500 L0 500 Z" 
          fill="#F0F4F8"/>
    
    {/* Snow-covered trees - flat 2.0 */}
    <g>
      <ellipse cx="255.5" cy="482" rx="10" ry="3" fill="#D0D8E0" opacity="0.4"/>
      <rect x="250" y="445" width="11" height="33" fill="#5A4A3A"/>
      <rect x="250" y="445" width="4" height="33" fill="#4A3A2A"/>
      <path d="M255.5 445 L239 445 L255.5 417 L272 445 Z" fill="#2A4020"/>
      <path d="M255.5 445 L239 445 L255.5 427 Z" fill="#1A3010"/>
      <path d="M255.5 430 L243 430 L255.5 406 L268 430 Z" fill="#3A5030"/>
      <path d="M255.5 430 L243 430 L255.5 415 Z" fill="#2A4020"/>
      <ellipse cx="255.5" cy="420" rx="12" ry="8" fill="white" opacity="0.92"/>
      
      <ellipse cx="726" cy="488" rx="11" ry="3" fill="#D0D8E0" opacity="0.4"/>
      <rect x="720" y="450" width="12" height="35" fill="#5A4A3A"/>
      <rect x="720" y="450" width="4.5" height="35" fill="#4A3A2A"/>
      <path d="M726 450 L708 450 L726 420 L744 450 Z" fill="#2A4020"/>
      <path d="M726 450 L708 450 L726 432 Z" fill="#1A3010"/>
      <path d="M726 435 L712 435 L726 410 L740 435 Z" fill="#3A5030"/>
      <path d="M726 435 L712 435 L726 420 Z" fill="#2A4020"/>
      <ellipse cx="726" cy="423" rx="13" ry="8" fill="white" opacity="0.92"/>
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
    
    {/* Snowy mountains - flat 2.0 */}
    <g opacity="0.75">
      <path d="M0 370 L110 305 L155 330 L0 390 Z" fill="#A8B4C0"/>
      <path d="M155 330 L110 305 L250 290 L295 315 Z" fill="#98A6B2"/>
      <path d="M295 315 L250 290 L390 280 L435 305 Z" fill="#A8B4C0"/>
      <path d="M435 305 L390 280 L530 275 L575 300 Z" fill="#98A6B2"/>
      <path d="M575 300 L530 275 L670 285 L715 310 Z" fill="#A8B4C0"/>
      <path d="M715 310 L670 285 L810 290 L855 315 Z" fill="#98A6B2"/>
      <path d="M855 315 L810 290 L950 295 L995 320 Z" fill="#A8B4C0"/>
      <path d="M995 320 L950 295 L1090 300 L1200 325 Z" fill="#98A6B2"/>
      <path d="M0 390 L155 330 L295 315 L435 305 L575 300 L715 310 L855 315 L995 320 L1200 325 L1200 500 L0 500 Z" fill="#8898A4"/>
    </g>
    <g opacity="0.82">
      <path d="M0 400 L125 340 L165 365 L0 420 Z" fill="#90A0AC"/>
      <path d="M165 365 L125 340 L285 328 L325 353 Z" fill="#80929C"/>
      <path d="M325 353 L285 328 L445 320 L485 345 Z" fill="#90A0AC"/>
      <path d="M485 345 L445 320 L605 317 L645 342 Z" fill="#80929C"/>
      <path d="M645 342 L605 317 L765 325 L805 350 Z" fill="#90A0AC"/>
      <path d="M805 350 L765 325 L925 332 L965 357 Z" fill="#80929C"/>
      <path d="M965 357 L925 332 L1085 338 L1200 360 Z" fill="#90A0AC"/>
      <path d="M0 420 L165 365 L325 353 L485 345 L645 342 L805 350 L965 357 L1200 360 L1200 500 L0 500 Z" fill="#70828E"/>
    </g>
    
    {/* Snow-covered peaks - flat 2.0 */}
    <g opacity="0.95">
      <path d="M250 290 L235 290 L250 268 L265 290 Z" fill="white"/>
      <path d="M250 290 L235 290 L250 276 Z" fill="#F0F8FF"/>
      <path d="M530 275 L515 275 L530 253 L545 275 Z" fill="white"/>
      <path d="M530 275 L515 275 L530 261 Z" fill="#F0F8FF"/>
      <path d="M810 290 L795 290 L810 268 L825 290 Z" fill="white"/>
      <path d="M810 290 L795 290 L810 276 Z" fill="#F0F8FF"/>
    </g>
    
    {/* Heavily snow-covered ground - flat 2.0 layered */}
    <path d="M0 445 L150 435 L300 430 L450 425 L600 432 L750 427 L900 424 L1050 430 L1200 434 L1200 500 L0 500 Z" 
          fill="#E0E8F0"/>
    <path d="M0 445 L150 435 L300 430 L450 425 L600 432 L750 427 L900 424 L1050 430 L1200 434 L1200 468 L0 468 Z" 
          fill="#F0F6FC" opacity="0.55"/>
    <path d="M0 470 L200 465 L400 460 L600 464 L800 467 L1000 462 L1200 457 L1200 500 L0 500 Z" 
          fill="#F0F6FC"/>
    
    {/* Snow-covered trees - flat 2.0 */}
    <g>
      <ellipse cx="305" cy="485" rx="9" ry="3" fill="#C0D0E0" opacity="0.4"/>
      <rect x="300" y="450" width="10" height="30" fill="#4A3A2A"/>
      <rect x="300" y="450" width="3.5" height="30" fill="#3A2A1A"/>
      <path d="M305 450 L289 450 L305 425 L321 450 Z" fill="#1A3010"/>
      <path d="M305 450 L289 450 L305 434 Z" fill="#0A2000"/>
      <ellipse cx="305" cy="428" rx="13" ry="9" fill="white" opacity="0.95"/>
      
      <ellipse cx="805.5" cy="485" rx="10" ry="3" fill="#C0D0E0" opacity="0.4"/>
      <rect x="800" y="448" width="11" height="32" fill="#4A3A2A"/>
      <rect x="800" y="448" width="4" height="32" fill="#3A2A1A"/>
      <path d="M805.5 448 L788 448 L805.5 420 L823 448 Z" fill="#1A3010"/>
      <path d="M805.5 448 L788 448 L805.5 431 Z" fill="#0A2000"/>
      <ellipse cx="805.5" cy="423" rx="14" ry="9" fill="white" opacity="0.95"/>
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
    
    {/* Barely visible mountains through heavy snow - flat 2.0 */}
    <g opacity="0.65">
      <path d="M0 380 L110 315 L155 340 L0 400 Z" fill="#8A96A0"/>
      <path d="M155 340 L110 315 L250 300 L295 325 Z" fill="#7A8890"/>
      <path d="M295 325 L250 300 L390 290 L435 315 Z" fill="#8A96A0"/>
      <path d="M435 315 L390 290 L530 285 L575 310 Z" fill="#7A8890"/>
      <path d="M575 310 L530 285 L670 295 L715 320 Z" fill="#8A96A0"/>
      <path d="M715 320 L670 295 L810 300 L855 325 Z" fill="#7A8890"/>
      <path d="M855 325 L810 300 L950 305 L995 330 Z" fill="#8A96A0"/>
      <path d="M995 330 L950 305 L1090 310 L1200 335 Z" fill="#7A8890"/>
      <path d="M0 400 L155 340 L295 325 L435 315 L575 310 L715 320 L855 325 L995 330 L1200 335 L1200 500 L0 500 Z" fill="#6A7880"/>
    </g>
    <g opacity="0.72">
      <path d="M0 410 L125 350 L165 375 L0 430 Z" fill="#727E88"/>
      <path d="M165 375 L125 350 L285 338 L325 363 Z" fill="#627078"/>
      <path d="M325 363 L285 338 L445 330 L485 355 Z" fill="#727E88"/>
      <path d="M485 355 L445 330 L605 327 L645 352 Z" fill="#627078"/>
      <path d="M645 352 L605 327 L765 335 L805 360 Z" fill="#727E88"/>
      <path d="M805 360 L765 335 L925 342 L965 367 Z" fill="#627078"/>
      <path d="M965 367 L925 342 L1085 348 L1200 370 Z" fill="#727E88"/>
      <path d="M0 430 L165 375 L325 363 L485 355 L645 352 L805 360 L965 367 L1200 370 L1200 500 L0 500 Z" fill="#526068"/>
    </g>
    
    {/* Snow-covered peaks barely visible - flat 2.0 */}
    <g opacity="0.85">
      <path d="M250 300 L238 300 L250 282 L262 300 Z" fill="#E0E8F0"/>
      <path d="M250 300 L238 300 L250 289 Z" fill="#D0DCE8"/>
      <path d="M530 285 L518 285 L530 267 L542 285 Z" fill="#E0E8F0"/>
      <path d="M530 285 L518 285 L530 274 Z" fill="#D0DCE8"/>
      <path d="M810 300 L798 300 L810 282 L822 300 Z" fill="#E0E8F0"/>
      <path d="M810 300 L798 300 L810 289 Z" fill="#D0DCE8"/>
    </g>
    
    {/* Deep snow-covered ground - flat 2.0 layered */}
    <path d="M0 450 L150 440 L300 435 L450 430 L600 437 L750 432 L900 429 L1050 435 L1200 439 L1200 500 L0 500 Z" 
          fill="#DDE8F4"/>
    <path d="M0 450 L150 440 L300 435 L450 430 L600 437 L750 432 L900 429 L1050 435 L1200 439 L1200 472 L0 472 Z" 
          fill="#F0F8FF" opacity="0.6"/>
    <path d="M0 473 L200 468 L400 463 L600 467 L800 470 L1000 465 L1200 460 L1200 500 L0 500 Z" 
          fill="#F0F8FF"/>
    
    {/* Nearly buried trees - flat 2.0 */}
    <g>
      <ellipse cx="384.5" cy="488" rx="8" ry="2.5" fill="#C0D0E0" opacity="0.4"/>
      <rect x="380" y="458" width="9" height="25" fill="#3A2A1A"/>
      <rect x="380" y="458" width="3.2" height="25" fill="#2A1A0A"/>
      <path d="M384.5 458 L370 458 L384.5 438 L399 458 Z" fill="#0A2000"/>
      <path d="M384.5 458 L370 458 L384.5 446 Z" fill="#051500"/>
      <ellipse cx="384.5" cy="440" rx="14" ry="10" fill="white" opacity="0.98"/>
      
      <ellipse cx="925" cy="488" rx="9" ry="2.5" fill="#C0D0E0" opacity="0.4"/>
      <rect x="920" y="456" width="10" height="28" fill="#3A2A1A"/>
      <rect x="920" y="456" width="3.5" height="28" fill="#2A1A0A"/>
      <path d="M925 456 L910 456 L925 434 L940 456 Z" fill="#0A2000"/>
      <path d="M925 456 L910 456 L925 443 Z" fill="#051500"/>
      <ellipse cx="925" cy="436" rx="15" ry="10" fill="white" opacity="0.98"/>
    </g>
  </svg>
);

export const LightSnowDay = LightSnow;

export const LightSnowNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="lightSnowNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2a3a4e', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#3f4f63', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#lightSnowNightSkyGradient)" />
    
    {/* Dark clouds */}
    <g className="animate-float" opacity="0.75">
      <ellipse cx="220" cy="90" rx="68" ry="44" fill="#3a4a58"/>
      <ellipse cx="285" cy="85" rx="63" ry="41" fill="#3a4a58"/>
      <ellipse cx="345" cy="93" rx="58" ry="38" fill="#3a4a58"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.78">
      <ellipse cx="780" cy="105" rx="72" ry="46" fill="#3f4f5d"/>
      <ellipse cx="850" cy="100" rx="68" ry="44" fill="#3f4f5d"/>
      <ellipse cx="915" cy="108" rx="63" ry="41" fill="#3f4f5d"/>
    </g>
    
    {/* Light snowflakes */}
    <g className="animate-snow" opacity="0.8">
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
    
    {/* Snowy mountains - flat 2.0 */}
    <g opacity="0.75">
      <path d="M0 360 L110 300 L155 325 L0 380 Z" fill="#3E4C58"/>
      <path d="M155 325 L110 300 L250 285 L295 310 Z" fill="#2E3C48"/>
      <path d="M295 310 L250 285 L390 275 L435 300 Z" fill="#3E4C58"/>
      <path d="M435 300 L390 275 L530 270 L575 295 Z" fill="#2E3C48"/>
      <path d="M575 295 L530 270 L670 280 L715 305 Z" fill="#3E4C58"/>
      <path d="M715 305 L670 280 L810 285 L855 310 Z" fill="#2E3C48"/>
      <path d="M855 310 L810 285 L950 290 L995 315 Z" fill="#3E4C58"/>
      <path d="M995 315 L950 290 L1090 295 L1200 320 Z" fill="#2E3C48"/>
      <path d="M0 380 L155 325 L295 310 L435 300 L575 295 L715 305 L855 310 L995 315 L1200 320 L1200 500 L0 500 Z" fill="#243240"/>
    </g>
    <g opacity="0.82">
      <path d="M0 390 L125 330 L165 355 L0 410 Z" fill="#334150"/>
      <path d="M165 355 L125 330 L285 318 L325 343 Z" fill="#29373F"/>
      <path d="M325 343 L285 318 L445 310 L485 335 Z" fill="#334150"/>
      <path d="M485 335 L445 310 L605 307 L645 332 Z" fill="#29373F"/>
      <path d="M645 332 L605 307 L765 315 L805 340 Z" fill="#334150"/>
      <path d="M805 340 L765 315 L925 322 L965 347 Z" fill="#29373F"/>
      <path d="M965 347 L925 322 L1085 328 L1200 350 Z" fill="#334150"/>
      <path d="M0 410 L165 355 L325 343 L485 335 L645 332 L805 340 L965 347 L1200 350 L1200 500 L0 500 Z" fill="#1F2D38"/>
    </g>
    
    {/* Snow-covered peaks - flat 2.0 */}
    <g opacity="0.9">
      <path d="M110 300 L95 300 L110 280 L125 300 Z" fill="#DDE8F4"/>
      <path d="M110 300 L95 300 L110 287 Z" fill="#CDD8E4"/>
      <path d="M390 275 L375 275 L390 255 L405 275 Z" fill="#DDE8F4"/>
      <path d="M390 275 L375 275 L390 262 Z" fill="#CDD8E4"/>
      <path d="M670 280 L655 280 L670 260 L685 280 Z" fill="#DDE8F4"/>
      <path d="M670 280 L655 280 L670 267 Z" fill="#CDD8E4"/>
      <path d="M950 290 L935 290 L950 270 L965 290 Z" fill="#DDE8F4"/>
      <path d="M950 290 L935 290 L950 277 Z" fill="#CDD8E4"/>
    </g>
    
    {/* Snowy hills - flat 2.0 layered */}
    <path d="M0 440 L150 430 L300 425 L450 420 L600 427 L750 422 L900 419 L1050 425 L1200 429 L1200 500 L0 500 Z" 
          fill="#D5DFE9"/>
    <path d="M0 440 L150 430 L300 425 L450 420 L600 427 L750 422 L900 419 L1050 425 L1200 429 L1200 465 L0 465 Z" 
          fill="#E0EAF4" opacity="0.5"/>
    <path d="M0 467 L200 462 L400 457 L600 461 L800 464 L1000 459 L1200 454 L1200 500 L0 500 Z" 
          fill="#E0EAF4"/>
    
    {/* Snow-covered trees - flat 2.0 */}
    <g>
      <ellipse cx="255.5" cy="482" rx="10" ry="3" fill="#B0C0D0" opacity="0.4"/>
      <rect x="250" y="445" width="11" height="33" fill="#2A2520"/>
      <rect x="250" y="445" width="4" height="33" fill="#1A1510"/>
      <path d="M255.5 445 L239 445 L255.5 417 L272 445 Z" fill="#1A2010"/>
      <path d="M255.5 445 L239 445 L255.5 427 Z" fill="#0A1005"/>
      <path d="M255.5 430 L243 430 L255.5 406 L268 430 Z" fill="#1F2A18"/>
      <path d="M255.5 430 L243 430 L255.5 415 Z" fill="#0F1A08"/>
      <ellipse cx="255.5" cy="420" rx="12" ry="8" fill="#DDE8F4" opacity="0.88"/>
      
      <ellipse cx="726" cy="488" rx="11" ry="3" fill="#B0C0D0" opacity="0.4"/>
      <rect x="720" y="450" width="12" height="35" fill="#2A2520"/>
      <rect x="720" y="450" width="4.5" height="35" fill="#1A1510"/>
      <path d="M726 450 L708 450 L726 420 L744 450 Z" fill="#1A2010"/>
      <path d="M726 450 L708 450 L726 432 Z" fill="#0A1005"/>
      <path d="M726 435 L712 435 L726 410 L740 435 Z" fill="#1F2A18"/>
      <path d="M726 435 L712 435 L726 420 Z" fill="#0F1A08"/>
      <ellipse cx="726" cy="423" rx="13" ry="8" fill="#DDE8F4" opacity="0.88"/>
    </g>
  </svg>
);

export const ModerateSnowDay = ModerateSnow;

export const ModerateSnowNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="moderateSnowNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1f2f3e', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#34444e', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#moderateSnowNightSkyGradient)" />
    
    {/* Darker clouds */}
    <g className="animate-float" opacity="0.8">
      <ellipse cx="200" cy="80" rx="75" ry="48" fill="#2a3a48"/>
      <ellipse cx="270" cy="75" rx="70" ry="45" fill="#2a3a48"/>
      <ellipse cx="335" cy="83" rx="65" ry="42" fill="#2a3a48"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.82">
      <ellipse cx="700" cy="95" rx="78" ry="50" fill="#2f3f4d"/>
      <ellipse cx="775" cy="90" rx="73" ry="47" fill="#2f3f4d"/>
      <ellipse cx="845" cy="98" rx="68" ry="44" fill="#2f3f4d"/>
    </g>
    
    {/* Moderate snowfall - more dense */}
    <g className="animate-snow" opacity="0.85">
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
    
    {/* Snowy mountains - flat 2.0 */}
    <g opacity="0.78">
      <path d="M0 370 L110 305 L155 330 L0 390 Z" fill="#2E3D48"/>
      <path d="M155 330 L110 305 L250 290 L295 315 Z" fill="#242F3D"/>
      <path d="M295 315 L250 290 L390 280 L435 305 Z" fill="#2E3D48"/>
      <path d="M435 305 L390 280 L530 275 L575 300 Z" fill="#242F3D"/>
      <path d="M575 300 L530 275 L670 285 L715 310 Z" fill="#2E3D48"/>
      <path d="M715 310 L670 285 L810 290 L855 315 Z" fill="#242F3D"/>
      <path d="M855 315 L810 290 L950 295 L995 320 Z" fill="#2E3D48"/>
      <path d="M995 320 L950 295 L1090 300 L1200 325 Z" fill="#242F3D"/>
      <path d="M0 390 L155 330 L295 315 L435 305 L575 300 L715 310 L855 315 L995 320 L1200 325 L1200 500 L0 500 Z" fill="#1A2530"/>
    </g>
    <g opacity="0.85">
      <path d="M0 400 L125 340 L165 365 L0 420 Z" fill="#243340"/>
      <path d="M165 365 L125 340 L285 328 L325 353 Z" fill="#1A2530"/>
      <path d="M325 353 L285 328 L445 320 L485 345 Z" fill="#243340"/>
      <path d="M485 345 L445 320 L605 317 L645 342 Z" fill="#1A2530"/>
      <path d="M645 342 L605 317 L765 325 L805 350 Z" fill="#243340"/>
      <path d="M805 350 L765 325 L925 332 L965 357 Z" fill="#1A2530"/>
      <path d="M965 357 L925 332 L1085 338 L1200 360 Z" fill="#243340"/>
      <path d="M0 420 L165 365 L325 353 L485 345 L645 342 L805 350 L965 357 L1200 360 L1200 500 L0 500 Z" fill="#101F28"/>
    </g>
    
    {/* Snow-covered peaks - flat 2.0 */}
    <g opacity="0.88">
      <path d="M250 290 L235 290 L250 268 L265 290 Z" fill="#C8D8E8"/>
      <path d="M250 290 L235 290 L250 276 Z" fill="#B8C8D8"/>
      <path d="M530 275 L515 275 L530 253 L545 275 Z" fill="#C8D8E8"/>
      <path d="M530 275 L515 275 L530 261 Z" fill="#B8C8D8"/>
      <path d="M810 290 L795 290 L810 268 L825 290 Z" fill="#C8D8E8"/>
      <path d="M810 290 L795 290 L810 276 Z" fill="#B8C8D8"/>
    </g>
    
    {/* Snowy hills - flat 2.0 layered */}
    <path d="M0 445 L150 435 L300 430 L450 425 L600 432 L750 427 L900 424 L1050 430 L1200 434 L1200 500 L0 500 Z" 
          fill="#C0D0E0"/>
    <path d="M0 445 L150 435 L300 430 L450 425 L600 432 L750 427 L900 424 L1050 430 L1200 434 L1200 468 L0 468 Z" 
          fill="#CCDCE0" opacity="0.5"/>
    <path d="M0 470 L200 465 L400 460 L600 464 L800 467 L1000 462 L1200 457 L1200 500 L0 500 Z" 
          fill="#CCDCE0"/>
    
    {/* Snow-covered trees - flat 2.0 */}
    <g>
      <ellipse cx="315" cy="485" rx="9" ry="3" fill="#A0B0C0" opacity="0.4"/>
      <rect x="310" y="450" width="10" height="30" fill="#1A1A1A"/>
      <rect x="310" y="450" width="3.5" height="30" fill="#0A0A0A"/>
      <path d="M315 450 L299 450 L315 425 L331 450 Z" fill="#0A1508"/>
      <path d="M315 450 L299 450 L315 434 Z" fill="#050A03"/>
      <path d="M315 435 L303 435 L315 413 L327 435 Z" fill="#0F1F10"/>
      <path d="M315 435 L303 435 L315 421 Z" fill="#070F05"/>
      <ellipse cx="315" cy="428" rx="11" ry="7" fill="#C8D8E8" opacity="0.88"/>
      
      <ellipse cx="845.5" cy="485" rx="10" ry="3" fill="#A0B0C0" opacity="0.4"/>
      <rect x="840" y="448" width="11" height="32" fill="#1A1A1A"/>
      <rect x="840" y="448" width="4" height="32" fill="#0A0A0A"/>
      <path d="M845.5 448 L828 448 L845.5 420 L863 448 Z" fill="#0A1508"/>
      <path d="M845.5 448 L828 448 L845.5 431 Z" fill="#050A03"/>
      <path d="M845.5 433 L832 433 L845.5 408 L859 433 Z" fill="#0F1F10"/>
      <path d="M845.5 433 L832 433 L845.5 418 Z" fill="#070F05"/>
      <ellipse cx="845.5" cy="423" rx="12" ry="7" fill="#C8D8E8" opacity="0.88"/>
    </g>
  </svg>
);

export const HeavySnowDay = HeavySnow;

export const HeavySnowNight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="heavySnowNightSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#151e2a', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#252e3a', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="1200" height="500" fill="url(#heavySnowNightSkyGradient)" />
    
    {/* Very dark storm clouds */}
    <g className="animate-float" opacity="0.85">
      <ellipse cx="170" cy="65" rx="90" ry="58" fill="#1a2530"/>
      <ellipse cx="255" cy="60" rx="85" ry="55" fill="#1a2530"/>
      <ellipse cx="335" cy="68" rx="80" ry="52" fill="#1a2530"/>
    </g>
    
    <g className="animate-float-delayed" opacity="0.87">
      <ellipse cx="620" cy="85" rx="95" ry="60" fill="#1f2a35"/>
      <ellipse cx="710" cy="80" rx="90" ry="58" fill="#1f2a35"/>
      <ellipse cx="795" cy="88" rx="85" ry="55" fill="#1f2a35"/>
    </g>
    
    {/* Heavy snowfall - very dense */}
    <g className="animate-snow" opacity="0.9">
      <circle cx="60" cy="160" r="4" fill="white"/>
      <circle cx="120" cy="175" r="3.5" fill="white"/>
      <circle cx="180" cy="165" r="4" fill="white"/>
      <circle cx="240" cy="180" r="3.5" fill="white"/>
      <circle cx="300" cy="170" r="4" fill="white"/>
      <circle cx="360" cy="185" r="3.5" fill="white"/>
      <circle cx="420" cy="162" r="4" fill="white"/>
      <circle cx="480" cy="177" r="3.5" fill="white"/>
      <circle cx="540" cy="167" r="4" fill="white"/>
      <circle cx="600" cy="182" r="3.5" fill="white"/>
      <circle cx="660" cy="172" r="4" fill="white"/>
      <circle cx="720" cy="187" r="3.5" fill="white"/>
      <circle cx="780" cy="164" r="4" fill="white"/>
      <circle cx="840" cy="179" r="3.5" fill="white"/>
      <circle cx="900" cy="169" r="4" fill="white"/>
      <circle cx="960" cy="184" r="3.5" fill="white"/>
      <circle cx="1020" cy="174" r="4" fill="white"/>
      <circle cx="1080" cy="181" r="3.5" fill="white"/>
      <circle cx="1140" cy="171" r="4" fill="white"/>
      
      <circle cx="30" cy="210" r="3.5" fill="white"/>
      <circle cx="90" cy="227" r="4" fill="white"/>
      <circle cx="150" cy="217" r="3.5" fill="white"/>
      <circle cx="210" cy="232" r="4" fill="white"/>
      <circle cx="270" cy="222" r="3.5" fill="white"/>
      <circle cx="330" cy="237" r="4" fill="white"/>
      <circle cx="390" cy="214" r="3.5" fill="white"/>
      <circle cx="450" cy="229" r="4" fill="white"/>
      <circle cx="510" cy="219" r="3.5" fill="white"/>
      <circle cx="570" cy="234" r="4" fill="white"/>
      <circle cx="630" cy="224" r="3.5" fill="white"/>
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
    
    {/* Barely visible mountains through heavy snow - flat 2.0 */}
    <g opacity="0.7">
      <path d="M0 380 L110 315 L155 340 L0 400 Z" fill="#1E2C38"/>
      <path d="M155 340 L110 315 L250 300 L295 325 Z" fill="#141E28"/>
      <path d="M295 325 L250 300 L390 290 L435 315 Z" fill="#1E2C38"/>
      <path d="M435 315 L390 290 L530 285 L575 310 Z" fill="#141E28"/>
      <path d="M575 310 L530 285 L670 295 L715 320 Z" fill="#1E2C38"/>
      <path d="M715 320 L670 295 L810 300 L855 325 Z" fill="#141E28"/>
      <path d="M855 325 L810 300 L950 305 L995 330 Z" fill="#1E2C38"/>
      <path d="M995 330 L950 305 L1090 310 L1200 335 Z" fill="#141E28"/>
      <path d="M0 400 L155 340 L295 325 L435 315 L575 310 L715 320 L855 325 L995 330 L1200 335 L1200 500 L0 500 Z" fill="#0A1820"/>
    </g>
    <g opacity="0.77">
      <path d="M0 410 L125 350 L165 375 L0 430 Z" fill="#14222E"/>
      <path d="M165 375 L125 350 L285 338 L325 363 Z" fill="#0A1824"/>
      <path d="M325 363 L285 338 L445 330 L485 355 Z" fill="#14222E"/>
      <path d="M485 355 L445 330 L605 327 L645 352 Z" fill="#0A1824"/>
      <path d="M645 352 L605 327 L765 335 L805 360 Z" fill="#14222E"/>
      <path d="M805 360 L765 335 L925 342 L965 367 Z" fill="#0A1824"/>
      <path d="M965 367 L925 342 L1085 348 L1200 370 Z" fill="#14222E"/>
      <path d="M0 430 L165 375 L325 363 L485 355 L645 352 L805 360 L965 367 L1200 370 L1200 500 L0 500 Z" fill="#040F1A"/>
    </g>
    
    {/* Snow-covered peaks barely visible - flat 2.0 */}
    <g opacity="0.82">
      <path d="M250 300 L238 300 L250 282 L262 300 Z" fill="#B0C0D0"/>
      <path d="M250 300 L238 300 L250 289 Z" fill="#A0B0C0"/>
      <path d="M530 285 L518 285 L530 267 L542 285 Z" fill="#B0C0D0"/>
      <path d="M530 285 L518 285 L530 274 Z" fill="#A0B0C0"/>
      <path d="M810 300 L798 300 L810 282 L822 300 Z" fill="#B0C0D0"/>
      <path d="M810 300 L798 300 L810 289 Z" fill="#A0B0C0"/>
    </g>
    
    {/* Deep snow-covered ground - flat 2.0 layered */}
    <path d="M0 450 L150 440 L300 435 L450 430 L600 437 L750 432 L900 429 L1050 435 L1200 439 L1200 500 L0 500 Z" 
          fill="#B8C8D8"/>
    <path d="M0 450 L150 440 L300 435 L450 430 L600 437 L750 432 L900 429 L1050 435 L1200 439 L1200 472 L0 472 Z" 
          fill="#C8D8E8" opacity="0.6"/>
    <path d="M0 473 L200 468 L400 463 L600 467 L800 470 L1000 465 L1200 460 L1200 500 L0 500 Z" 
          fill="#C8D8E8"/>
    
    {/* Nearly buried trees - flat 2.0 */}
    <g>
      <ellipse cx="384.5" cy="488" rx="8" ry="2.5" fill="#90A0B0" opacity="0.45"/>
      <rect x="380" y="458" width="9" height="25" fill="#0A0A0A"/>
      <rect x="380" y="458" width="3.2" height="25" fill="#000000"/>
      <path d="M384.5 458 L370 458 L384.5 438 L399 458 Z" fill="#050F00"/>
      <path d="M384.5 458 L370 458 L384.5 446 Z" fill="#020802"/>
      <ellipse cx="384.5" cy="440" rx="14" ry="10" fill="#C0D0E0" opacity="0.95"/>
      
      <ellipse cx="925" cy="488" rx="9" ry="2.5" fill="#90A0B0" opacity="0.45"/>
      <rect x="920" y="456" width="10" height="28" fill="#0A0A0A"/>
      <rect x="920" y="456" width="3.5" height="28" fill="#000000"/>
      <path d="M925 456 L910 456 L925 434 L940 456 Z" fill="#050F00"/>
      <path d="M925 456 L910 456 L925 443 Z" fill="#020802"/>
      <ellipse cx="925" cy="436" rx="15" ry="10" fill="#C0D0E0" opacity="0.95"/>
    </g>
  </svg>
);
