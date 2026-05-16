'use client';
import { Rubik } from "next/font/google";
import Rain from '../../components/rain';
import { ExternalLink, ChevronRight, ChevronLeft, Home } from "lucide-react";
import Link from "next/link";

const rubik = Rubik({ subsets: ['latin'], style: ['italic', 'normal'] });

export default function GameOverview() {

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

      <img src="/pin1.png" className="spin" style={{ width: '70vw', height: '40vw', zIndex: -1, position: 'fixed', top: '-10vw', right: '-30vw', opacity: 0.3}} />
      <img src="/pin2.png" className="spin" style={{ width: '70vw', height: '40vw', zIndex: -1, position: 'fixed', bottom: '-10vw', left: '-30vw', opacity: 0.5}} />

      <Rain />
        
      <section style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          BRAINSTORMING
        </h2>
        <p style={{ color: '#aaa', fontSize: '1.1rem', fontStyle: 'italic' }}>
          Now how does one build a good robot, much less <strong>design</strong> a good robot?
        </p>
      </section>

      <div style={{
        background: "#ff8c42",
        borderRadius: "30px",
        border: "2px solid #ff9e5e",
        padding: "2rem 2rem 0 2rem",
        marginBottom: "4rem",
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '3rem', fontWeight: 'bold', marginTop: '1rem'}}>
            BACK TO THE BASICS
          </h2>
        </div>

      {/* RESTRUCTURED HEROBOT SECTION */}
      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '2rem', 
        alignItems: 'stretch', 
        maxWidth: '1200px', 
        margin: '2rem auto',
        padding: '0 1rem'
      }}>    

        <div style={{ 
          textAlign: 'left',
          background: 'rgba(255,255,255,0.15)',
          borderRadius: '16px',
          padding: '1.5rem',
        }}>
          <p style={{ lineHeight: '1.8', color: 'white', fontSize: '1.1rem', marginBottom: '2rem' }}>
           Now, this was our team’s second season. In our first season, we decided to build the Herobot, as we thought that this would be helpful to us. 
           However, this year, as we were more experienced, we decided to not actually build the Herobot, but just understand it’s mechanisisms. The
           reason we decided this was because last year, it took us over 3 months to build the herobot.
          </p>
          <p style={{ lineHeight: '1.8', color: 'white', fontSize: '1.1rem', marginBottom: '2rem' }}>
           Because of this, we lost valuable time that we could have used to design a better robot, which may have allowed us to reach higher competition 
           levels.
          </p>
          <p style={{ lineHeight: '1.8', color: 'white', fontSize: '1.1rem', marginBottom: '0' }}>
            The image to the right is an SVG file of the Herobot designed for this year’s game, Flex. This robot is built to collect 1 pin or 1 cup (or both) 
            at a time and is capable of picking them up <strong>ONLY IF THEY ARE UPRIGHT</strong>. However, it is limited to only being able to stack up to
            24 inches, as the 2-bar lift doesn’t expand past that. It is also able to change the toggles using the traction wheel connected to the 2-bar lift.
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          background: 'black',
          borderRadius: '16px',
          padding: '0',
          overflow: 'hidden',
        }}>
          <img 
            src="/trace1.svg" 
            alt="HeroBot Schematic Trace" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              border: 'none',
              borderRadius: '16px'
            }} 
          />
        </div>
      </section>

      </div>
<div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
  <h2 style={{ ...largerSubheadingStyle, textAlign: 'left' }}>
    USEFUL LINKS
  </h2>
</div>

<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
  
  <a
    href="https://instructions.online/?id=4063-2026_-_2027_vrc_herobot_flex"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'flex',
      width: '100%',
      maxWidth: '800px',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.5rem 2rem',
      background: 'rgba(255, 140, 66, 0.4)',
      borderRadius: '16px',
      textDecoration: 'none',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.2s',
      boxSizing: 'border-box',
      marginBottom: '25px'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.background = '#ffffff';
      e.currentTarget.style.color = '#ff8c42';
      e.currentTarget.style.border = '1px solid #ff8c42';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.background = 'rgba(255, 140, 66, 0.4)';
      e.currentTarget.style.color = 'white';
      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
      Flex HeroBot Build Instructions
    </span>

    <ExternalLink size={20} opacity={0.7} />
  </a>

</div>

      <section style={{ maxWidth: '800px', margin: '0 auto 4rem auto', marginTop: '20px' }}>
        {/* SCORING SYSTEM */}
<h2 style={largerSubheadingStyle}>RATING THE HEROBOT</h2>

<div style={{ 
    overflow: 'hidden', 
    background: 'rgba(255, 140, 66, 0.1)', 
    borderRadius: '16px', 
    border: '1px solid rgba(255, 255, 255, 0.1)', 
    marginBottom: '3rem' 
    }}>
        
  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
    <thead>
      <tr style={{ background: 'rgb(255, 138, 66)', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <th style={{ padding: '1rem', fontWeight: 'bold' }}>Category</th>
        <th style={{ padding: '1rem', fontWeight: 'bold', textAlign: 'right' }}>Score (%)</th>
      </tr>
    </thead>

    <tbody>
      <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <td style={{ padding: '0.8rem 1rem', color: '#ccc' }}>Simplicity</td>
        <td style={{ padding: '0.8rem 1rem', textAlign: 'right', fontWeight: 'bold', color: '#4dff50' }}>
          90%
        </td>
      </tr>

      <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <td style={{ padding: '0.8rem 1rem', color: '#ccc' }}>Competitiveness</td>
        <td style={{ padding: '0.8rem 1rem', textAlign: 'right', fontWeight: 'bold', color: '#f9ff4d' }}>
          60%
        </td>
      </tr>

      <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <td style={{ padding: '0.8rem 1rem', color: '#ccc' }}>Stability</td>
        <td style={{ padding: '0.8rem 1rem', textAlign: 'right', fontWeight: 'bold', color: '#4dff50' }}>
          70%
        </td>
      </tr>

      <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <td style={{ padding: '0.8rem 1rem', color: '#ccc' }}>Efficiency</td>
        <td style={{ padding: '0.8rem 1rem', textAlign: 'right', fontWeight: 'bold', color: '#ff4d4d' }}>
          50%
        </td>
      </tr>

      <tr>
        <td style={{ padding: '0.8rem 1rem', fontWeight: 'bold', color: 'white' }}>
          Total Score
        </td>
        <td style={{ padding: '0.8rem 1rem', textAlign: 'right', fontWeight: 'bold', color: '#f9ff4d' }}>
          67.5%
        </td>
      </tr>
    </tbody>
  </table>
</div>

        {/* TIMELINE PARAGRAPHS */}
        <div style={{ textAlign: 'left' }}>
          <h2 style={largerSubheadingStyle}>Summary</h2>
          <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '2rem' }}>
            Overall, we concluded that this robot was much better than last year's Herobot, and could definitely be used for competition. However, as the mechanisms
            (drivetrain, intake, etc.) were just a bit too slow, we ultimately decided not to use the herobot because of these structural limitations.
          </p>
        </div>

        {/* BOTTOM NAVIGATION BUTTONS */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          marginTop: '4rem',
          paddingBottom: '4rem' 
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

          <Link href="/override/brainstormingoverride" style={navButtonStyle}
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