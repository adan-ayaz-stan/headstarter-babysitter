"use client";

import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import SecondSection from "./_components/SecondSection";
import TeamSection from "./_components/TeamSection";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <HeroSection />
      <SecondSection />
      <TeamSection />
      <div className="w-full py-4 text-center text-border bg-transparent">
        <p>All rights reserved.</p>
      </div>
    </main>
  );
}
