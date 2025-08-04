import React from 'react';
import { motion } from 'framer-motion';
import iconone from '../images/icon-design.svg';
import icononee from '../images/icon-dev.svg';

const About = () => {
  const services = [
    {
      icon: iconone,
      title: 'Web design',
      description: 'The most modern and high-quality design made at a professional level.'
    },
    {
      icon: icononee,
      title: 'Web development',
      description: 'High-quality development of sites at the professional level.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <header className="mb-8">
        <h2 className="text-3xl font-fw-600 text-white-1 article-title">
          About me
        </h2>
      </header>

      <section className="mb-12">
        <div className="content-card relative">
          <p className="text-fs-4 text-light-gray mb-6 leading-relaxed">
            Hi, I'm Tushar Jain, a passionate frontend developer with one year of experience as a frontend engineer. I specialize in building dynamic and responsive web applications using modern technologies. My expertise includes React, JavaScript, HTML, CSS, Git, Netlify, Vercel, and AWS. I focus on creating seamless, user-friendly interfaces that deliver a great user experience across all devices.
          </p>

          <p className="text-fs-4 text-light-gray leading-relaxed">
            I love turning complex problems into simple, elegant solutions through clean, efficient code. I'm always eager to learn new technologies and stay updated with the latest trends in web development to continuously improve my work. In addition to my technical skills, I value collaboration and creativity, and I'm always looking for new opportunities to grow professionally. Whether it's an internship or a full-time role, I'm excited about working on innovative projects that push my skills to the next level.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-fw-600 text-white-1 mb-8">What i'm doing</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="content-card relative group hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-8 h-8"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-fw-600 text-white-1 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-fs-5 text-light-gray leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="mt-12">
        <h3 className="text-2xl font-fw-600 text-white-1 mb-8">Why Choose Me</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-6 bg-eerie-black-1 rounded-xl border border-light-gray-70 hover:border-orange-yellow/50 transition-colors"
          >
            <div className="w-16 h-16 bg-orange-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-fw-600 text-orange-yellow">1+</span>
            </div>
            <h4 className="text-lg font-fw-600 text-white-1 mb-2">Years Experience</h4>
            <p className="text-fs-5 text-light-gray">Professional experience in web development</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-6 bg-eerie-black-1 rounded-xl border border-light-gray-70 hover:border-orange-yellow/50 transition-colors"
          >
            <div className="w-16 h-16 bg-orange-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-fw-600 text-orange-yellow">10+</span>
            </div>
            <h4 className="text-lg font-fw-600 text-white-1 mb-2">Projects Completed</h4>
            <p className="text-fs-5 text-light-gray">Successfully delivered projects</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-6 bg-eerie-black-1 rounded-xl border border-light-gray-70 hover:border-orange-yellow/50 transition-colors"
          >
            <div className="w-16 h-16 bg-orange-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-fw-600 text-orange-yellow">8+</span>
            </div>
            <h4 className="text-lg font-fw-600 text-white-1 mb-2">Technologies</h4>
            <p className="text-fs-5 text-light-gray">Modern tech stack expertise</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About; 