import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoEyeOutline, IoChevronDown, IoLinkOutline } from 'react-icons/io5';
import one from "../images/project-1.png";
import two from "../images/project-2.png";
import three from "../images/project-3.jpeg";
import four from "../images/project-4.png";
import five from "../images/project-9.png";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showSelect, setShowSelect] = useState(false);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web development', label: 'Web Development' },
    { id: 'web design', label: 'Web Design' },
    { id: 'applications', label: 'Applications' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Job-Listing Portal',
      category: 'web development',
      image: one,
      technologies: 'HTML, CSS, JavaScript, React, MongoDb, Nodejs, ExpressJs',
      link: 'https://github.com/tusharjain2001/JobListingPortal',
      description: 'A comprehensive job listing platform with advanced filtering and search capabilities.'
    },
    {
      id: 2,
      title: 'Gym Website',
      category: 'web development',
      image: two,
      technologies: 'HTML, CSS, React, JavaScript',
      link: 'https://fitzonebytusharjain.vercel.app/',
      description: 'Modern fitness website with responsive design and interactive features.'
    },
    {
      id: 3,
      title: 'Inventory Management System',
      category: 'web design',
      image: three,
      technologies: 'HTML, CSS, JavaScript',
      link: '#',
      description: 'Efficient inventory tracking system with real-time updates and reporting.'
    },
    {
      id: 4,
      title: 'TextUtils',
      category: 'applications',
      image: four,
      technologies: 'HTML, CSS, JavaScript, React',
      link: 'https://github.com/tusharjain2001/text-utils',
      description: 'Text utility application with various text manipulation tools.'
    },
    {
      id: 5,
      title: 'Resume Builder',
      category: 'web development',
      image: five,
      technologies: 'React, JavaScript, CSS, Vercel',
      link: 'https://resume-builder-git-main-tushar-jains-projects-e9d20105.vercel.app/',
      description: 'Professional resume builder with customizable templates and real-time preview.'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto"
    >
      <header className="mb-12 text-center">
        <h2 className="text-4xl font-fw-600 text-white-1 article-title mb-4">
          Portfolio
        </h2>
        <p className="text-fs-5 text-light-gray max-w-2xl mx-auto">
          Explore my latest projects showcasing modern web development and design solutions
        </p>
      </header>

      <section>
        {/* Filter Buttons - Desktop */}
        <div className="hidden md:flex justify-center mb-12">
          <div className="bg-eerie-black-1 rounded-full p-2 border border-light-gray-70">
            <ul className="flex space-x-2">
              {filters.map((filter) => (
                <li key={filter.id}>
                  <button
                    onClick={() => setActiveFilter(filter.id)}
                    className={`
                      px-6 py-3 rounded-full text-fs-5 font-fw-500 transition-all duration-300
                      ${activeFilter === filter.id
                        ? 'bg-orange-yellow text-black shadow-lg shadow-orange-yellow/25'
                        : 'text-light-gray hover:text-white-1 hover:bg-jet/50'
                      }
                    `}
                  >
                    {filter.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Filter Select - Mobile */}
        <div className="md:hidden mb-8 relative">
          <button
            onClick={() => setShowSelect(!showSelect)}
            className="w-full flex items-center justify-between p-4 bg-eerie-black-1 rounded-xl border border-light-gray-70 shadow-lg"
          >
            <span className="text-fs-5 text-white-1">
              {filters.find(f => f.id === activeFilter)?.label || 'Select category'}
            </span>
            <IoChevronDown className={`text-light-gray transition-transform duration-300 ${showSelect ? 'rotate-180' : ''}`} />
          </button>

          {showSelect && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-eerie-black-1 border border-light-gray-70 rounded-xl shadow-lg z-10"
            >
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setShowSelect(false);
                  }}
                  className="w-full text-left p-4 text-fs-5 text-light-gray hover:text-white-1 hover:bg-jet/50 transition-colors first:rounded-t-xl last:rounded-b-xl"
                >
                  {filter.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-eerie-black-1 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white-1 text-fs-5 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-orange-yellow rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                        {project.link !== '#' ? (
                          <IoLinkOutline className="text-black text-xl" />
                        ) : (
                          <IoEyeOutline className="text-black text-xl" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-fw-600 text-white-1 mb-3 group-hover:text-orange-yellow transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-fs-5 text-light-gray mb-4 line-clamp-2">
                      {project.technologies}
                    </p>
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-orange-yellow text-fs-5 font-fw-500 hover:text-white-1 transition-colors"
                      >
                        <span>View Project</span>
                        <IoLinkOutline className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-light-gray text-lg">No projects found for this category.</p>
          </motion.div>
        )}
      </section>
    </motion.div>
  );
};

export default Portfolio; 