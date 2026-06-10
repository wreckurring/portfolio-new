"use client";
import React, { useState } from 'react';
import { toast, Toaster } from "sonner";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setIsSubmitting(true);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "962d2e01-8818-4697-a565-b04c93e2e946", 
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.fullName}`,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        toast.success("Thank you for contacting me! I'll get back to you soon.");
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className='text-gray-800 bg-white py-16'>
        <div className="site-container">

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">

            {/* --- Left Column: Info --- */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-semibold mb-4 font-crimson text-[#2C2C2C]">
                Contact Me
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out.
              </p>

              {/* ---- Socials ---- */}
              <div>
                <h3 className="text-xl font-medium mb-3">My Socials</h3>
                <div className="flex items-center space-x-5 text-gray-700">

                  {/* GitHub */}
                  <a
                    href="https://github.com/NishantSinghhhhh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group text-gray-800 hover:text-black transition-colors duration-300"
                  >
                    <img src="/socials/github.svg" alt="GitHub" className="w-6 h-6" />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                      bg-[#2C2C2C] text-white text-xs px-2 py-1 rounded opacity-0 
                      group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      GitHub — Nishant Singh
                    </span>
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://x.com/Nishant37315718"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group text-gray-800 hover:text-black transition-colors duration-300"
                  >
                    <img src="/socials/twitter.svg" alt="Twitter" className="w-8 h-8" />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                      bg-[#2C2C2C] text-white text-xs px-2 py-1 rounded opacity-0 
                      group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      Twitter — Nishant Singh
                    </span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/nishant-singh-8a5a00282/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group text-gray-800 hover:text-black transition-colors duration-300"
                  >
                    <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                      bg-[#2C2C2C] text-white text-xs px-2 py-1 rounded opacity-0 
                      group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      LinkedIn — Nishant Singh
                    </span>
                  </a>

                  {/* Medium */}
                  <a
                    href="https://medium.com/@prashantnishant80"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group text-gray-800 hover:text-black transition-colors duration-300"
                  >
                    <img src="/socials/medium.svg" alt="Medium" className="w-6 h-6" />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                      bg-[#2C2C2C] text-white text-xs px-2 py-1 rounded opacity-0 
                      group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      Medium — Nishant Singh
                    </span>
                  </a>

                </div>
              </div>
            </div>

            {/* --- Right Column: Form --- */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text"
                      name="fullName"
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="block w-full bg-transparent border-b border-gray-400 py-3 px-2 text-lg focus:outline-none focus:border-black"
                      required
                    />
                  </div>

                  <div>
                    <input 
                      type="text"
                      name="phone"
                      placeholder="Phone No"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="block w-full bg-transparent border-b border-gray-400 py-3 px-2 text-lg focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <input 
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full bg-transparent border-b border-gray-400 py-3 px-2 text-lg focus:outline-none focus:border-black"
                    required
                  />
                </div>

                <div>
                  <textarea 
                    name="message"
                    rows={4}
                    placeholder="Message *"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="block w-full bg-transparent border-b border-gray-400 py-3 px-2 text-lg resize-none focus:outline-none focus:border-black"
                    required
                  ></textarea>
                </div>

                <div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-2 text-lg font-semibold text-[#2C2C2C] 
                    bg-transparent border-2 border-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white 
                    transition-all duration-300 rounded-full disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </section>

        </div>
      </div>
      <Toaster />
    </>
  );
}

export default Contact;
