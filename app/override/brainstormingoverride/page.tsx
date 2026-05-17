'use client';
import { Rubik } from "next/font/google";
import Rain from '../../components/rain';
import { Info, ExternalLink, Home, ChevronRight, FileText, ChevronLeft, Lightbulb, TextAlignCenter } from "lucide-react";
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

    const pointsPerSecond = [
    { item: "Scoring A Pin | Below 24 Inches", points: "2.5 PPS" },
    { item: "Scoring A Pin | Above 24 Inches", points: "1.25 PPS" },
    { item: "Flipping Toggle (Assuming Yellow Pins Are Scored)", points: "10 PPS" },
    { item: "1 Robot In Center Zone", points: "0.4 PPS" },
    { item: "2 Robots In Center Zone", points: "0.8 PPS" },
    { item: "Autonomous Win Point", points: "0.8 PPS" },
  ];

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
          POINTS PER SECOND (PPS)
        </h2>
        <p style={{ color: '#aaa', fontSize: '1.1rem', fontStyle: 'italic' }}>
          Exploring scoring efficiency, cycle optimization, and strategic decision-making through <strong>PPS</strong>.
        </p>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>

      <div style={{
        background: 'rgba(255, 120, 0, 0.45)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 140, 0, 0.6)',
        padding: '2rem',
        marginBottom: '-2rem',
      }}>
      <div style={{ textAlign: 'center' }}>

        <div style={{
          border: '2px dotted rgba(255, 255, 255, 0.9)',
          borderRadius: '12px',
          padding: '1rem',
          background: 'rgba(255, 255, 255, 0.15)',
          position: 'relative',
          marginBottom: '2rem',
          textAlign: 'center',
        }}>
          <div style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.8 }}>
            <Info size={18} strokeWidth={2.5} />
          </div>
          <p style={{ 
            fontSize: '0.75rem', 
            fontWeight: '700', 
            textTransform: 'uppercase', 
            letterSpacing: '0.08em', 
            color: '#ffffff', 
            marginBottom: '0.5rem', 
            paddingTop: '0.2rem' }}>
          Definition</p>

          <p style={{ color: '#e2e2e2', lineHeight: '1.5', marginBottom: '0.3rem', paddingRight: '1.8rem', paddingLeft: '1.8rem', fontSize: '0.9rem', fontWeight: '500' }}>
            Points per second, often shortened to PPS, is a way to measure how efficiently a robot scores during a match. It is calculated by dividing 
            the total number of points scored by the amount of time spent scoring. PPS can help teams compare strategies, evaluate robot 
            performance, and determine which scoring methods are the fastest and most effective.
          </p>
        </div>

        <div style={{ 
          overflow: 'hidden', 
          background: 'rgba(255, 140, 66, 0.1)', 
          borderRadius: '16px', 
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          marginBottom: '2rem',
          marginTop: '1rem' 
          }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgb(255, 138, 66)', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <th style={{ padding: '1rem', fontWeight: 'bold' }}>Scoring Action</th>
                <th style={{ padding: '1rem', fontWeight: 'bold', textAlign: 'right' }}>PPS</th>
              </tr>
            </thead>
            <tbody>
              {pointsPerSecond.map((row, index) => (
                <tr key={index} style={{ borderBottom: index !== pointsPerSecond.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none' }}>
                  <td style={{ padding: '0.8rem 1rem', color: '#ccc' }}>{row.item}</td>
                  <td style={{ padding: '0.8rem 1rem', textAlign: 'right', fontWeight: 'bold' }}>{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          border: '2px dotted rgba(255, 255, 200, 0.6)',
          borderRadius: '12px',
          padding: '1rem',
          background: 'rgba(255, 255, 150, 0.1)',
          position: 'relative',
          textAlign: 'center',
        }}>
          <div style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.85 }}>
            <Lightbulb size={18} strokeWidth={2.5} color="#ffe066" />
          </div>
          <p style={{ 
            fontSize: '0.75rem', 
            fontWeight: '700', 
            textTransform: 'uppercase', 
            letterSpacing: '0.08em', 
            color: '#ffe066', 
            marginBottom: '0.5rem', 
            paddingTop: '0.2rem' }}>
          Important Note</p>

          <p style={{ fontSize: '0.9rem', color: '#e2e2e2', lineHeight: '1.5', fontWeight: '500', paddingRight: '1.8rem', paddingLeft: '1.8rem', paddingBottom: '0rem', margin: 0 }}>
            This table is slightly scuffed, but here is the jist of it. Because this game has a lot of different scoring options, and
            the game is designed in a way that matches can switch either way through really small inputs, it was very hard to make a 
            PPS for this year's game. However, using this weird PPS, we were still able to come up with some ideas for our robot.
          </p>
        </div>
      </div>
     </div>
    </section>

      <section style={{ maxWidth: '800px', margin: '0 auto' }}>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          paddingBottom: '4rem', 
        }}>

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
              <ChevronLeft size={25} /> Previous Page
            </div>
          </Link>

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
          <span> Back to Homepage</span>
          </div>
          </Link>

          <Link href="/override/brainstormingoverride2" style={navButtonStyle}
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
  )
}