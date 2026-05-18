'use client';
import { Rubik } from "next/font/google";
import { useState } from "react";
import Rain from '../../components/rain';
import { Info, ExternalLink, Home, ChevronRight, FileText, ChevronLeft, Lightbulb } from "lucide-react";
import Link from "next/link";

const rubik = Rubik({ subsets: ['latin'], style: ['italic', 'normal'] });

export default function GameOverview() {

  const generalLinks = [
    { title: "VEX V5 Game Manual", url: "https://content.vexrobotics.com/docs/2026-2027/override/files/v5rc-override-0.1.2.pdf" },
  ]

  const largerSubheadingStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
    color: '#e67300' 
  };

  const smallerSubheadingStyle = {
    fontSize: '1.1rem',
    color: 'white',
    marginBottom: '0.5rem',
    fontWeight: '500', 
    textTransform: 'uppercase' as const,
    fontStyle: 'italic'
  };

  const navButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 2rem',
    background: '#ff8c00', 
    color: 'white',        
    border: '2px solid #ff8c00', 
    borderRadius: '16px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  return (
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

      <img src="/Pin1.png" className="spin" style={{ width: '70vw', height: '40vw', zIndex: -1, position: 'fixed', top: '-10vw', right: '-30vw', opacity: 0.3}} />
      <img src="/Pin2.png" className="spin" style={{ width: '70vw', height: '40vw', zIndex: -1, position: 'fixed', bottom: '-10vw', left: '-30vw', opacity: 0.5}} />

      <Rain />
        
      <section style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          ROBOT ELEMENTS
        </h2>
        <p style={{ color: '#aaa', fontSize: '1.1rem', fontStyle: 'italic' }}>
          What should we add to our robot?
        </p>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>

        <div style={{ textAlign: 'center' }}>
          <h2 style={largerSubheadingStyle}>Drivetrain</h2>
          <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '2rem' }}>
            <strong>Because there is a 55 watt drivetrain limit for this year's game, we decided to re-use last year's drivetrain with a couple of modifications.</strong>
          </p>

          <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '2rem' }}>
            First, let's talk about last year's drivetrain. Overall, we rated it a solid 8.5/10 for a couple of reasons. First, we used a 44 watt 360 rpm 
            drive, and during competitions, we felt that this was a good balance between speed and torque. As the driver of the team, I would honestly 
            say that it was really easy to do complex turns with it, and even our coder agreed that it was decently easy to code with it.
          </p>

          <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '2rem', fontStyle: 'italic' }}>
            Although we were using block coding for the entirety of the 2025 - 2026 Push Back season, during our off-season, we learned how to use
            LemLib and C++, as this type of coding allowed us to have more control of our robot through complex coding methods such as PID and Odometry 
            tracking systems.
          </p>

          <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '2rem' }}>
            For our modifications, we decided to add two 5.5 watt motors to each side of the drivetrain for extra power, as last year, we felt our 
            drivetrain overheated way too fast. We also decided to slightly modify the gear train for more effective power transferring.
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          marginTop: '2rem',
          paddingBottom: '4rem' 
        }}>
          <Link href="/" style={navButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'white'; 
              e.currentTarget.style.color = '#ff8c00';    
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ff8c00'; 
              e.currentTarget.style.color = 'white';        
            }}
          >

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Home size={23} />
          <span> Back to Homepage</span>
          </div>
          </Link>

          <Link href="/override/herobotoverride" style={navButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'white'; 
              e.currentTarget.style.color = '#ff8c00';    
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ff8c00'; 
              e.currentTarget.style.color = 'white';        
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              Next Page <ChevronRight size={25} />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}