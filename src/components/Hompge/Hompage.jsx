import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar'; // Ensure to import your Navbar component
import profile from '../../image/photo.png';
import signature from '../../image/signature.png';
import axios from 'axios';
import Footer from '../Footer/Footer';
import chiaseed from '../../image/chia-seed.png'
import dangu from '../../image/dangu.png'

const HomePage = () => {
  const [reviews, setReviews] = useState([]); // State to hold reviews
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Function to fetch reviews
  const fetchReviews = async () => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&key=YOUR_API_KEY`);
      const { result } = response.data;
      setReviews(result.reviews || []); // Set reviews from API response
    } catch (err) {
      setError('Failed to fetch reviews.'); // Set error message
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  useEffect(() => {
    fetchReviews(); // Fetch reviews on component mount
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content Section */}
      <div className="container mx-auto flex items-center justify-center h-90 p-4">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
          {/* Image Section */}
          <div className="md:w-1/3">
            <img
              src={profile} // Replace with the actual path to the image
              alt="Nature On Prescription"
              className="w-full rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
            <h1 className="text-green-700 text-2xl font-bold">Nature on Prescription</h1>
            <p className="text-gray-700 mt-2">
              Welcome to nature on prescription, your trusted destination for natural healthcare solutions. 
              At nature on prescription, we believe in the power of holistic healing and the body’s innate ability to restore balance and vitality. 
              We provide personalized care and support to help you achieve optimal health and wellness. 
              With a focus on natural remedies and lifestyle interventions, we strive to address the root cause of your health concerns and empower you to take control of your well-being.
            </p>
            <div className="mt-6">
              <h2 className="text-gray-600 text-lg">Naturopath Ravi Kumar</h2>
              <div className="mt-2">
                <img
                  src={signature} // Replace with the actual path to the signature image
                  alt="Signature"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto p-4">
        <div className="my-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center">About Us</h2>
          <p className="mt-4 text-gray-700">
            At Nature on Prescription, we are committed to providing compassionate care and helping you embark on your journey to better health naturally. 
            Whether you’re seeking relief from chronic health issues, looking to optimize your wellness, or simply interested in preventive care, we’re here to support you every step of the way.
          </p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mt-10">What People Say</h2>
        {loading ? (
          <p className="text-center">Loading reviews...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="mt-4 space-y-4">
            {reviews.map((review) => (
              <div key={review.time} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="font-semibold">{review.author_name}</h3>
                <p className="text-gray-600">{review.text}</p>
                <p className="text-gray-500">{new Date(review.time * 1000).toLocaleDateString()}</p>
                <div className="flex items-center">
                  <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                  <span className="text-gray-500">({review.rating})</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Specialties Section */}
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Specialties</h2>
        <div className="flex flex-wrap justify-center">
          {/* Card 1: Diabetes */}
          <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border">
              <h3 className="text-xl font-bold mb-2">Diabetes Type-1 and Type-2</h3>
              <p className="text-gray-700 mb-4">
                Diabetes is a disorder in which the body either cannot properly use the insulin it does produce...
              </p>
              <a href="/specialities" className="text-green-500 font-semibold">Read More</a>
            </div>
          </div>

          {/* Card 2: Gallbladder Stone */}
          <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border">
              <h3 className="text-xl font-bold mb-2">Gallbladder Stone</h3>
              <p className="text-gray-700 mb-4">
                Gallstones are solidified deposits of digestive juice that can develop in the tiny organ called the gallbladder...
              </p>
              <a href="/specialities" className="text-green-500 font-semibold">Read More</a>
            </div>
          </div>

          {/* Card 3: Liver Disease */}
          <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border">
              <h3 className="text-xl font-bold mb-2">Liver Disease</h3>
              <p className="text-gray-700 mb-4">
                Any ailment that results in the inflammation, injury, or malfunction of the liver is referred to as liver disease...
              </p>
              <a href="/specialities" className="text-green-500 font-semibold">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* News and FAQs Section */}
      <div className="container mx-auto p-4 flex flex-wrap lg:flex-nowrap">
        {/* News Section */}
        <div className="w-full lg:w-2/3 p-4">
          <h2 className="text-2xl font-bold mb-4">News</h2>
          {/* News Item 1 */}
          <div className="flex bg-white shadow-md rounded-lg mb-4 p-4">
            <img
              src={chiaseed} // Replace with the actual image path
              alt="The Power of Chia Seeds"
              className="w-1/3 rounded-md"
            />
            <div className="w-2/3 pl-4">
              <h3 className="text-xl font-semibold">The Power of Chia Seeds: A Superfood for Your Health</h3>
              <p className="text-gray-500 text-sm">August 13, 2024</p>
              <p className="text-gray-700 mt-2">
                Chia seeds, in actuality, don’t have a very strong flavor. So, they can be included in a wide range of foods for a little texture...
              </p>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="flex bg-white shadow-md rounded-lg mb-4 p-4">
            <img
              src= {dangu} // Replace with the actual image path
              alt="Dengue and its Remedies"
              className="w-1/3 rounded-md"
            />
            <div className="w-2/3 pl-4">
              <h3 className="text-xl font-semibold">Dengue and its Remedies</h3>
              <p className="text-gray-500 text-sm">August 13, 2024</p>
              <p className="text-gray-700 mt-2">
                How long is the incubation period for Dengue? Dengue fever is divided into 3 stages: incubation period, dengue phase, and recovery phase...
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="w-full lg:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-4">FAQs</h2>
          <ul className="space-y-4">
            <li>
              <details>
                <summary className="cursor-pointer font-semibold">What is naturopathy?</summary>
                <p className="text-gray-700 mt-2">Naturopathy is a holistic approach to healthcare that uses natural remedies to help the body heal itself.</p>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer font-semibold">How much do consultations and treatments cost?</summary>
                <p className="text-gray-700 mt-2">Consultation costs may vary based on the type of treatment provided. Please contact us for details.</p>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer font-semibold">How long does it take to see results?</summary>
                <p className="text-gray-700 mt-2">Results can vary depending on the individual and the treatment plan. Some may see results in a few weeks.</p>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer font-semibold">What should I expect during my first visit?</summary>
                <p className="text-gray-700 mt-2">During your first visit, a comprehensive health assessment will be conducted to create a personalized treatment plan.</p>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer font-semibold">Can naturopathy be combined with conventional medicine?</summary>
                <p className="text-gray-700 mt-2">Yes, naturopathy can complement conventional treatments, but it's important to consult with both your naturopath and doctor.</p>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer font-semibold">What conditions can naturopathy treat?</summary>
                <p className="text-gray-700 mt-2">Naturopathy can treat a wide range of conditions, including digestive issues, hormonal imbalances, and chronic fatigue.</p>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {/* New Banner Section */}
      <div className="relative h-[400px] flex items-center justify-center bg-cover bg-center p-4" style={{ backgroundImage: "url('/path/to/your/image.png')" }}>
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        <div className="relative z-10 text-black text-center max-w-xl">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Take the first step towards a healthier, happier you with Nature on prescription.
          </h2>
          <p className="mb-6">
            Get started today and experience the transformative power of naturopathy holistic healing.
          </p>
          <a href="/contact-us" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg font-semibold">
            Book Now
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
