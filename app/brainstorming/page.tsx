// app/brainstorming/page.tsx

'use client'; // Include this if you use hooks like useState

import { Rubik } from "next/font/google";
import Link from "next/link";
import { Home } from "lucide-react";

const rubik = Rubik({ subsets: ['latin'] });

export default function BrainstormingPage() {
  return (
    
    <main className={rubik.className} style={{ padding: '2rem', color: 'white' }}>
      <h1>Brainstorming</h1>
      <p>Content goes here...</p>

      {/* Button to go back */}
      <Link href="/" style={{ 
        marginTop: '2rem', 
        display: 'inline-flex', 
        gap: '10px', 
        color: '#ff8c00', 
        border: '1px solid #ff8c00', 
        padding: '10px 20px', 
        borderRadius: '8px',
        textDecoration: 'none'
      }}>
        <Home size={20} />
        Back to Analysis
      </Link>
    </main>
  );
}