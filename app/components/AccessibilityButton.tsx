'use client';
import React, { useState } from "react";
import { Settings, X } from "lucide-react";
import { useVision } from "./VisionContext";

function VisionBtn({ label, sub, active, onClick, colors }: any) {
  return (
    <button
      onClick={onClick}
      style={{
        textAlign: 'left', padding: '15px', borderRadius: '16px',
        border: active ? '2px solid #000' : '2px solid #f1f5f9',
        backgroundColor: active ? 'rgba(0,0,0,0.05)' : 'white',
        width: '100%', cursor: 'pointer'
      }}
    >
      <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
        {colors.map((c: string, i: number) => (
          <div key={i} style={{ height: '8px', backgroundColor: c, flex: 1, borderRadius: '4px' }} />
        ))}
      </div>
      <div style={{ fontWeight: 600, color: '#000', fontSize: '14px' }}>{label}</div>
      <div style={{ fontSize: '11px', opacity: 0.8, fontWeight: 600 }}>{sub}</div>
    </button>
  );
}

//fein

export default function AccessibilityButton() {
  const [showSettings, setShowSettings] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const { visionMode, setVisionMode } = useVision();

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowSettings(false);
      setIsExiting(false);
    }, 200);
  };

  return (
    <>
      <style>{`
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
        .glass-blur-overlay {
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          background-color: rgba(0, 0, 0, 0.7);
        }
      `}</style>

      <button
        onClick={() => setShowSettings(true)}
        style={{
          position: 'fixed', top: '20px', right: '20px', zIndex: 1000,
          width: '44px', height: '42px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: '12px', border: 'none', cursor: 'pointer',
          backgroundColor: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        <Settings size={22} color="#000" />
      </button>

      {showSettings && (
        <div
          className={isExiting ? "modal-exit glass-blur-overlay" : "modal-enter glass-blur-overlay"}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, margin: '0 0 3px' }}>SETTINGS</h2>

            <div>
              <p style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', opacity: 0.6 }}>Accessibility Settings</p>
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
    </>
  );
}