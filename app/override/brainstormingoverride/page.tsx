'use client';
import { Rubik } from "next/font/google";
import React, { useState } from "react";
import Rain from '../../components/rain';
import { ChevronRight, ChevronLeft, Settings, X } from "lucide-react";
import Link from "next/link";

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function BrainstormingOverview() {
  const [showSettings, setShowSettings] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [visionMode, setVisionMode] = useState('normal');

  // Logic to handle the leaving animation before closing the modal
  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowSettings(false);
      setIsExiting(false);
    }, 200); // Duration matches the CSS fadeOut animation
  };

  const navButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 2rem',
    background: '#000000', 
    color: 'white',        
    border: '2px solid #000000', 
    borderRadius: '16px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      overflowX: 'hidden'
    }}>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.95); }
        }
        .modal-enter { animation: fadeIn 0.2s ease-out forwards; }
        .modal-exit { animation: fadeOut 0.2s ease-in forwards; }
        
        /* ULTRA HEAVY BLUR */
        .glass-blur-overlay {
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          background-color: rgba(0, 0, 0, 0.7);
        }
        body { margin: 0; padding: 0; overflow-x: hidden; }
      `}</style>

      {/* RAIN LAYER - Placed behind content to prevent filter distortion */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <Rain />
      </div>

      {/* CONTENT LAYER */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        filter: visionMode !== 'normal' ? (visionMode === 'achroma' ? 'grayscale(100%)' : `url(#${visionMode}-filter)`) : 'none',
        WebkitFilter: visionMode !== 'normal' ? (visionMode === 'achroma' ? 'grayscale(100%)' : `url(#${visionMode}-filter)`) : 'none',
      }}>
        <main
          className={rubik.className}
          style={{
            minHeight: '100vh',
            color: 'white',
            padding: '2rem 1.5rem',
            maxWidth: '1900px', 
            margin: '0 auto',
          }}
        >
          {/* Color Blindness SVG Filters */}
          <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
            <filter id="protanopia-filter" colorInterpolationFilters="sRGB">
              <feColorMatrix values="0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"/>
            </filter>
            <filter id="deuteranopia-filter" colorInterpolationFilters="sRGB">
              <feColorMatrix values="0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"/>
            </filter>
            <filter id="tritanopia-filter" colorInterpolationFilters="sRGB">
              <feColorMatrix values="0.95, 0.05, 0, 0, 0 0, 0.433, 0.567, 0, 0 0, 0.475, 0.525, 0, 0 0, 0, 0, 1, 0"/>
            </filter>
          </svg>

          <button 
            onClick={() => setShowSettings(true)} 
            style={{
              position: 'fixed', top: '20px', right: '20px', zIndex: 100,
              width: '44px', height: '42px', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '12px', border: 'none', cursor: 'pointer',
              backgroundColor: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <Settings size={22} color="#000" />
          </button>
            
          <section style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              BRAINSTORMING
            </h2>
            <p style={{ color: '#aaa', fontSize: '1.1rem', fontStyle: 'italic' }}>
              Moving beyond the basics to design a custom competitive edge.
            </p>
          </section>

          <section style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1rem' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                IDEATION & CONCEPTS
              </h2>
              <p style={{ lineHeight: '1.8', color: '#ccc', fontSize: '1.1rem', marginBottom: '2rem' }}>
                After evaluating the Herobot, our team moved into an intensive brainstorming phase. We focused on identifying the specific scoring needs for V5RC "Push Back," specifically targeting high-efficiency intakes and high-climb capabilities that Dex lacked.
              </p>
              <p style={{ lineHeight: '1.8', color: '#ccc', fontSize: '1.1rem', marginBottom: '1rem' }}>
                We explored various drivetrain configurations and intake mechanisms, prioritizing modularity. Our goal was to create a design that could be iterated upon without the total disassembly issues we encountered with the previous model.
              </p>
            </div>
          </section>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '4rem', paddingBottom: '4rem' }}>
            <Link href="/" style={navButtonStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ChevronLeft size={25} />
                <span> Back to Homepage</span>
              </div>
            </Link>
            <Link href="/" style={navButtonStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                Next Page <ChevronRight size={25} />
              </div>
            </Link>
          </div>
        </main>
      </div>

      {/* SETTINGS MODAL */}
      {showSettings && (
        <div 
          className={isExiting ? "modal-exit glass-blur-overlay" : "modal-enter glass-blur-overlay"}
          style={{ 
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', 
            display: 'flex', alignItems: 'center', 
            justifyContent: 'center', zIndex: 1000
          }}
          onClick={handleClose}
        >
          <div 
            style={{ 
              backgroundColor: 'white', padding: '35px', borderRadius: '32px', 
              width: '450px', position: 'relative', color: '#334155',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleClose} 
              style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <X size={24} color="#94a3b8" />
            </button>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0 0 30px' }}>Display Settings</h2>
            
            <div>
              <p style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', opacity: 0.6 }}>Vision Mode</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <VisionBtn label="Normal" sub="Full color" active={visionMode === 'normal'} onClick={() => setVisionMode('normal')} colors={['#ef4444', '#22c55e', '#3b82f6', '#f59e0b']} />
                <VisionBtn label="Protanopia" sub="Red cone" active={visionMode === 'protanopia'} onClick={() => setVisionMode('protanopia')} colors={['#475569', '#22c55e', '#3b82f6', '#f59e0b']} />
                <VisionBtn label="Deuteranopia" sub="Green cone" active={visionMode === 'deuteranopia'} onClick={() => setVisionMode('deuteranopia')} colors={['#f59e0b', '#475569', '#3b82f6', '#f59e0b']} />
                <VisionBtn label="Tritanopia" sub="Blue cone" active={visionMode === 'tritanopia'} onClick={() => setVisionMode('tritanopia')} colors={['#ef4444', '#0d9488', '#0d9488', '#ef4444']} />
                <div style={{ gridColumn: 'span 2' }}>
                  <VisionBtn label="Achromatopsia" sub="No color vision: grayscale" active={visionMode === 'achroma'} onClick={() => setVisionMode('achroma')} colors={['#475569', '#94a3b8', '#1e293b', '#cbd5e1']} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function VisionBtn({ label, sub, active, onClick, colors }: any) {
  return (
    <button 
      onClick={onClick} 
      style={{ 
        textAlign: 'left', padding: '15px', borderRadius: '16px', border: active ? '2px solid #000' : '2px solid #f1f5f9', 
        backgroundColor: active ? 'rgba(0,0,0,0.05)' : 'white', width: '100%', cursor: 'pointer'
      }}
    >
      <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
        {colors.map((c: string, i: number) => (
          <div key={i} style={{ height: '8px', backgroundColor: c, flex: 1, borderRadius: '4px' }} />
        ))}
      </div>
      <div style={{ fontWeight: 700, color: '#000', fontSize: '14px' }}>{label}</div>
      <div style={{ fontSize: '11px', opacity: 0.8, fontWeight: 600 }}>{sub}</div>
    </button>
  );
}