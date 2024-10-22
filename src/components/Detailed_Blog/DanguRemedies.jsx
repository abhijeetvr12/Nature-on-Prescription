import React from 'react';
import dengueImage from '../../image/dangu.png'; // Replace with correct image path
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
const DanguRemedies = () => {
  return (
    <div className="bg-gray-50">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content - Set Width to 2/3 of the display */}
      <div className="container mx-auto my-10 p-6 flex justify-center">
        <div className="w-2/3">
          {/* Large Dengue Remedies Image with 2/3 Width */}
          <div className="mb-8 flex justify-center">
            <img
              src={dengueImage}
              alt="Dengue Remedies"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Title and Content */}
          <div className="text-gray-800">
            <h1 className="text-4xl font-bold mb-4 text-green-700">
              How Long is the Incubation Period for Dengue?
            </h1>

            <p className="mb-6">
              Dengue fever is divided into three stages: the incubation period, dengue phase, and recovery phase.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">1. Incubation Period</h2>
            <p className="mb-4">
              The incubation period of dengue fever is when the body produces resistance to fight the virus. If the immune system cannot fight off the virus, symptoms appear. This period lasts 4-7 days, and can extend up to 14 days. Dengue fever is often contracted from close relatives who are already in recovery.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">2. Dengue Fever Phase</h2>
            <p className="mb-4">
              After incubation, symptoms resembling the common cold emerge. High fever (39-40°C) persists for several days, accompanied by skin rashes and bleeding under the skin. The most dangerous period is when the fever subsides, as the immune system is weak, and complications may arise.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">3. Recovery Phase</h2>
            <p className="mb-4">
              Patients need to rest and consume adequate nutrients and water. Dengue fever can recur because there are four virus strains (D1, D2, D3, D4). Currently, no specific treatment exists, so keeping the environment mosquito-free is crucial for prevention.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">How is Dengue Managed During Pregnancy?</h2>
            <p className="mb-4">
              Dengue in pregnancy can lead to severe maternal and fetal complications, including prematurity and postpartum hemorrhage. Vector control measures are essential in dengue-prone areas.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">What Are the Remedies?</h2>
            <p className="mb-4">
              <strong>Amrita Satva (Giloy):</strong> Giloy tea helps boost immunity during dengue.
            </p>
            <p className="mb-4">
              <strong>Tulsi Water:</strong> Drinking water boiled with tulsi leaves and black pepper strengthens the immune system.
            </p>
            <p className="mb-4">
              <strong>Papaya Leaves:</strong> Papaya leaf juice increases platelet count, alleviating symptoms like fatigue and nausea.
            </p>
            <p className="mb-4">
              <strong>Goldenseal:</strong> Similar to papaya, Goldenseal helps relieve dengue symptoms.
            </p>
            <p className="mb-4">
              <strong>Vitamin C:</strong> Consuming foods rich in Vitamin C, such as amla, enhances iron absorption and supports recovery.
            </p>
            <p className="mb-4">
              <strong>Punarnava:</strong> Punarnava helps eliminate toxins by facilitating sweating.
            </p>
            <p className="mb-4">
              <strong>Herbal Tea:</strong> Herbal teas from coriander or fenugreek leaves help lower body temperature.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">What to Do If My Fever Doesn’t Get Better?</h2>
            <p className="mb-4">
              If the fever persists, seek medical advice and stay hydrated. Rest is crucial for recovery. If symptoms worsen, consult a healthcare provider immediately.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DanguRemedies;
