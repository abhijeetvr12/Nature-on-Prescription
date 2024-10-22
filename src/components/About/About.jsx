import React from 'react';
import Navbar from '../Navbar'; // Make sure to import your Navbar component
import aboutImage from '../../image/about-pic.webp'; // Path to your large photo
import Footer from '../Footer/Footer';

const AboutPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto my-10 p-4">
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-lg p-6">
          
          {/* Text Section on the left */}
          <div className="md:w-2/3 md:pr-8">
            <h1 className="text-3xl font-bold text-green-700 mb-4">
              About Nature on Prescription
            </h1>
            <p className="text-gray-700 mt-4">
              At Nature on Prescription, we are dedicated to providing holistic healing through our comprehensive naturopathy teleclinic services. Whether you seek support for chronic conditions, stress management, or general health optimization, we offer personalized care plans tailored to your unique needs. We aim to support your journey to optimal health and well-being by addressing the root causes of your health.
            </p>
            <p className="text-gray-700 mt-4">
              By combining traditional healing methods with modern technology, we offer a comprehensive range of services designed to meet the unique needs of each individual. We take the time to understand your medical history, lifestyle, and health objectives.
            </p>
            <p className="text-gray-700 mt-4">
              We offer a wide array of services, including nutritional counselling, herbal medicine, lifestyle coaching, stress management, detoxification programs, and much more. Our virtual platform allows you to access these services from the comfort of your home, ensuring that you receive the care you need without the hassle of travel or time constraints.
            </p>
            <p className="text-gray-700 mt-4">
              Our nutritional counselling services are designed to help you understand the profound impact that food has on your health. Our experts work with you to develop customized dietary plans that support your specific health needs, promote energy and vitality, and prevent disease. We emphasize the use of whole, organic foods and provide guidance on how to make sustainable, healthy choices.
            </p>
            <p className="text-gray-700 mt-4">
              Lifestyle coaching is integral to our holistic approach. We recognize that true health encompasses not only the physical body but also the mind and spirit. We provide tools and techniques to help you achieve mental clarity, emotional stability, and spiritual growth.
            </p>
            <p className="text-gray-700 mt-4">
              Detoxification is another key component of our naturopathic services. We offer safe and effective detox programs that help eliminate toxins from your body, boost your immune system, and enhance your energy levels.
            </p>
            <p className="text-gray-700 mt-4">
              We are proud to serve a diverse community of individuals who are committed to taking charge of their health and well-being. Our patients come from all walks of life, and we are honoured to be a part of their health journeys. We strive to create a supportive and empowering environment where you feel heard, respected, and cared for.
            </p>
            <p className="text-gray-700 mt-4">
              At Nature on Prescription, we are more than just a healthcare provider – we are your partners in health. We are dedicated to helping you achieve your health goals and live your best life. Our holistic approach, personalized care, and virtual platform set us apart and ensure that you receive the highest quality of naturopathic care.
            </p>
            <p className="text-gray-700 mt-4 text-center font-bold">
              Thank you for choosing Nature on Prescription.
            </p>
            <p className="text-gray-700 mt-4 text-center font-bold">
              Embrace the journey to a healthier, more vibrant you with the convenience and accessibility of our virtual consultations, designed to nurture your body, mind, and spirit.
            </p>
          </div>

          {/* Image Section on the right */}
          <div className="md:w-1/3 mt-6 md:mt-0">
            <img
              src={aboutImage}
              alt="Nature on Prescription"
              className="rounded-full shadow-lg w-full h-auto md:w-2/3"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;
