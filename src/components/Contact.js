import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoPaperPlane } from 'react-icons/io5';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Check form validation
    const newFormData = { ...formData, [name]: value };
    const isValid = newFormData.fullname.trim() !== '' && 
                   newFormData.email.trim() !== '' && 
                   newFormData.message.trim() !== '';
    setIsFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      // You can add email service integration here
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ fullname: '', email: '', message: '' });
      setIsFormValid(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <header className="mb-8">
        <h2 className="text-3xl font-fw-600 text-white-1 article-title">
          Contact
        </h2>
      </header>

      <section>
        <div className="content-card">
          <h3 className="text-2xl font-fw-600 text-white-1 mb-8">Contact Form</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  required
                  className="form-input w-full"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  required
                  className="form-input w-full"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                required
                rows="6"
                className="form-input w-full resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className="form-btn flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <IoPaperPlane className="text-lg" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact; 