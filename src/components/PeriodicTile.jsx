import React, { useState } from 'react';

export default function PeriodicTile({
  number = 42,
  symbol = 'Mo',
  name = 'Molybdenum',
  mass = '95.95',
  size = 'md', // 'sm', 'md', 'lg', 'xl'
  variant = 'green', // 'green', 'cyan', 'amber'
  interactive = true,
  className = ''
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Size mappings
  const sizeClasses = {
    sm: 'w-11 h-11 text-xs border-[1.5px]',
    md: 'w-14 h-14 text-sm border-2',
    lg: 'w-20 h-20 text-lg border-2',
    xl: 'w-24 h-24 sm:w-28 sm:h-28 text-xl sm:text-2xl border-[3px]'
  };

  const numberSizes = {
    sm: 'text-[8px]',
    md: 'text-[9px]',
    lg: 'text-[11px]',
    xl: 'text-xs sm:text-sm'
  };

  const symbolSizes = {
    sm: 'text-sm font-black',
    md: 'text-base font-black',
    lg: 'text-2xl font-black',
    xl: 'text-4xl sm:text-5xl font-black'
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
          rounded-md flex flex-col justify-between p-1.5 transition-all duration-300 cursor-pointer select-none relative shadow-lg
        `}
      >
        {/* Atomic Number (Top-Left) & Mass (Top-Right) */}
        <div className="flex justify-between items-start leading-none w-full">
          <span className={`${numberSizes[size]} font-mono font-bold ${currentTheme.accent}`}>
            {number}
          </span>
          {mass && (
            <span className={`${numberSizes[size]} font-mono opacity-60 text-gray-300 hidden sm:inline`}>
              {mass}
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
        {name && size !== 'sm' && (
          <div className="text-center overflow-hidden">
            <span className="text-[7px] sm:text-[9px] font-mono tracking-wider text-gray-400 uppercase truncate block">
              {name}
            </span>
          </div>
        )}
      </div>

      {/* Interactive Chemical Info Tooltip */}
      {interactive && showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 rounded-lg bg-black/95 border border-bb-neon/60 shadow-2xl z-50 pointer-events-none text-left backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-bb-border pb-1 mb-1.5">
            <span className="font-display tracking-wider text-white text-sm uppercase">{name}</span>
            <span className="text-xs font-mono text-bb-neon font-bold">#{number}</span>
          </div>
          <div className="text-[11px] font-mono text-gray-300 space-y-0.5">
            <div><span className="text-gray-500">Atomic Mass:</span> {mass || 'N/A'}</div>
            <div><span className="text-gray-500">Series:</span> Transition Metal</div>
            <div className="text-[10px] text-bb-cyan mt-1">★ Verified Lab Purity 99.1%</div>
          </div>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"></div>
        </div>
      )}
    </div>
  );
}
