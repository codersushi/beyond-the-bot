'use client';
import { Rubik } from "next/font/google";
import { useState } from "react";
import Rain from '../components/rain';
import { Info, ExternalLink, Home, ChevronRight, FileText, ChevronLeft, Lightbulb } from "lucide-react";
import Link from "next/link";

const rubik = Rubik({ subsets: ['latin'], style: ['italic', 'normal'] });

type FieldObject = {
  id: string; 
  title: string; 
  description: string;
  teamThoughts?: string; 
  x: string;   // Percentage from left
  y: string;   // Percentage from top
  w: string;   // Width of hitbox
  h: string;   // Height of hitbox
  transform?: string;
  transformOrigin?: string;
};

export default function GameOverview() {
  const [selected, setSelected] = useState<FieldObject | null>(null);

  const objects: FieldObject[] = [
    {
      id: "center-zone",
      title: "Center Zone",
      description: "In the final 20 seconds of the match, teams compete for King of the Hill style control, with the alliance holding the most robots in the center zone earning a bonus that scores points for all yellow pins in the center post.",
      teamThoughts: "We theorized that using an angled plow could allow us to push teams easier.",
      x: "31.76%", y: "50.25%", w: "120px", h: "120px", transformOrigin: "center", transform: "rotate(45deg)", 
    },
    {
      id: "long-goal-left",
      title: "Center Post",
      description: "The center zone is where teams stack pins and cups for points. A control bonus awards all points for yellow pins in the center post to the alliance with the most robots in the zone at the end of the match, regardless of toggle position.",
      teamThoughts: "If we only score our pins, we still get points even if we lose control.",
      x: "31.76%", y: "50%", w: "50px", h: "50px",
    },
    {
      id: "toggle1",
      title: "Toggle",
      description: "A toggle is a switch state on a game element that determines which alliance scores the yellow pins. If it is set to red, the red alliance earns the points, and if it is set to blue, the blue alliance earns the points for the yellow pins.",
      teamThoughts: "A flywheel can spin the toggle into position, and a vision sensor can help align it in autonomous.",
      x: "31.6%", y: "98%", w: "120px", h: "15px",
    },
    {
      id: "toggle2",
      title: "Toggle",
      description: "A toggle is a switch state on a game element that determines which alliance scores the yellow pins. If it is set to red, the red alliance earns the points, and if it is set to blue, the blue alliance earns the points for the yellow pins.",
      teamThoughts: "A flywheel can spin the toggle into position, and a vision sensor can help align it in autonomous.",
      x: "58.8%", y: "50.2%", w: "15px", h: "120px",
    },
    {
      id: "toggle3",
      title: "Toggle",
      description: "A toggle is a switch state on a game element that determines which alliance scores the yellow pins. If it is set to red, the red alliance earns the points, and if it is set to blue, the blue alliance earns the points for the yellow pins.",
      teamThoughts: "A flywheel can spin the toggle into position, and a vision sensor can help align it in autonomous.",
      x: "4.6%", y: "50.2%", w: "15px", h: "120px",
    },
    {
      id: "toggle4",
      title: "Toggle",
      description: "A toggle is a switch state on a game element that determines which alliance scores the yellow pins. If it is set to red, the red alliance earns the points, and if it is set to blue, the blue alliance earns the points for the yellow pins.",
      teamThoughts: "A flywheel can spin the toggle into position, and a vision sensor can help align it in autonomous.",
      x: "31.6%", y: "2%", w: "120px", h: "15px",
    },
    {
      id: "loader1",
      title: "Loader",
      description: "A human loader can introduce a pin, a cup, or both at once, then open the loader hatch so the robot can collect the game pieces.",
      teamThoughts: "We will probably have to design an intake system for this. A flex wheel intake may work, as it will adapt for the unique shapes of the game elements.",
      x: "5.5%", y: "90%", w: "30px", h: "30px",
    },
    {
      id: "loader2",
      title: "Loader",
      description: "A human loader can introduce a pin, a cup, or both at once, then open the loader hatch so the robot can collect the game pieces.",
      teamThoughts: "We will probably have to design an intake system for this. A flex wheel intake may work, as it will adapt for the unique shapes of the game elements.",
      x: "5.5%", y: "10.5%", w: "30px", h: "30px",
    },
    {
      id: "loader3",
      title: "Loader",
      description: "A human loader can introduce a pin, a cup, or both at once, then open the loader hatch so the robot can collect the game pieces.",
      teamThoughts: "We will probably have to design an intake system for this. A flex wheel intake may work, as it will adapt for the unique shapes of the game elements.",
      x: "57.6%", y: "10.5%", w: "30px", h: "30px",
    },
    {
      id: "loader4",
      title: "Loader",
      description: "A human loader can introduce a pin, a cup, or both at once, then open the loader hatch so the robot can collect the game pieces.",
      teamThoughts: "We will probably have to design an intake system for this. A flex wheel intake may work, as it will adapt for the unique shapes of the game elements.",
      x: "57.6%", y: "90%", w: "30px", h: "30px",
    },
    {
      id: "loaderzone1",
      title: "Loader Zone",
      description: "When your alliance's robot is in this zone, the human loader is not allowed to load items. However, once the robot leaves, the loader can load the game elements.",
      teamThoughts: "We will have to be careful to make sure the robot isn't in the zone when loading.",
      x: "55%", y: "87%", w: "60px", h: "110px",
    },
    {
      id: "loaderzone2",
      title: "Loader Zone",
      description: "When your alliance's robot is in this zone, the human loader is not allowed to load items. However, once the robot leaves, the loader can load the game elements.",
      teamThoughts: "We will have to be careful to make sure the robot isn't in the zone when loading.",
      x: "8.5%", y: "87%", w: "60px", h: "110px",
    },
    {
      id: "loaderzone3",
      title: "Loader Zone",
      description: "When your alliance's robot is in this zone, the human loader is not allowed to load items. However, once the robot leaves, the loader can load the game elements.",
      teamThoughts: "We will have to be careful to make sure the robot isn't in the zone when loading.",
      x: "8.5%", y: "13.7%", w: "60px", h: "110px",
    },
    {
      id: "loaderzone4",
      title: "Loader Zone",
      description: "When your alliance's robot is in this zone, the human loader is not allowed to load items. However, once the robot leaves, the loader can load the game elements.",
      teamThoughts: "We will have to be careful to make sure the robot isn't in the zone when loading.",
      x: "55%", y: "13.7%", w: "60px", h: "110px",
    },
    {
      id: "pins1",
      title: "Pins & Cups",
      description: "Pins are the primary game objects used for scoring in the match. There are red, blue, and yellow pins, representing each alliance + wildcard. Robots can only hold 1 pin and 1 cup at a time, and can stack the elements up to 50 inches tall to get points.",
      x: "14.7%", y: "20%", w: "65px", h: "65px",
    },
    {
      id: "pins2",
      title: "Pins & Cups",
      description: "Pins are the primary game objects used for scoring in the match. There are red, blue, and yellow pins, representing each alliance + wildcard. Robots can only hold 1 pin and 1 cup at a time, and can stack the elements up to 50 inches tall to get points.",
      x: "23.2%", y: "35%", w: "65px", h: "65px",
    },
    {
      id: "pins3",
      title: "Pins & Cups",
      description: "Pins are the primary game objects used for scoring in the match. There are red, blue, and yellow pins, representing each alliance + wildcard. Robots can only hold 1 pin and 1 cup at a time, and can stack the elements up to 50 inches tall to get points.",
      x: "40.3%", y: "65%", w: "65px", h: "65px",
    },
    {
      id: "pins4",
      title: "Pins & Cups",
      description: "Pins are the primary game objects used for scoring in the match. There are red, blue, and yellow pins, representing each alliance + wildcard. Robots can only hold 1 pin and 1 cup at a time, and can stack the elements up to 50 inches tall to get points.",
      x: "48.7%", y: "80%", w: "65px", h: "65px",
    },
    {
      id: "redpost1",
      title: "Red Post",
      description: "The Red Alliance's post. Only the Red Alliance is allowed to stack on this post.",
      x: "23.3%", y: "80%", w: "30px", h: "30px",
    },
    {
      id: "redpost2",
      title: "Red Post",
      description: "The Red Alliance's post. Only the Red Alliance is allowed to stack on this post.",
      x: "14.8%", y: "65.1%", w: "30px", h: "30px",
    },
    {
      id: "bluepost1",
      title: "Blue Post",
      description: "The Blue Alliance's post. Only the Blue Alliance is allowed to stack on this post.",
      x: "48.7%", y: "35.1%", w: "30px", h: "30px",
    },
    {
      id: "bluepost2",
      title: "Blue Post",
      description: "The Blue Alliance's post. Only the Blue Alliance is allowed to stack on this post.",
      x: "40.2%", y: "20.2%", w: "30px", h: "30px",
    },
    {
      id: "sharedpost1",
      title: "Wildcard Post",
      description: "Both Alliance's can use this post to stack game elements.",
      teamThoughts: "If we were to control the black posts, that means that we would be able to score more points, as they can't score on our red posts and are limited to only their blue posts.",
      x: "23.3%", y: "20.2%", w: "30px", h: "30px",
    },
    {
      id: "sharedpost2",
      title: "Wildcard Post",
      description: "Both Alliance's can use this post to stack game elements.",
      teamThoughts: "If we were to control the black posts, that means that we would be able to score more points, as they can't score on our red posts and are limited to only their blue posts.",
      x: "14.8%", y: "35.1%", w: "30px", h: "30px",
    },
    {
      id: "sharedpost3",
      title: "Wildcard Post",
      description: "Both Alliance's can use this post to stack game elements.",
      teamThoughts: "If we were to control the black posts, that means that we would be able to score more points, as they can't score on our red posts and are limited to only their blue posts.",
      x: "48.7%", y: "65.1%", w: "30px", h: "30px",
    },
    {
      id: "sharedpost4",
      title: "Wildcard Post",
      description: "Both Alliance's can use this post to stack game elements.",
      teamThoughts: "If we were to control the black posts, that means that we would be able to score more points, as they can't score on our red posts and are limited to only their blue posts.",
      x: "40.2%", y: "80%", w: "30px", h: "30px",
    },
  ];

  const generalLinks = [
    { title: "VEX V5 Game Manual", url: "https://www.vexrobotics.com/push-back-manual?srsltid=AfmBOopYWEGAgtVb5QmFB10j9U7lTJrwfUl5YXwo7-dubIiT1OiQqyxb" },
    { title: "VRC Safety Standards", url: "https://v5rc-kb.recf.org/hc/en-us/articles/9654207108503-Safety-Procedures-at-VEX-V5-Robotics-Competition-Events/" }
  ];

  const scoringData = [
    { item: "Autonomous Bonus", points: "12 points" },
    { item: "Each Pin Stacked", points: "5 points" },
    { item: "Yellow Pin (Default)", points: "0 points" },
    { item: "Yellow Pin (Activated Toggle)", points: "10 points" },
    { item: "Each Robot In Midfield", points: "8 points" },
  ];

  const keyRules = [
    { rule: "G1: Respect and Civility", desc: "Teams must display sportsmanship. Extreme violatio   ns may result in DQs." },
    { rule: "SG2: Horizontal Expansion", desc: "Robots may not exceed a horizontal dimension of 36 inches at any point." },
    { rule: "SG3: Vertical Expansion", desc: "Robots may only expand up to 50 inches vertically AFTER the autonomous period and BEFORE the endgame period." },
    { rule: "SG4: Possession Limit", desc: "Robots are limited to holding a maximum of 1 pin and 1 cup simultaneously." }
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

      <img src="/wheel.png" className="spin" style={{ width: '70vw', height: '40vw', zIndex: -1, position: 'fixed', top: '-10vw', right: '-30vw', opacity: 0.3}} />
      <img src="/gear.png" className="spin" style={{ width: '70vw', height: '40vw', zIndex: -1, position: 'fixed', bottom: '-10vw', left: '-30vw', opacity: 0.5}} />

      <Rain />
        
      <section style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          GAME ANALYSIS
        </h2>
        <p style={{ color: '#aaa', fontSize: '1.1rem', fontStyle: 'italic' }}>
          Breaking down the 2026–2027 VEX V5 game, <strong>Override</strong>!
        </p>

        {/* REVEAL VIDEO EMBED */}
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
          <iframe 
            width="800" 
            height="450" 
            src="https://www.youtube.com/embed/68NxYIAzbkY" 
            title="V5RC Push Back Game Reveal"
            style={{ borderRadius: '20px', border: '3px solid #e67300', maxWidth: '100%' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
      </section>

      <section style={{ marginBottom: '2.5rem', textAlign: 'center', marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', fontWeight: 'bold' }}>
          ALLIANCE OVERVIEW
        </h2>
        <p style={{ lineHeight: '1.7', color: '#ccc', maxWidth: '850px', margin: '0 auto' }}>
          Override is a VEX V5 Robotics Competition game where two alliances, each made up of two robots, 
          compete on a shared field to earn points through strategic movement, stacking, 
          and "King Of The Hill" style zone control.
        </p>
      </section>

      {/* INTERACTIVE FIELD MAP */}
      <div
        style={{
          background: "#ff8c42", 
          borderRadius: "30px", 
          border: "2px solid #ff9e5e",
          padding: "2rem",
          marginBottom: "4rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "stretch", 
          overflow: "hidden" 
        }}
      >
        <div style={{ display: "flex", alignItems: "stretch", width: "fit-content" }}>
          <div style={{ position: "relative", width: "fit-content" }}>
            <img
              src="/fieldoverride.png"
              alt="VEX V5 Field"
              style={{
                display: "block",
                width: "1200px" ,      // INCREASED FROM 1200
                height: "auto",
                objectFit: "contain",
                clipPath: "inset(0% 0% 0% 0%)", 
                marginLeft: "-180px"  // ADJUSTED TO RE-CENTER LARGER IMAGE
              }}
            />

            {objects.map((obj) => (
              <div
                key={obj.id}
                onClick={() => setSelected(obj)}
                style={{
                    position: "absolute",
                    left: obj.x,
                    top: obj.y,
                    width: obj.w,
                    height: obj.h,
                    cursor: "pointer",
                    background: selected?.id === obj.id ? "rgba(255, 255, 255, 0.3)" : "rgba(251, 255, 0, 0.52)",
                    border: selected?.id === obj.id ? "3px solid #ffffff" : "2px dashed rgba(255, 255, 255, 0.4)",
                    transform: `translate(-50%, -50%) ${obj.transform ?? ""}`,
                    transformOrigin: obj.transformOrigin ?? "center",
                    borderRadius: obj.id === "center-goal" ? "20%" : "12px",
                    transition: "all 0.2s ease-in-out",
                    zIndex: 10
                }}
              />
            ))}
          </div>

          <div
            style={{
              width: "350px", 
              padding: "2.5rem 1.5rem",
              background: "#ff8c42", 
              color: "#ffffff", 
              borderRadius: "20px",
              flexShrink: 0,
              alignSelf: "stretch", 
              margin: "9px 0 9px -390px", // SHIFTED PANEL TO COMPENSATE FOR IMAGE SIZE
              position: "relative",
              zIndex: 20,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "center"
            }}
          >
            <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem", textTransform: "uppercase" }}>
              {selected?.title || "SELECT A ZONE"}
            </h2>
            
            {selected ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "12px",
                  padding: "1rem", 
                  background: "rgba(0, 0, 0, 0.05)",
                  position: "relative",
                  marginBottom: "0.5rem"
                }}>
                  <div style={{ position: "absolute", top: "10px", right: "10px", opacity: 0.8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ fontSize: '10px' }}></span>
                      <Info size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                  <p
                
                style={{
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#ffffff",
                    paddingLeft: "0.8rem",
                    paddingTop: "0.2rem"
                    }}
                    >
                    Summary
                    </p>

                  <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: "1.5", fontWeight: "500", textAlign: "left", paddingTop: "0.4rem", paddingRight: "1.8rem", paddingLeft: "0.8rem", paddingBottom: "0.8rem" }}>
                    {selected.description}
                  </p>
                </div>

            {selected?.teamThoughts && (
            <div
                style={{
                border: "1px solid rgba(255, 255, 200, 0.3)",
                borderRadius: "12px",
                padding: "0.5rem",
                background: "rgba(255, 255, 150, 0.1)",
                position: "relative",
                marginBottom: "0.5rem"
                }}
            >
                <div style={{ position: "absolute", top: "10px", right: "10px", opacity: 0.85 }}>
                <Lightbulb size={18} strokeWidth={2.5} color="#ffe066" />
                </div>

                <p
                style={{
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#ffe066",
                    marginBottom: "0.4rem",
                    paddingLeft: "0.8rem",
                    paddingTop: "0.2rem"
                }}
                >
                Team Thoughts
                </p>

                <p
                style={{
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.85)",
                    lineHeight: "1.5",
                    fontWeight: "500",
                    textAlign: "left",
                    paddingRight: "1.8rem",
                    paddingLeft: "0.8rem",
                    paddingBottom: "0.8rem"
                }}
                >
                {selected.teamThoughts}
                </p>
            </div>
            )}

              </div>
            ) : (
              <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.7)", fontStyle: "italic", textAlign: "left" }}>
                Click on any highlighted zone on the field map to see scoring details and objectives.
              </p>
            )}
          </div>
        </div>
      </div>

      <section style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        {/* SCORING SYSTEM */}
        <h2 style={largerSubheadingStyle}>Scoring System</h2>
        <div style={{ overflow: 'hidden', background: 'rgba(255, 140, 66, 0.1)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '3rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgb(255, 138, 66)', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <th style={{ padding: '1rem', fontWeight: 'bold' }}>Scoring Item</th>
                <th style={{ padding: '1rem', fontWeight: 'bold', textAlign: 'right' }}>Points</th>
              </tr>
            </thead>
            <tbody>
              {scoringData.map((row, index) => (
                <tr key={index} style={{ borderBottom: index !== scoringData.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none' }}>
                  <td style={{ padding: '0.8rem 1rem', color: '#ccc' }}>{row.item}</td>
                  <td style={{ padding: '0.8rem 1rem', textAlign: 'right', fontWeight: 'bold' }}>{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TIMELINE PARAGRAPHS */}
        <div style={{ textAlign: 'left' }}>
          <h2 style={largerSubheadingStyle}>Alliance Match Timeline</h2>
          <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '2rem' }}>
            A standard Alliance match lasts 2 minutes. It begins with a 15-second Autonomous Period where robots follow pre-programmed logic to secure the Autonomous Bonus. This is followed by a 1:45 Driver-Controlled period. Alliances typically spend the first minute &quot;starving&quot; the field of blocks by hoarding them, before spending the final 45 seconds aggressively vying for control of the Center and Long Goals.
          </p>

          <h2 style={largerSubheadingStyle}>Driving Skills Timeline</h2>
          <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '2rem' }}>
            The Driving Skills challenge is a 60-second sprint. Without an autonomous phase or partners, the driver must execute a highly optimized &quot;route&quot;. The most successful runs involve clearing the Loader quickly and focusing on the high-value Upper Center Goal in the first 40 seconds, leaving the final 20 seconds for a guaranteed double-park or filling the Long Goals.
          </p>

          <h2 style={largerSubheadingStyle}>Autonomous Skills Timeline</h2>
          <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '2rem' }}>
            Autonomous Skills runs for 60 seconds and is the ultimate test of sensor integration. Most elite programs split the timeline into segments: the first 20 seconds are dedicated to reliable block intake and positioning, the middle 30 seconds to precision scoring in Controlled Zones, and the final 10 seconds to navigation towards the Parking Zone to maximize end-game multipliers.
          </p>
        </div>

        {/* KEY RULES TABLE */}
        <h2 style={largerSubheadingStyle}>Key Game Rules</h2>
        <div style={{ overflow: 'hidden', background: 'rgba(230, 115, 0, 0.1)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '3rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgb(230, 115, 0)', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <th style={{ padding: '1rem', fontWeight: 'bold' }}>Rule #</th>
                <th style={{ padding: '1rem', fontWeight: 'bold' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {keyRules.map((row, index) => (
                <tr key={index} style={{ borderBottom: index !== keyRules.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: 'bold', color: 'white' }}>{row.rule}</td>
                  <td style={{ padding: '0.8rem 1rem', color: 'white' }}>{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ALLIANCE GAMEPLAY SECTION */}
        <div style={{ marginTop: '2.5rem', textAlign: 'left' }}>
          <h2 style={largerSubheadingStyle}>Alliance Gameplay</h2>
          <h3 style={smallerSubheadingStyle}>Alliance Explanation</h3>
          <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '1rem', marginBottom: '2rem' }}>
            Alliances consist of two teams working together to maximize their score through coordinated strategies. Success depends on efficient communication, role specialization, and dominating key field elements like the Center and Long Goals.
          </p>
          <h3 style={smallerSubheadingStyle}>Drive Team Roles</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#ccc', lineHeight: '1.8', fontSize: '1rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '10px' }}>
            • <strong style={{ color: '#ff7300' }}>Driver:</strong> Primary manual control and precision movement of the robot.
          </li>
          <li style={{ marginBottom: '10px' }}>
           • <strong style={{ color: '#ff7300' }}>Loader:</strong> Introduces alliance-colored blocks into the field using loader mechanisms.
          </li>
          <li>
          • <strong style={{ color: '#ff7300' }}>Strategist:</strong> Maintains a high-level view and communicates with the alliance partner.
         </li>
         </ul>

          <h2 style={largerSubheadingStyle}>Driver Skills Gameplay</h2>
          <h2 style={smallerSubheadingStyle}>Driver Skills Explanation</h2>
          <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '1rem', marginBottom: '2rem' }}>
            Driver Skills is a one-minute challenge where a single team attempts to score as many points as possible. Without a partner or opponents, the focus shifts to pure mechanical efficiency and driving precision, often prioritizing high-yield zones like the Upper Center Goal and reliable end-game parking.
          </p>

          <h2 style={largerSubheadingStyle}>Autonomous Skills Gameplay</h2>
          <h2 style={smallerSubheadingStyle}>Autonomous Skills Explanation</h2>
          <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '1rem', marginBottom: '-2rem' }}>
            Autonomous Skills consists of a 60-second period where the robot operates entirely without human interference. This mode tests the team&apos;s programming skill, sensor reliability, and pathfinding logic as the robot must identify blocks and navigate scoring zones independently.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={largerSubheadingStyle}>Useful Links</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {generalLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 2rem', background: 'rgba(255, 140, 66, 0.4)', borderRadius: '16px', textDecoration: 'none', color: 'white', border: '1px solid rgba(255, 255, 255, 0.1)', transition: 'all 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#ff8c42'; e.currentTarget.style.border = '1px solid #ff8c42'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 140, 66, 0.4)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{link.title}</span>
              <ExternalLink size={20} opacity={0.7} />
            </a>
          ))}
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

          <Link href="/Herobot" style={navButtonStyle}
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