import React from "react";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoDownloadOutline,
} from "react-icons/io5";
import profile from "../images/profile_pic.jpg";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div className="p-6 h-full">
      <div className="content-card relative">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-yellow shadow-lg">
            <img
              src={profile}
              alt="Tushar Jain"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-2xl font-fw-600 text-white-1 mb-2">
            Tushar Jain
          </h1>
          <p className="text-fs-4 text-orange-yellow font-fw-500 mb-3">
            Frontend Developer
          </p>
          <p className="text-fs-5 text-light-gray leading-relaxed">
            Passionate about creating beautiful and functional web experiences
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-fw-600 text-white-1 mb-4 flex items-center">
            <IoMailOutline className="text-orange-yellow mr-2" />
            Contact Information
          </h3>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <IoMailOutline className="text-black text-sm" />
              </div>
              <div>
                <p className="text-fs-7 text-light-gray">Email</p>
                <a
                  href="mailto:tusharjainqwerty@gmail.com"
                  className="text-fs-5 text-white-1 hover:text-orange-yellow transition-colors break-all"
                >
                  tusharjainqwerty@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <IoPhonePortraitOutline className="text-black text-sm" />
              </div>
              <div>
                <p className="text-fs-7 text-light-gray">Phone</p>
                <a
                  href="tel:9306695193"
                  className="text-fs-5 text-white-1 hover:text-orange-yellow transition-colors"
                >
                  9306695193
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <IoCalendarOutline className="text-black text-sm" />
              </div>
              <div>
                <p className="text-fs-7 text-light-gray">Birthday</p>
                <time className="text-fs-5 text-white-1">August 17, 2001</time>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <IoLocationOutline className="text-black text-sm" />
              </div>
              <div>
                <p className="text-fs-7 text-light-gray">Location</p>
                <address className="text-fs-5 text-white-1 not-italic">
                  Bahadurgarh, Haryana, India
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mb-8">
          <h3 className="text-lg font-fw-600 text-white-1 mb-4">Key Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Git",
              "Node.js",
              "AWS",
              "Tailwind",
              "C++",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-orange-yellow/10 text-orange-yellow text-fs-6 rounded-full border border-orange-yellow/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-6">
          <h3 className="text-lg font-fw-600 text-white-1 mb-4">
            Connect With Me
          </h3>
          <div className="flex">
            <Link
              to="https://www.linkedin.com/in/tushar-jain2001/"
              className="w-12 h-12 bg-eerie-black-1 rounded-lg flex items-center justify-center hover:bg-orange-yellow transition-colors group"
            >
              <IoLogoLinkedin className="text-white-1 group-hover:text-black text-xl" />
            </Link>
            <Link
              to="https://github.com/tusharjain2001"
              className="w-12 h-12 bg-eerie-black-1 rounded-lg flex items-center justify-center hover:bg-orange-yellow transition-colors group"
            >
              <IoLogoGithub className="text-white-1 group-hover:text-black text-xl" />
            </Link>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="text-center">
          <a
            href="/Tushar_Jain_Resume.pdf"
            download
            className="w-full inline-block"
          >
            <button className="w-full bg-orange-yellow text-black font-fw-600 py-3 px-6 rounded-lg hover:bg-orange-yellow/90 transition-colors flex items-center justify-center space-x-2">
              <IoDownloadOutline className="text-lg" />
              <span>Download CV</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
