import React from 'react';
import Navbar from '../Navbar'; // Ensure you have the Navbar component
import Footer from '../Footer/Footer';

const ContactUs = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar Component */}
      <Navbar />

      <div className="container mx-auto my-10 p-4 flex flex-col md:flex-row">
        {/* Left Half - Address Details and Map */}
        <div className="md:w-1/2 p-4 flex flex-col">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-center text-green-700 mb-8">Contact Us</h1>
            <p className="text-lg">
              <strong>Email id:</strong> natureonprescription@gmail.com
            </p>
            <p className="text-lg">
              <strong>Phone No:</strong> +91-6209155635
            </p>
            <p className="text-lg">
              <strong>Address:</strong> #NW002-0422, S/o-Arjun Prasad Vishwakarma, Mangal Bigha, Nawada, Bihar-805110
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.423160770523!2d85.49871091503358!3d25.332614383974963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845c6d02773d71%3A0x5a575f49c008c139!2sNature%20On%20Prescription!5e0!3m2!1sen!2sin!4v1696548515870!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Half - Enquiry Form */}
        <div className="md:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full mx-auto">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Enquire Now</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name (required)</label>
                <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Phone (required)</label>
                <input type="tel" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Country (required)</label>
                <select required className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                  <option value="">Select an option</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email (required)</label>
                <input type="email" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea className="mt-1 block w-full border border-gray-300 rounded-md p-2" rows="4"></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 text-white font-bold py-2 rounded hover:bg-green-500 transition">
                Send a Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default ContactUs;
