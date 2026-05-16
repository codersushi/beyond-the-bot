'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type VisionMode = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'achroma';

interface VisionContextType {
  visionMode: VisionMode;
  setVisionMode: (mode: VisionMode) => void;
}

const VisionContext = createContext<VisionContextType>({
  visionMode: 'normal',
  setVisionMode: () => {},
});

export function VisionProvider({ children }: { children: ReactNode }) {
  const [visionMode, setVisionMode] = useState<VisionMode>('normal');

  // On mount, set body as the permanent scroller so html filter never causes scrollbar issues
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'vision-base-style';
    style.textContent = `
      html { overflow: hidden; height: 100%; }
      body { overflow-y: auto; height: 100%; }
      body::-webkit-scrollbar-track { background: #000000; }
      body { scrollbar-color: #ffffff #000000; }
    `;
    document.head.appendChild(style);
    return () => { document.getElementById('vision-base-style')?.remove(); };
  }, []);

  // Apply filter to html whenever visionMode changes
  useEffect(() => {
    const html = document.documentElement;
    if (visionMode === 'normal') {
      html.style.filter = '';
      html.style.webkitFilter = '';
    } else {
      const filter = visionMode === 'achroma' ? 'grayscale(100%)' : `url(#${visionMode}-filter)`;
      html.style.filter = filter;
      html.style.webkitFilter = filter;
    }
  }, [visionMode]);

  return (
    <VisionContext.Provider value={{ visionMode, setVisionMode }}>
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <defs>
          <filter id="protanopia-filter" colorInterpolationFilters="sRGB">
            <feColorMatrix values="0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"/>
          </filter>
          <filter id="deuteranopia-filter" colorInterpolationFilters="sRGB">
            <feColorMatrix values="0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"/>
          </filter>
          <filter id="tritanopia-filter" colorInterpolationFilters="sRGB">
            <feColorMatrix values="0.95, 0.05, 0, 0, 0 0, 0.433, 0.567, 0, 0 0, 0.475, 0.525, 0, 0 0, 0, 0, 1, 0"/>
          </filter>
        </defs>
      </svg>
      {children}
    </VisionContext.Provider>
  );
}

export function useVision() {
  return useContext(VisionContext);
}