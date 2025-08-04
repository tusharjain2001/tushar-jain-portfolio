import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ProfileCard from './components/ProfileCard';

function App() {
  const [activePage, setActivePage] = useState('about');

  const pages = {
    about: <About />,
    resume: <Resume />,
    portfolio: <Portfolio />,
    contact: <Contact />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-onyx to-smoky-black">
      <Navbar 
        activePage={activePage} 
        onPageChange={setActivePage}
      />
      
      <main className="flex flex-col lg:flex-row">
        {/* Profile Card - Only show on About page */}
        {activePage === 'about' && (
          <div className="lg:w-80 lg:flex-shrink-0">
            <ProfileCard />
          </div>
        )}
        
        {/* Main Content */}
        <div className="flex-1">
          <div className="p-4 sm:p-6 lg:p-8">
            {pages[activePage]}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App; 