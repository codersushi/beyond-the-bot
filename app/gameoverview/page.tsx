'use client';
import { Rubik } from "next/font/google";
import { useState } from "react";

const rubik = Rubik({ subsets: ['latin'], style: ['italic', 'normal'] });

type FieldObject = {
  id: string; 
  title: string; 
  description: string; 
  x: string;   // Percentage from left
  y: string;   // Percentage from top
  w: string;   // Width of hitbox
  h: string;   // Height of hitbox
};

export default function GameOverview() {
  const [selected, setSelected] = useState<FieldObject | null>(null);

  // CONFIGURATION ARRAY: Descriptions expanded and Loader text replaced as requested
  const objects: FieldObject[] = [
    {
      id: "center-goal",
      title: "Center Goal",
      description: "The primary scoring structure of the field. Robots can earn significant points by placing blocks into the multiple tiers. Higher levels grant exponentially more points but require high-level precision and lift stability to reach successfully.",
      x: "31.6%", y: "50%", w: "120px", h: "120px"
    },
    {
      id: "long-goal-left",
      title: "Long Goal (Left)",
      description: "A critical side scoring zone located on the left flank. Alliances that successfully control and saturate these zones with blocks can secure a massive 10-point bonus, often becoming the tie-breaker in high-level matches.",
      x: "31.6%", y: "18%", w: "220px", h: "50px"
    },
    {
      id: "long-goal-right",
      title: "Long Goal (Right)",
      description: "The opposite side scoring zone essential for balanced field control. Strategy often involves splitting alliance duties to ensure this goal remains contested or secured against opposing robot interference.",
      x: "31.6%", y: "82%", w: "220px", h: "50px"
    },
    {
      id: "blue-park-zone",
      title: "Blue Park Zone",
      description: "A dedicated endgame structure for the Blue Alliance. Robots must navigate to and remain on this platform at the end of the match. Successful parking yields 8 points for one robot or a game-changing 30 points if both alliance robots park.",
      x: "54.7%", y: "50.2%", w: "80px", h: "80px"
    },
    {
      id: "red-park-zone",
      title: "Red Park Zone",
      description: "A dedicated endgame structure for the Red Alliance. Much like the blue equivalent, this zone requires precise drive-train control to mount the platform under pressure, rewarding alliances with up to 30 points for a double-park.",
      x: "8.6%", y: "50.2%", w: "80px", h: "80px"
    },
    {
      id: "loader1",
      title: "Loader",
      description: "The loader is a field element that starts the match holding three red and three blue blocks. During the 1:45 driver-controlled period, the loader may place their alliance-colored blocks into the tubes for robots to collect and score.",
      x: "5.5%", y: "82%", w: "30px", h: "30px"
    },
    {
      id: "loader2",
      title: "Loader",
      description: "The loader is a field element that starts the match holding three red and three blue blocks. During the 1:45 driver-controlled period, the loader may place their alliance-colored blocks into the tubes for robots to collect and score.",
      x: "5.5%", y: "18%", w: "30px", h: "30px"
    },
    {
      id: "loader3",
      title: "Loader",
      description: "The loader is a field element that starts the match holding three red and three blue blocks. During the 1:45 driver-controlled period, the loader may place their alliance-colored blocks into the tubes for robots to collect and score.",
      x: "57.6%", y: "18%", w: "30px", h: "30px"
    },
    {
      id: "loader4",
      title: "Loader",
      description: "The loader is a field element that starts the match holding three red and three blue blocks. During the 1:45 driver-controlled period, the loader may place their alliance-colored blocks into the tubes for robots to collect and score.",
      x: "57.6%", y: "82%", w: "30px", h: "30px"
    },
    {
      id: "blocks1",
      title: "Blocks/Octo-Blocks",
      description: "Pre-staged game elements organized in a specific criss-cross pattern. These 2 blue and 2 red blocks are immediate targets during the Autonomous period to gain an early lead and secure the 10-point bonus.",
      x: "22.6%", y: "66%", w: "40px", h: "40px"
    },
    {
      id: "blocks2",
      title: "Blocks/Octo-Blocks",
      description: "Initial field blocks ready for manipulation. Mastering the intake of these specific patterns is key for robots to quickly transition from the starting line to the scoring goals without wasting valuable seconds.",
      x: "22.6%", y: "34%", w: "40px", h: "40px"
    },
    {
      id: "blocks3",
      title: "Blocks/Octo-Blocks",
      description: "Mid-field block clusters. These blocks often become the center of early-game scuffles as both alliances attempt to claim them and deny the opponent easy scoring opportunities.",
      x: "40.6%", y: "66%", w: "40px", h: "40px"
    },
    {
      id: "blocks4",
      title: "Blocks/Octo-Blocks",
      description: "Strategic block groupings. Efficient robots can sweep these up in a single pass, enabling a rapid scoring cycle that puts immense pressure on the opposing alliance's defensive strategy.",
      x: "40.6%", y: "34%", w: "40px", h: "40px"
    }
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
      {/* TITLE */}
      <section style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          GAME ANALYSIS
        </h2>
        <p style={{ color: '#aaa', fontSize: '1.1rem', fontStyle: 'italic' }}>
          Breaking down the 2025–2026 VEX V5 game, <strong>Push Back</strong>!
        </p>
      </section>

      {/* OVERVIEW SECTION */}
      <section style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', fontWeight: 'bold' }}>
          Overview
        </h2>
        <p style={{ lineHeight: '1.7', color: '#ccc', maxWidth: '850px', margin: '0 auto' }}>
          Push Back is a VEX V5 Robotics Competition game where two alliances, each made up of two robots, 
          compete on a shared field to earn points through strategic movement, object manipulation, 
          and field control.
        </p>
      </section>

      {/* WRAPPER CONTAINER */}
      <div
        style={{
          background: "#d37b5a", 
          borderRadius: "30px", 
          border: "2px solid #e89b7d",
          padding: "2rem",
          marginBottom: "4rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "stretch", 
          overflow: "hidden" 
        }}
      >
        <div style={{ display: "flex", alignItems: "stretch", width: "fit-content" }}>
          {/* IMAGE CONTAINER */}
          <div style={{ position: "relative", width: "fit-content" }}>
            <img
              src="/field.png"
              alt="VEX V5 Field"
              style={{
                display: "block",
                width: "1200px",      
                height: "auto",
                objectFit: "contain",
                clipPath: "inset(0% 12% 0% 12%)", 
                marginLeft: "-180px" 
              }}
            />

            {/* MAPPING THE HIGHLIGHTS */}
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
                  transform: "translate(-50%, -50%)",
                  borderRadius: obj.id === "center-goal" ? "20%" : "12px",
                  transition: "all 0.2s ease-in-out",
                  zIndex: 10
                }}
              />
            ))}
          </div>

          {/* INFORMATION BOX */}
          <div
            style={{
              width: "320px", 
              padding: "2.5rem 1.5rem",
              background: "#ff8c42", 
              color: "#ffffff", 
              borderRadius: "20px",
              flexShrink: 0,
              alignSelf: "stretch", 
              margin: "9px 0 9px -360px", 
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
            <h2 style={{ 
              fontSize: "1.6rem", 
              fontWeight: "bold", 
              marginBottom: "1rem", 
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              textTransform: "uppercase" 
            }}>
              {selected?.title || "SELECT A ZONE"}
            </h2>
            
            {/* Conditional Rendering: Inner box only appears when a hitbox is selected */}
            {selected ? (
              <div style={{
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                padding: "1rem",
                background: "rgba(0, 0, 0, 0.05)",
                position: "relative"
              }}>
                {/* Info Icon inside the smaller box */}
                <div style={{ 
                  position: "absolute", 
                  top: "10px", 
                  right: "10px", 
                  fontSize: "1rem", 
                  opacity: 0.8 
                }}>
                  ⓘ
                </div>

                <p style={{ 
                  fontSize: "1.05rem", 
                  color: "rgba(255, 255, 255, 0.85)", // Lighter shade of white
                  lineHeight: "1.6", 
                  fontWeight: "500"
                }}>
                  {selected.description}
                </p>
              </div>
            ) : (
              <p style={{ 
                fontSize: "1.1rem", 
                color: "rgba(255, 255, 255, 0.7)", 
                lineHeight: "1.6", 
                fontWeight: "500",
                fontStyle: "italic"
              }}>
                Click on any highlighted zone on the field map to see scoring details and objectives.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* SCORING SYSTEM */}
      <section style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
          Scoring System
        </h2>
        <ul style={{ color: '#ccc', lineHeight: '2', listStyle: 'none', padding: 0 }}>
          <li>Autonomous Bonus: 10 points</li>
          <li>Each Block Scored: 3 points</li>
          <li>Each Controlled Zone in a Long Goal: 10 points</li>
          <li>Controlled Center Goal (Upper): 8 points</li>
          <li>Controlled Center Goal (Lower): 6 points</li>
          <li>1 Parked Alliance Robot: 8 points</li>
          <li>2 Parked Alliance Robots: 30 points</li>
        </ul>
      </section>
    </main>
  );
}