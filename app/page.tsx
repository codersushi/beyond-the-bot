'use client';
import { useEffect, useState } from 'react';
import { Rubik } from "next/font/google";
import Rain from './pushback/components/rain';
import Link from 'next/link';
import { Lock } from "lucide-react";

const rubik = Rubik({ subsets: ['latin'], style: ['italic', 'normal']});

export default function Home() {
  
  // Tracks which specific button is being hovered
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  
  // Helper to generate styles based on which button is active
  const getButtonStyle = (buttonId: string) => {
    const isHovered = hoveredButton === buttonId;
    return {
      width: '400px', 
      display: 'inline-block', 
      padding: '18px 40px', 
      background: isHovered ? '#ff6a00' : '#ffffff', 
      border: isHovered ? '3px solid #ffffff' : '3px solid #2a2a2e', 
      borderRadius: '60px', 
      textDecoration: 'none', 
      cursor: 'pointer',
      boxShadow: isHovered ? '0 0 20px rgba(255,106,0,0.8)' : 'none',
      transition: 'all 0.2s ease',
      textAlign: 'center' as const, 
      fontSize: '1.2rem', 
      fontWeight: '400', 
      color: isHovered ? '#ffffff' : '#000000', 
      margin: 0, 
      fontStyle: 'normal' as const
    };
  };
  
  return (
    <>
      {/* SPINNING OMNI-WHEEL + GEAR */}
      <img src="/wheel.png" className="spin" style={{ width: '70vw', height: '40vw', zIndex: -1, position: 'fixed', top: '-10vw', right: '-30vw', opacity: 0.3}} />
      <img src="/gear.png" className="spin" style={{ width: '70vw', height: '40vw', zIndex: -1, position: 'fixed', bottom: '-10vw', left: '-30vw', opacity: 0.5}} />

      {/* SPACE RAIN */}
      <Rain />

      {/* MAIN CONTENT */}
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}>

        {/* HEADER */}
        <h1 className={rubik.className} style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 'bold', marginTop: '-1.2rem', fontStyle: 'normal' }}>
          BEYOND THE BOT
        </h1>

        {/* BLURB TEXT */}
        <p className={rubik.className} style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: '400', color: '#b2aeae', marginTop: '0.3rem', fontStyle: 'italic', marginBottom: '3rem'}}>
          A BEHIND-THE-SCENES LOOK AT COMPETITIVE ROBOTICS
        </p>

        {/* BUTTON CONTAINER */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '400px' }}> 

          {/* PUSH BACK BUTTON */}
          <Link 
            href="/gameoverview" 
            onMouseEnter={() => setHoveredButton('pushback')}
            onMouseLeave={() => setHoveredButton(null)}
            className={rubik.className}
            style={getButtonStyle('pushback')}
          >
            PUSH BACK - 2025/2026 SEASON
          </Link>

          {/* OVERRIDE BUTTON */}
          <Link 
            href="/override/gameoverviewoverride" 
            onMouseEnter={() => setHoveredButton('override')}
            onMouseLeave={() => setHoveredButton(null)}
            className={rubik.className}
            style={getButtonStyle('override')}
          >
            OVERRIDE - 2026/2027 SEASON
          </Link>

          {/* LOCKED BUTTON 2 */}
          <div style={{ width: '400px', display: 'inline-block', padding: '18px 40px', background: '#828181', border: '3px solid #2a2a2e', borderRadius: '60px', fontSize: '2rem', color: '#2a2060', textDecoration: 'none', position: 'relative', cursor: 'not-allowed' }}>
            <Lock
              size={20}
              style={{
                position: 'absolute',
                left: '18px',
                top: '29px',
                transform: 'translateY(-50%)',
                color: '#000',
                opacity: 0.6,
                filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.4))'
              }}
            />
            <p className={rubik.className} style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: '400', color: '#000000', marginTop: '-0.2rem', fontStyle: 'normal'}}>
              2027/2028 SEASON
            </p>
          </div>

          {/* LOCKED BUTTON 3 */}
          <div style={{ width: '400px', display: 'inline-block', padding: '18px 40px', background: '#828181', border: '3px solid #2a2a2e', borderRadius: '60px', fontSize: '2rem', color: '#2a2060', textDecoration: 'none', position: 'relative', cursor: 'not-allowed' }}>
            <Lock
              size={20}
              style={{
                position: 'absolute',
                left: '18px',
                top: '29px',
                transform: 'translateY(-50%)',
                color: '#000',
                opacity: 0.6,
                filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.4))'
              }}
            />
            <p className={rubik.className} style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: '400', color: '#000000', marginTop: '-0.2rem', fontStyle: 'normal'}}>
              2028/2029 SEASON
            </p>
          </div>
        </div>
      </main>
    </>
  );
}