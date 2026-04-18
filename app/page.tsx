'use client';
import { useEffect, useState } from 'react';
import { Rubik } from "next/font/google";
import Rain from './components/rain';
import Link from 'next/link';
import { Lock } from "lucide-react";
const rubik = Rubik({ subsets: ['latin'], style: ['italic', 'normal']});

export default function Home() {
  return (
    <>
    {/* SPACE RAIN */}

    <Rain />

    {/* HEADER */}

    <header className="p-5">
      <h1 className={rubik.className} style={{ textAlign: 'center', fontSize: '4rem', fontWeight: 'bold', marginTop: '0.5rem', fontStyle: 'normal' }}>
        IN THE MIND OF A VEX V5 ENGINEER
      </h1>

    {/* BLURB TEXT */}

      <p className={rubik.className} style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: '400', color: '#b2aeae', marginTop: '-0.2rem', fontStyle: 'italic'}}>
      A BEHIND-THE-SCENES LOOK AT COMPETITIVE ROBOTICS
      </p>
    </header>

    {/* PUSH BACK BUTTON */}
  
    <section>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      
        <Link href="/start" style={{ width: '400px', display: 'inline-block', padding: '18px 40px', background: '#ffffff', border: '3px solid #2a2060', borderRadius: '60px', fontSize: '2rem', color: '#2a2060', textDecoration: 'none', cursor: 'pointer', }}>
        
          <p className={rubik.className} style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: '400', color: '#000000', marginTop: '-0.2rem', fontStyle: 'normal'}}>
          PUSH BACK - 2025/2026 SEASON
          </p>
      
        </Link>
      </div>
    </section>

    {/* Locked Button 1 */}
    
    <section>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      
        <Link href="/start" style={{ width: '400px', display: 'inline-block', padding: '18px 40px', background: '#828181', border: '3px solid #2a2a2e', borderRadius: '60px', fontSize: '2rem', color: '#2a2060', textDecoration: 'none', position: 'relative', cursor: 'not-allowed' }}>
        
          <p className={rubik.className} style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: '400', color: '#000000', marginTop: '-0.2rem', fontStyle: 'normal'}}>
          OVERRIDE - 2026/2027 SEASON
          </p>
      
        </Link>
      </div>
    </section>

    {/* Locked Button 2 */}
  
    <section>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      
        <Link href="/start" style={{ width: '400px', display: 'inline-block', padding: '18px 40px', background: '#828181', border: '3px solid #2a2a2e', borderRadius: '60px', fontSize: '2rem', color: '#2a2060', textDecoration: 'none', position: 'relative', cursor: 'not-allowed' }}>
        
          <p className={rubik.className} style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: '400', color: '#000000', marginTop: '-0.2rem', fontStyle: 'normal'}}>
          2027/2028 SEASON
          </p>
      
        </Link>
      </div>
    </section>

    {/* Locked Button 3 */}
  
    <section>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      
        <Link href="/start" style={{ width: '400px', display: 'inline-block', padding: '18px 40px', background: '#828181', border: '3px solid #2a2a2e', borderRadius: '60px', fontSize: '2rem', color: '#2a2060', textDecoration: 'none', position: 'relative', cursor: 'not-allowed' }}>
        
          <p className={rubik.className} style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: '400', color: '#000000', marginTop: '-0.2rem', fontStyle: 'normal'}}>
          2028/2029 SEASON
          </p>
      
        </Link>
      </div>
    </section>
    
    </>
  );
}