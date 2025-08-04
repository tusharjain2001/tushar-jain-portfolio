import React from 'react';

const Navbar = ({ activePage, onPageChange }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-eerie-black-1/95 backdrop-blur-sm border-b border-light-gray-70 sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-xl font-fw-600 text-orange-yellow">
              TJ
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onPageChange(item.id)}
                    className={`
                      relative px-4 py-2 rounded-lg text-fs-5 font-fw-500
                      transition-all duration-300 ease-in-out
                      ${activePage === item.id
                        ? 'text-orange-yellow bg-orange-yellow/10 border border-orange-yellow/20'
                        : 'text-light-gray hover:text-white-1 hover:bg-jet/50'
                      }
                    `}
                  >
                    {item.label}
                    {activePage === item.id && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-yellow rounded-full"></div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 