import React from 'react';
import dengueOutbreakImage from '../../image/feaver3.png'; // Replace with correct image path
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
const DengueFeverOutbreaks = () => {
  return (
    <div className="bg-gray-50">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content - Set Width to 2/3 of the display */}
      <div className="container mx-auto my-10 p-6 flex justify-center">
        <div className="w-2/3">
          {/* Large Dengue Outbreak Image with 2/3 Width */}
          <div className="mb-8 flex justify-center">
            <img
              src={dengueOutbreakImage}
              alt="Dengue Fever Outbreak"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Title and Content */}
          <div className="text-gray-800">
            <h1 className="text-4xl font-bold mb-4 text-green-700">
              Dengue Fever Outbreaks: Main Causes and Spread
            </h1>

            <p className="mb-6">
              Dengue fever outbreaks are a major concern in tropical and subtropical regions. Understanding its causes and spread mechanisms can help control and prevent further outbreaks.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">Causes and Sources of Spread</h2>
            <p className="mb-4">
              The dengue virus is transmitted to humans through the bites of infected female mosquitoes, primarily the <strong>Aedes aegypti</strong> mosquito. Other species in the Aedes genus can also act as vectors, though Aedes aegypti remains the main culprit.
            </p>
            <p className="mb-4">
              Dengue can also be spread through infected blood products, organ donation, and in rare cases, from mother to child during pregnancy or childbirth (vertical transmission).
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">How the Dengue Virus Develops Inside the Mosquito</h2>
            <p className="mb-4">
              When a female mosquito bites an infected host, the virus propagates in the cells lining its gut. After a few days, the virus spreads to the mosquito’s salivary glands and is released into its saliva. During the next bite, the mosquito injects infectious saliva into the bloodstream of its victim, spreading the virus.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">Signs and Symptoms of Dengue Fever</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Sudden high fever</li>
              <li>Severe headaches</li>
              <li>Pain behind the eyes</li>
              <li>Intense joint and muscle pain</li>
              <li>Rash appearing 3-4 days after the fever starts</li>
              <li>Swollen glands</li>
              <li>Nausea and vomiting</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 text-green-700">Dengue Risk Factors</h2>
            <p className="mb-4">
              Certain risk factors increase the chances of severe dengue infection, including:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Chronic diseases like asthma, sickle cell anaemia, and diabetes mellitus</li>
              <li>Female sex</li>
              <li>High body mass index (BMI)</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 text-green-700">Mechanism of Dengue Fever Spread</h2>
            <p className="mb-4">
              When a mosquito carrying the dengue virus bites a person, the virus enters the skin along with the mosquito’s saliva. The virus infects skin cells called keratinocytes and immune cells called Langerhans cells. The Langerhans cells move to lymph nodes, where the virus spreads to white blood cells and reproduces as these cells travel throughout the body.
            </p>
            <p className="mb-4">
              In severe infections, the virus can affect many organs, including the liver and bone marrow. Increased capillary permeability can lead to fluid leakage, blood pressure drops, and poor blood supply to vital organs. This, along with a drop in platelet count, increases the risk of bleeding—a serious complication of dengue fever.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">
              Identifying Dengue Fever vs. Typhoid and Malaria
            </h2>
            <p className="mb-4">
              <strong>Dengue:</strong> Severe joint and muscle pain, rash appearing a few days after fever, and swollen glands are common.
            </p>
            <p className="mb-4">
              <strong>Typhoid:</strong> Abdominal discomfort and a characteristic rose-colored rash are hallmarks of typhoid fever.
            </p>
            <p className="mb-4">
              <strong>Malaria:</strong> High-grade fever with chills, weakness, and sugar fluctuations are common malaria symptoms, with an evening rise in temperature.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DengueFeverOutbreaks;
