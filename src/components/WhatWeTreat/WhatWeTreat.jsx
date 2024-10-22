import React, { useState } from 'react';
import Navbar from '../Navbar';
import kidney from '../../image/kidney.jpg';
import liver from '../../image/liver.jpg';
import cancer from '../../image/cancer.jpg';
import heart from '../../image/heart.jpg';
import thalassemia from '../../image/thalassemia.jpg';
import diabetes from '../../image/diabetes.jpg';
import bloodPressure from '../../image/bloodpressure.jpg';
import thyroid from '../../image/thyroid.jpg';
import Footer from '../Footer/Footer';

const WhatWeTreat = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const treatments = [
    {
      name: "KIDNEY DISEASE",
      image: kidney,
      description: `Kidney is a very important organ in the human body. Without the proper functioning of kidneys, our body is unable to work properly. In view of the changing effects of lifestyle, the problems of kidneys have started flourishing in people more than before. Over the past few years, kidney diseases among people is increasing. If not treated on time, kidney disease can be life-threatening.`
    },
    {
      name: "LIVER DISEASE",
      image: liver,
      description: `Liver problems can be dangerous for health & life. But, it’s not always the medicines and operations that provide relief from all the serious diseases. A little change and a little effort can make a big difference. Nature on prescription is here with a natural, healthy, safe & painless therapy to treat every little problem related to liver health.`
    },
    {
      name: "CANCER",
      image: cancer,
      description: `Cancer is the uncontrolled growth of abnormal cells in the body. Normal cells can develop abnormally due to toxic compounds, radiation, pathogens, and human genetics. Cancer is one of the deathly diseases constantly rising in India. In this disease, abnormal cells can spread throughout the body. Also, this disease can destroy normal body tissues. Cancer symptoms also depend on the stages. At the current time, cancer has become a second-deathly disease that can kill people. Similarly, an unhealthy lifestyle is a major reason behind the cause of cancer.`
    },
    {
      name: "HEART DISEASE",
      image: heart,
      description: `It’s never too late to take your heart health seriously. Simple healthy habits, ayurvedic therapies, and meditation can really work wonders to keep your heart healthy, happy & fit. Let’s have a look at the healthiest, safest, and most effective ways to take care of heart health.`
    },
    {
      name: "THALASSEMIA",
      image: thalassemia,
      description: `Thalassemia is an inherited blood disorder that results in insufficient production of hemoglobin, a vital component of red blood cells. It certainly leads to reduced function and a shorter lifespan of red blood cells, resulting in a shortage of healthy blood cells in the bloodstream. Consequently, there is insufficient delivery of oxygen to the body’s cells, which can cause tiredness, weakness, and shortness of breath. Anemia is a common consequence of thalassemia disease, ranging from mild to severe, with severe cases like organ damage.`
    },
    {
      name: "DIABETES",
      image: diabetes,
      description: `Diabetes is a condition in which your body either doesn’t make sufficient insulin or can’t use the insulin it does make effectively. High blood sugar issues can harm your nerves, eyes, kidneys, liver, and other organs. Nowadays, it is one of the common health issues that is highly spreading in India. And, diabetes can cause life-threatening issues if not controlled. Diabetes is a significant reason for premature illness and deaths in India. For diabetes care, people rely on the modern medical system, and it is real people don’t get proper care; eventually, this problem increases more and more. Also, it starts causing side-effects.`
    },
    {
      name: "BLOOD PRESSURE",
      image: bloodPressure,
      description: `In the current day, blood pressure has become one of the highly-increasing lifestyle diseases in India. A blood pressure problem is a condition in which the long-term force of the blood against your artery walls is high enough that it may lead to various health problems. Cardiac health issues can be caused by blood pressure problems. This concern is determined both by the amount of blood your heart pumps and the amount of resistance to blood flow in your arteries. The more blood your heart pumps and the narrower your arteries, the higher your blood pressure. Blood pressure problems don’t showcase any symptoms. Eventually, if the blood pressure issue is not taken care of then it can cause a heart attack or stroke.`
    },
    {
      name: "THYROID",
      image: thyroid,
      description: `Your thyroid is a small, butterfly-shaped gland in the front of your neck. It makes hormones that control the way the body uses energy. These hormones affect nearly every organ in your body and control many of your body’s most important functions. For example, they affect your breathing, heart rate, weight, digestion, and moods. Thyroid diseases cause your thyroid to make either too much or too little of the hormones. Some of the different thyroid diseases include: Thyroiditis (swelling of the thyroid), Goiter (an enlargement of the thyroid gland), Hyperthyroidism (which happens when your thyroid gland makes more thyroid hormones than your body needs), Hypothyroidism (which happens when your thyroid gland does not make enough thyroid hormones), Thyroid cancer, Thyroid nodules (lumps in the thyroid gland).`
    }
  ];

  const toggleExpand = (index) => {
    if (expandedCardIndex === index) {
      setExpandedCardIndex(null); // Collapse the card if it's already expanded
    } else {
      setExpandedCardIndex(index); // Expand the selected card
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto my-10 p-6">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">What We Treat</h1>

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {treatments.map((treatment, index) => {
            const isExpanded = expandedCardIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 p-4 hover:shadow-lg"
              >
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="h-40 w-full object-cover rounded-lg mb-2" // Adjust image size
                />
                <h2 className="text-lg font-bold text-green-700 mb-2">{treatment.name}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {isExpanded ? treatment.description : treatment.description.slice(0, 100) + '...'}
                </p>
                <button
                  className="mt-2 bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 transition"
                  onClick={() => toggleExpand(index)}
                >
                  {isExpanded ? 'Show Less' : 'Read More'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhatWeTreat;
