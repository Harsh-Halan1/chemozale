import React, { useState } from 'react';

// Comprehensive element lookup table for authentic chemical masses (integers) and names
const ELEMENT_DATA = {
  H: { number: 1, name: 'Hydrogen', mass: '1' },
  He: { number: 2, name: 'Helium', mass: '4' },
  Li: { number: 3, name: 'Lithium', mass: '7' },
  Be: { number: 4, name: 'Beryllium', mass: '9' },
  B: { number: 5, name: 'Boron', mass: '11' },
  C: { number: 6, name: 'Carbon', mass: '12' },
  N: { number: 7, name: 'Nitrogen', mass: '14' },
  O: { number: 8, name: 'Oxygen', mass: '16' },
  F: { number: 9, name: 'Fluorine', mass: '19' },
  Ne: { number: 10, name: 'Neon', mass: '20' },
  Na: { number: 11, name: 'Sodium', mass: '23' },
  Mg: { number: 12, name: 'Magnesium', mass: '24' },
  Al: { number: 13, name: 'Aluminum', mass: '27' },
  Si: { number: 14, name: 'Silicon', mass: '28' },
  P: { number: 15, name: 'Phosphorus', mass: '31' },
  S: { number: 16, name: 'Sulfur', mass: '32' },
  Cl: { number: 17, name: 'Chlorine', mass: '35' },
  Ar: { number: 18, name: 'Argon', mass: '40' },
  K: { number: 19, name: 'Potassium', mass: '39' },
  Ca: { number: 20, name: 'Calcium', mass: '40' },
  Br: { number: 35, name: 'Bromine', mass: '80' },
  Mo: { number: 42, name: 'Molybdenum', mass: '96' },
  I: { number: 53, name: 'Iodine', mass: '127' },
  Ba: { number: 56, name: 'Barium', mass: '137' },
  Pr: { number: 59, name: 'Praseodymium', mass: '141' },
  Re: { number: 75, name: 'Rhenium', mass: '186' },
  Au: { number: 79, name: 'Gold', mass: '197' },
  Hg: { number: 80, name: 'Mercury', mass: '201' },
  Pb: { number: 82, name: 'Lead', mass: '207' },
  U: { number: 92, name: 'Uranium', mass: '238' }
};

export default function PeriodicTile({
  number,
  symbol = 'Mo',
  name,
  mass,
  size = 'md', // 'sm', 'md', 'lg', 'xl'
  variant = 'green', // 'green', 'cyan', 'amber'
  interactive = true,
  className = ''
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Derive element data automatically if not explicitly provided
  const elInfo = ELEMENT_DATA[symbol] || {};
  const currentNumber = number !== undefined && number !== null ? number : (elInfo.number || '');
  const currentName = name !== undefined && name !== null && name !== '' ? name : (elInfo.name || '');
  
  // Ensure mass is always an integer (no fractions/decimals)
  const rawMass = mass !== undefined && mass !== null && mass !== '' ? mass : (elInfo.mass || '');
  const currentMass = rawMass !== '' ? String(Math.round(Number(rawMass)) || rawMass) : '';

  // Size mappings (dynamic and responsive across all device viewports)
  const sizeClasses = {
    sm: 'w-10 h-10 sm:w-11 sm:h-11 text-xs border-[1.5px]',
    md: 'w-12 h-12 sm:w-14 sm:h-14 text-sm border-2',
    lg: 'w-16 h-16 sm:w-20 sm:h-20 text-base sm:text-lg border-2',
    xl: 'w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-xs sm:text-xl md:text-2xl border-2 sm:border-[3px]'
  };

  const numberSizes = {
    sm: 'text-[7px] sm:text-[8px]',
    md: 'text-[8px] sm:text-[9px]',
    lg: 'text-[9px] sm:text-[11px]',
    xl: 'text-[7px] sm:text-xs md:text-sm'
  };

  const symbolSizes = {
    sm: 'text-xs sm:text-sm font-black',
    md: 'text-sm sm:text-base font-black',
    lg: 'text-lg sm:text-2xl font-black',
    xl: 'text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black'
  };

  // Variant themes
  const variantStyles = {
    green: {
      bg: 'bg-gradient-to-br from-[#12281b] to-[#0a170f]',
      border: 'border-emerald-500',
      glow: 'hover:shadow-[0_0_20px_rgba(0,255,136,0.6)]',
      text: 'text-white',
      accent: 'text-emerald-400'
    },
    cyan: {
      bg: 'bg-gradient-to-br from-[#0b242e] to-[#06141a]',
      border: 'border-cyan-400',
      glow: 'hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]',
      text: 'text-white',
      accent: 'text-cyan-400'
    },
    amber: {
      bg: 'bg-gradient-to-br from-[#2a1a06] to-[#140c03]',
      border: 'border-amber-500',
      glow: 'hover:shadow-[0_0_20px_rgba(245,158,11,0.6)]',
      text: 'text-white',
      accent: 'text-amber-400'
    }
  };

  const currentTheme = variantStyles[variant] || variantStyles.green;

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => interactive && setShowTooltip(true)}
      onMouseLeave={() => interactive && setShowTooltip(false)}
      onClick={() => interactive && setShowTooltip(!showTooltip)}
    >
      <div
        className={`
          ${sizeClasses[size] || sizeClasses.md}
          ${currentTheme.bg}
          ${currentTheme.border}
          ${interactive ? currentTheme.glow : ''}
          ${className}
          rounded-md flex flex-col justify-between p-1 sm:p-1.5 transition-all duration-300 cursor-pointer select-none relative shadow-lg
        `}
      >
        {/* Atomic Number (Top-Left) & Mass (Top-Right) */}
        <div className="flex justify-between items-start leading-none w-full">
          <span className={`${numberSizes[size]} font-mono font-bold ${currentTheme.accent}`}>
            {currentNumber}
          </span>
          {currentMass && (
            <span className={`${numberSizes[size]} font-mono opacity-60 text-gray-300 hidden sm:inline`}>
              {currentMass}
            </span>
          )}
        </div>

        {/* Chemical Symbol (Center) */}
        <div className="flex items-center justify-center flex-1">
          <span className={`${symbolSizes[size]} font-sans tracking-tight ${currentTheme.text} drop-shadow-md`}>
            {symbol}
          </span>
        </div>

        {/* Element Name (Bottom) */}
        {currentName && size !== 'sm' && (
          <div className="text-center overflow-hidden hidden sm:block">
            <span className="text-[7px] sm:text-[9px] font-mono tracking-wider text-gray-400 uppercase truncate block">
              {currentName}
            </span>
          </div>
        )}
      </div>

      {/* Interactive Chemical Info Tooltip */}
      {interactive && showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 rounded-lg bg-black/95 border border-bb-neon/60 shadow-2xl z-50 pointer-events-none text-left backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-bb-border pb-1 mb-1.5">
            <span className="font-display tracking-wider text-white text-sm uppercase">{currentName || symbol}</span>
            <span className="text-xs font-mono text-bb-neon font-bold">#{currentNumber}</span>
          </div>
          <div className="text-[11px] font-mono text-gray-300 space-y-0.5">
            <div><span className="text-gray-500">Atomic Mass:</span> {currentMass || 'N/A'}</div>
            <div><span className="text-gray-500">Series:</span> Chemical Element</div>
            <div className="text-[10px] text-bb-cyan mt-1">★ Verified Lab Purity 99.1%</div>
          </div>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"></div>
        </div>
      )}
    </div>
  );
}
