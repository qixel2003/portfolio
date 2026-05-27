import React from 'react';
import { Navbar, ProfileCard, Header, Projects, Experience, Tools, Contact } from '@/app/components/PortfolioComponents';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-white selection:text-black">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar / Profile Card */}
          <div className="lg:col-span-4 xl:col-span-3">
            <ProfileCard />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-12">
            <Header />
            <Projects />
            <Experience />
            <Tools />
            <div className="h-12" /> {/* Spacer */}
            <Contact />
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-zinc-900 mt-12">
        &copy; {new Date().getFullYear()} Quinzel Pires Monteiro. All rights reserved.
      </footer>
    </div>
  );
}
