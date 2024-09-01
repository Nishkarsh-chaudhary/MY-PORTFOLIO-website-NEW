// src/Components/ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Container from '../Common/Container';
import contact from "../assets/Videos/contact.mp4"


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm('service_rikib3o', 'template_tvmp9l8', e.target, 'W6MjhgNAltv3__IU2')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          comments: '',
        });
      })
      .catch((error) => {
        console.log(error.text);
        setError(true);
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <Container>
      <div 
      className="container mx-auto px-8 dark:text-white font-poppins"
      id='contact'
      >
        <h1 className="text-4xl lg:text-6xl font-semibold font-Poppins text-center mb-12 dark:text-white pt-10">
          <span>Get In Touch </span> 
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-8 font-poppins">
        {/* Form Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md dark:bg-secondary dark:text-white">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

          <form onSubmit={handleSubmit} className='dark:text-black'>
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2 dark:text-white">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="email" className="block text-lg font-medium mb-2 dark:text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-lg font-medium mb-2 dark:text-white">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="comments" className="block text-lg font-medium mb-2 dark:text-white">Comments</label>
              <textarea
                id="comments"
                name="comments"
                rows="4"
                value={formData.comments}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className={`py-2 px-4 bg-blue rounded-2xl w-full text-2xl font-bold ${sending ? 'bg-gray-500' : 'bg-blue-500'} dark:text-white rounded hover:${sending ? 'bg-gray-600' : 'bg-blue-600'}`}
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send'}
            </button>
          </form>
          {success && <p className="text-green-500 mt-4">Your message was sent successfully!</p>}
          {error && <p className="text-red-500 mt-4">There was an error sending your message. Please try again.</p>}
        </div>

    {/* image section */}

        <div className="flex-1">
          <a
            href="https://www.linkedin.com/in/nishkarsh-chaudhary-a08967225/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <video
                autoPlay
                loop
                muted
                preload="auto"
              className= "sm:hidden lg:block w-full h-full object-cover rounded-lg shadow-md "
              style={{ border: 0 }}
            >
              <source src={contact} type="video/mp4" /> 
              Your browser does not support the video tag.
            </video>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
