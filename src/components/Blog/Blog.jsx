import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import chiaSeedsImage from '../../image/chia-seed.png'; // Replace with the correct path
import dengueImage from '../../image/dangu2.png'; // Replace with the correct path
import feaver from '../../image/feaver2.png'; // Replace with the correct path
import Footer from '../Footer/Footer';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Power of Chia Seeds: A Superfood for Your Health",
      image: chiaSeedsImage,
      description: "Chia seeds, in actuality, don’t have a very strong flavour. They can be included in a wide range of foods for a little texture. It can absorb 30 times their weight in water and expand up to ten times their size when soaked.",
      link: "/blog/chia-seeds", // Link to detailed page
      date: "August 13, 2024" // Add date property
    },
    {
      title: "Dengue and its Remedies",
      image: dengueImage, // Add a valid image path
      description: "Dengue fever is divided into 3 stages: incubation period, dengue phase, and recovery phase. The incubation period is when the body produces resistance to fight the virus entering the body.",
      link: "/blog/dengue-remedies", // Link to detailed page
      date: "August 13, 2024" // Add date property
    },
    {
      title: "Dengue Fever Outbreaks",
      image: feaver, // Add a valid image path
      description: "The dengue virus is transmitted to humans through the bites of infected female mosquitoes, primarily the Aedes aegypti mosquito. It can also be transmitted via infected blood.",
      link: "/blog/dengue-outbreaks", // Link to detailed page
      date: "August 13, 2024" // Add date property
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto my-10 p-6">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">Blogs</h1>

        {/* Blog Cards */}
        <div className="flex flex-col space-y-6">
          {blogPosts.map((post, index) => (
            <Link
              to={post.link}
              key={index}
              className="bg-white rounded-lg shadow-md flex transition-transform transform hover:scale-100 hover:shadow-lg mx-auto w-2/3" // Set width to 2/3
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-64 w-1/2 object-cover rounded-l-lg" // Image size
              />
              <div className="p-4 w-1/2 flex flex-col ">
                <h2 className="text-xl font-bold text-green-700 mb-1">{post.title}</h2> {/* Adjusted margin */}
                <p className="text-gray-500 mb-1">{post.date}</p> {/* Adjusted margin */}
                <p className="text-gray-700 leading-relaxed">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
