// This component can be a Client Component for form submission handling
'use client';

import { useState } from 'react';

// Page-specific SEO Metadata
// export const metadata = {
//   title: 'Contact Us - Optics Shop | Get in Touch',
//   description: 'Contact Optics Shop for appointments, inquiries, or any questions about our products and services. We are located in Toronto, ON.',
//   keywords: ['contact optics shop', 'eye clinic Toronto', 'book eye exam', 'optics phone number', 'optics email'],
// };

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // In a real application, you would send this data to a backend API.
    // For this example, we'll simulate a successful submission.
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Form data submitted:', formData);
      setSubmitMessage('Your message has been sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Get in Touch</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Have a question, need to book an appointment, or just want to say hello?
            Fill out the form below or use our contact details to reach us directly.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 8a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm1 5a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
              </svg>
              <strong>Address:</strong> 123 Main Street, Toronto, ON M1M 1M1, Canada
            </p>
            <p className="flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.928 2.928A3 3 0 014.243 2h11.514a3 3 0 011.315.395l1.096 1.096A3 3 0 0118 4.243V15.5a3 3 0 01-.395 1.315l-1.096 1.096A3 3 0 0115.5 18H4.243a3 3 0 01-1.315-.395L.832 16.591A3 3 0 012 15.5V4.243a3 3 0 01.928-1.315zM4 6a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1H4z" clipRule="evenodd"></path>
              </svg>
              <strong>Phone:</strong> (416) 123-4567
            </p>
            <p className="flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.243 5.757a1 1 0 00-1.414 0L10 8.586 7.172 5.757a1 1 0 00-1.414 1.414L8.586 10l-2.829 2.828a1 1 0 001.414 1.414L10 11.414l2.828 2.829a1 1 0 001.414-1.414L11.414 10l2.829-2.828a1 1 0 000-1.415zM10 2a8 8 0 100 16 8 8 0 000-16z" clipRule="evenodd"></path>
              </svg>
              <strong>Email:</strong> info@opticsshop.com
            </p>
            <p className="flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8a1 1 0 11-2 0 1 1 0 012 0zM10 9a1 1 0 100-2 1 1 0 000 2zm1 0a1 1 0 100-2 1 1 0 000 2zM10 15a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path>
              </svg>
              <strong>Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-lg transition duration-300 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 shadow-md'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitMessage && (
            <p className={`mt-4 text-center ${submitMessage.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>

      {/* Google Maps Embed (Replace with your actual map embed) */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Find Us on the Map</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.584795325881!2d-79.38720198453472!3d43.65322587912061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d164f0f9%3A0x673a3a7b9c9f2b8f!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}