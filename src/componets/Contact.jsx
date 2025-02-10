import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Form submitted:', formData);

      setFormData({ name: '', email: '', message: '' });

      setStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 text-white">
      
      {/* Full-width white horizontal line at the beginning */}
      <hr className="border-t-2 border-white w-full mb-6" />

      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <span>Please fill out the form below to get in touch with me.</span>

      {/* Form Container with adjusted width */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg"
        style={{ width: '12cm' }}  // Set the width to approximately 12cm
      >
        <h2 className="text-xl font-semibold text-center text-blue-500 mb-4">Send Your Message</h2>

        <div>
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"  // Input text color to black
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"  // Input text color to black
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            rows="5"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"  // Input text color to black
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>

        {status && (
          <div className={`mt-4 text-center ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
            {status === 'success' ? 'Your message has been sent!' : 'Something went wrong, please try again.'}
          </div>
        )}
      </form>

      {/* Full-width white horizontal line at the end */}
      <hr className="border-t-2 border-white w-full mt-6" />
    </div>
  );
};

export default ContactForm;
