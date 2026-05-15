'use client';
import { Rubik } from "next/font/google";
import { useState } from "react";
import Rain from '../components/rain';
import { Info, ExternalLink, Home, ChevronRight, FileText, ChevronLeft } from "lucide-react";
import Link from "next/link";

const rubik = Rubik({ subsets: ['latin'], style: ['italic', 'normal'] });

type FieldObject = {
  id: string; 
  title: string; 
  description: string; 
  x: string;   // Percentage from left
  y: string;   // Percentage from top
  w: string;   // Width of hitbox
  h: string;   // Height of hitbox
  links: { title: string; url: string }[]; 
};

export default function GameOverview() {
  const [selected, setSelected] = useState<FieldObject | null>(null);

  const objects: FieldObject[] = [
    {
      id: "center-goal",
      title: "Center Goal",
      description: "The center goals are field elements located in the middle of the field, consisting of an upper center goal and a lower center goal. Robots can score red and blue blocks into either goal, and a team controls a goal by having more of their alliance colored blocks inside it. Controlling a goal awards an 8-point bonus, which can often swing a match’s score.",
      x: "31.6%", y: "50%", w: "120px", h: "120px",
      links: [
        { title: "Center Goal Rules Q&A: 2782", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2782" },
        { title: "Center Goal Rules Q&A: 2737", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2737" }
      ]
    },
    {
      id: "long-goal-left",
      title: "Long Goal (Left)",
      description: "The long goal is a field element where robots can score red and blue blocks during the match. It provides a consistent scoring location for quickly placing hoarded blocks for points. A control zone located between both long goals can hold up to four blocks. A team gains control by having more of their alliance colored blocks inside it, earning a 10-point bonus.",
      x: "31.6%", y: "18%", w: "220px", h: "50px",
      links: [
        { title: "Long Goal Rules Q&A: 3115", url: "https://www.robotevents.com/V5RC/2025-2026/QA/3115" },
        { title: "Long Goal Rules Q&A: 2789", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2789" }
      ]
    },
    {
      id: "long-goal-right",
      title: "Long Goal (Right)",
      description: "The long goal is a field element where robots can score red and blue blocks during the match. It provides a consistent scoring location for quickly placing hoarded blocks for points. A control zone located between both long goals can hold up to four blocks. A team gains control by having more of their alliance colored blocks inside it, earning a 10-point bonus.",
      x: "31.6%", y: "82%", w: "220px", h: "50px",
      links: [
        { title: "Long Goal Rules Q&A: 3115", url: "https://www.robotevents.com/V5RC/2025-2026/QA/3115" },
        { title: "Long Goal Rules Q&A: 2789", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2789" }
      ]
    },
    {
      id: "blue-park-zone",
      title: "Blue Park Zone",
      description: "This is a Blue Alliance Parking Zone.\n\nThe parking zone is a designated area on the field where robots must be fully or partially inside of at the end of the match for points. Parking one robot earns 8 points, while parking two robots earns 30 points.",
      x: "54.7%", y: "50.2%", w: "80px", h: "80px",
      links: [
        { title: "Parking Rules Q&A: 3000", url: "https://www.robotevents.com/it/V5RC/2025-2026/QA/3000" },
        { title: "Parking Rules Q&A: 2772", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2772" }
      ]
    },
    {
      id: "red-park-zone",
      title: "Red Park Zone",
      description: "This is a Red Alliance Parking Zone.\n\nThe parking zone is a designated area on the field where robots must be fully or partially inside of at the end of the match for points. Parking one robot earns 8 points, while parking two robots earns 30 points.",
      x: "8.6%", y: "50.2%", w: "80px", h: "80px",
      links: [
        { title: "Parking Rules Q&A: 3000", url: "https://www.robotevents.com/it/V5RC/2025-2026/QA/3000" },
        { title: "Parking Rules Q&A: 2772", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2772" }
      ]
    },
    {
      id: "loader1",
      title: "Loader",
      description: "The loader is a field element that starts the match holding three red and three blue blocks. During the 1:45 driver-controlled period, the loader may place their alliance colored blocks into the tubes for robots to collect and score.",
      x: "5.5%", y: "82%", w: "30px", h: "30px",
      links: [
        { title: "Loader Rules Q&A: 2787", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2787" },
        { title: "Loader Rules Q&A: 2840", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2840" }
      ]
    },
    {
      id: "loader2",
      title: "Loader",
      description: "The loader is a field element that starts the match holding three red and three blue blocks. During the 1:45 driver-controlled period, the loader may place their alliance colored blocks into the tubes for robots to collect and score.",
      x: "5.5%", y: "18%", w: "30px", h: "30px",
      links: [
        { title: "Loader Rules Q&A: 2787", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2787" },
        { title: "Loader Rules Q&A: 2840", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2840" }
      ]
    },
    {
      id: "loader3",
      title: "Loader",
      description: "The loader is a field element that starts the match holding three red and three blue blocks. During the 1:45 driver-controlled period, the loader may place their alliance colored blocks into the tubes for robots to collect and score.",
      x: "57.6%", y: "18%", w: "30px", h: "30px",
      links: [
        { title: "Loader Rules Q&A: 2787", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2787" },
        { title: "Loader Rules Q&A: 2840", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2840" }
      ]
    },
    {
      id: "loader4",
      title: "Loader",
      description: "The loader is a field element that starts the match holding three red and three blue blocks. During the 1:45 driver-controlled period, the loader may place their alliance colored blocks into the tubes for robots to collect and score.",
      x: "57.6%", y: "82%", w: "30px", h: "30px",
      links: [
        { title: "Loader Rules Q&A: 2787", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2787" },
        { title: "Loader Rules Q&A: 2840", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2840" }
      ]
    },
    {
      id: "blocks1",
      title: "Blocks",
      description: "Blocks are the primary game objects used for scoring in the match. There are red and blue blocks, representing each alliance. Robots can hoard, transport, and score blocks into field elements such as center goals or long goals to earn points.",
      x: "22.6%", y: "66%", w: "40px", h: "40px",
      links: [
        { title: "Block Rules Q&A: 2923", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2923" },
        { title: "Block Rules Q&A: 2809", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2809" }
      ]
    },
    {
      id: "blocks2",
      title: "Blocks",
      description: "Blocks are the primary game objects used for scoring in the match. There are red and blue blocks, representing each alliance. Robots can hoard, transport, and score blocks into field elements such as center goals or long goals to earn points.",
      x: "22.6%", y: "34%", w: "40px", h: "40px",
      links: [
        { title: "Block Rules Q&A: 2923", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2923" },
        { title: "Block Rules Q&A: 2809", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2809" }
      ]
    },
    {
      id: "blocks3",
      title: "Blocks",
      description: "Blocks are the primary game objects used for scoring in the match. There are red and blue blocks, representing each alliance. Robots can hoard, transport, and score blocks into field elements such as center goals or long goals to earn points.",
      x: "40.6%", y: "66%", w: "40px", h: "40px",
      links: [
        { title: "Block Rules Q&A: 2923", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2923" },
        { title: "Block Rules Q&A: 2809", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2809" }
      ]
    },
    {
      id: "blocks4",
      title: "Blocks",
      description: "Blocks are the primary game objects used for scoring in the match. There are red and blue blocks, representing each alliance. Robots can hoard, transport, and score blocks into field elements such as center goals or long goals to earn points.",
      x: "40.6%", y: "34%", w: "40px", h: "40px",
      links: [
        { title: "Block Rules Q&A: 2923", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2923" },
        { title: "Block Rules Q&A: 2809", url: "https://www.robotevents.com/V5RC/2025-2026/QA/2809" }
      ]
    }
  ];

  const generalLinks = [
    { title: "VEX V5 Game Manual", url: "https://www.vexrobotics.com/push-back-manual?srsltid=AfmBOopYWEGAgtVb5QmFB10j9U7lTJrwfUl5YXwo7-dubIiT1OiQqyxb" },
    { title: "VRC Safety Standards", url: "https://v5rc-kb.recf.org/hc/en-us/articles/9654207108503-Safety-Procedures-at-VEX-V5-Robotics-Competition-Events/" }
  ];

  const scoringData = [
    { item: "Autonomous Bonus", points: "10 points" },
    { item: "Each Block Scored", points: "3 points" },
    { item: "Each Controlled Zone in a Long Goal", points: "10 points" },
    { item: "Controlled Center Goal (Upper)", points: "8 points" },
    { item: "Controlled Center Goal (Lower)", points: "6 points" },
    { item: "1 Parked Alliance Robot", points: "8 points" },
    { item: "2 Parked Alliance Robots", points: "30 points" }
  ];

  const keyRules = [
    { rule: "G1: Respect and Civility", desc: "Teams must display sportsmanship. Extreme violations may result in DQs." },
    { rule: "SG2: Horizontal Expansion", desc: "Robots may not exceed a horizontal dimension of 36 inches at any point." },
    { rule: "SG3: Vertical Expansion", desc: "Robots may only expand vertically when in contact with a scoring zone." },
    { rule: "SG4: Possession Limit", desc: "Robots are limited to holding a maximum of 3 blocks simultaneously." }
  ];

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

      <Rain />
        
      <section style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Brainstorming
        </h2>
        <p style={{ color: '#aaa', fontSize: '1.1rem', fontStyle: 'italic' }}>
          Now how does one build a good robot, much less <strong>design</strong>! a good robot?
        </p>
      </section>

      {/* RESTRUCTURED HEROBOT SECTION */}
      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '2rem', 
        alignItems: 'center', 
        maxWidth: '1200px', 
        margin: '4rem auto',
        padding: '0 1rem'
      }}>
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
            BACK TO THE BASICS
          </h2>
          <p style={{ lineHeight: '1.8', color: '#ccc', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Before our team began brainstorming designs, we collectively decided to build the Herobot first, since all of us were new to V5RC Robotics, 
            and some of us were completely new to robotics in general. We felt that building the Herobot would help us develop a stronger understanding 
            of the tools, construction techniques, and overall building process.
          </p>

          <p style={{ lineHeight: '1.8', color: '#ccc', fontSize: '1.1rem', marginBottom: '1rem' }}>
            The image to the left is an SVG file of the Herobot designed for this year’s game, Dex. This robot is built to collect up to three blocks 
            at a time and is capable of picking them up from both the ground and loader stations. However, it is limited to scoring only in the long
            goal and center-low goal.
          </p>
          
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/trace.svg" 
            alt="HeroBot Schematic Trace" 
            style={{ 
              width: '100%', 
              maxWidth: '500px', 
              height: 'auto',
              border: '6px solid #ff8c00', // Border thickened to 6px
              borderRadius: '8px' 
            }} 
          />
        </div>
      </section>

<div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
  <h2 style={{ ...largerSubheadingStyle, textAlign: 'left' }}>
    USEFUL LINKS
  </h2>
</div>

<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
  
  <a
    href="https://instructions.online/?id=4063-2025-2026_v5rc_hero_bot_dex"
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
      Dex HeroBot Build Instructions
    </span>

    <ExternalLink size={20} opacity={0.7} />
  </a>

</div>

      <section style={{ maxWidth: '800px', margin: '0 auto 4rem auto', marginTop: '20px' }}>
        {/* SCORING SYSTEM */}
<h2 style={largerSubheadingStyle}>RATING THE HEROBOT</h2>

<div style={{ overflow: 'hidden', background: 'rgba(255, 140, 66, 0.1)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '3rem' }}>
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
        <td style={{ padding: '0.8rem 1rem', textAlign: 'right', fontWeight: 'bold', color: '#ff4d4d' }}>
          30%
        </td>
      </tr>

      <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <td style={{ padding: '0.8rem 1rem', color: '#ccc' }}>Stability</td>
        <td style={{ padding: '0.8rem 1rem', textAlign: 'right', fontWeight: 'bold', color: '#f9ff4d' }}>
          50%
        </td>
      </tr>

      <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <td style={{ padding: '0.8rem 1rem', color: '#ccc' }}>Efficiency</td>
        <td style={{ padding: '0.8rem 1rem', textAlign: 'right', fontWeight: 'bold', color: '#ff4d4d' }}>
          30%
        </td>
      </tr>

      <tr>
        <td style={{ padding: '0.8rem 1rem', fontWeight: 'bold', color: 'white' }}>
          Total Score
        </td>
        <td style={{ padding: '0.8rem 1rem', textAlign: 'right', fontWeight: 'bold', color: '#f9ff4d' }}>
          50%
        </td>
      </tr>
    </tbody>
  </table>
</div>

        {/* TIMELINE PARAGRAPHS */}
        <div style={{ textAlign: 'left' }}>
          <h2 style={largerSubheadingStyle}>Summary</h2>
          <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '2rem' }}>
            Overall, we concluded that while this model was effective for learning and helped us build a strong foundation, it was not competitive-ready. We also considered 
            upgrading it for competition use, but quickly realized that key modifications, such as changing the drivetrain motor cartridges, would be difficult to implement. 
            The motors were integrated in a way that made them hard to remove without disassembling the intake system entirely. Because of these structural limitations, we 
            ultimately decided it would be more practical and efficient to move forward with designing a fully custom robot.
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
          <ChevronLeft size={25} />
          <span> Back to Homepage</span>
          </div>
          </Link>

          <Link href="/brainstorming" style={navButtonStyle}
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