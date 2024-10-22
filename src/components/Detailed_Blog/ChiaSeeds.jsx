import React from 'react';
import chiaSeedsImage from '../../image/chia-seed2.png'; // Replace with correct image path
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
const ChiaSeeds = () => {
  return (
    <div className="bg-gray-50">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content - Set Width to 2/3 of the display */}
      <div className="container mx-auto my-10 p-6 flex justify-center">
        <div className="w-2/3">
          {/* Large Chia Seeds Image with 2/3 Width */}
          <div className="mb-8 flex justify-center">
            <img
              src={chiaSeedsImage}
              alt="Chia Seeds"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Title and Content */}
          <div className="text-gray-800">
            <h1 className="text-4xl font-bold mb-4 text-green-700">
              The Power of Chia Seeds: A Superfood for Your Health
            </h1>

            <p className="mb-6">
              Chia seeds, in actuality, don’t have a very strong flavour. So, they
              can be included in a wide range of foods for a little texture. It
              can absorb 30 times their weight in water and expand up to ten times
              their size when soaked. This regulates body fluid levels and retains
              electrolytes, ensuring hydration and energy during combat.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">Benefits of Chia seeds</h2>
            <p className="mb-4">
              <strong>Obesity or overweight –</strong> Chia seeds have been utilized
              for centuries to alleviate obesity. It is a leading cause of death
              and morbidity worldwide.
            </p>
            <p className="mb-4">
              <strong>Postprandial Hyperglycaemia (PPHG) –</strong> Post-prandial
              hyperglycaemia (PPHG) is a condition when blood sugar levels rise
              after a meal. In this scenario, chia seeds prevent blood sugar rises
              following a meal.
            </p>
            <p className="mb-4">
              <strong>Hypercholesterolemia –</strong> Chia seeds provide
              hypolipidemic characteristics. It helps to manage fat metabolism. It
              also increases the body’s ability to metabolize lipids, lowering
              cholesterol and triglycerides. Chia seeds also contain alpha-linolenic
              acid, which reduces fat and prevents hypercholesterolemia.
            </p>
            <p className="mb-4">
              <strong>Cancer –</strong> Chia seeds can be used to manage cancer. They
              can inhibit the development of cancer cells by causing apoptosis. They
              also have the potential to lower the risk of cancer. It is especially
              effective in the treatment of breast and cervical cancer.
            </p>
            <p className="mb-4">
              The anticancer effect of alpha-linolenic acid found in Chia Seeds on
              nitric oxide release and lipid peroxidation in breast and cervical
              cancer cell lines was explored during research.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">How to eat chia seeds?</h2>
            <p className="mb-4">
              Chia seeds are small in size and have a mild flavour that makes them a
              versatile addition to many meals. People can eat chia seeds as a whole.
              One can make DIY recipes using chia seeds.
            </p>
            <p className="mb-4">
              They can be eaten raw, soaked in juice, or added to oatmeal, pudding,
              smoothies, and baked goods. You can also sprinkle them on top of
              cereal, yogurt, vegetables, or rice dishes. Plus, they work wonders in
              homemade fritters as a binding agent.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">
              Best Season and time of the day for consumption of Chia seeds
            </h2>
            <p className="mb-4">
              Chia seeds are a powerhouse of nutrition that can be especially
              beneficial during the winter months. Consuming chia seeds in the
              morning can help kickstart your metabolism and keep you feeling full
              and energized throughout the day.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">
              How are Chia seeds beneficial in Ayurvedic terms?
            </h2>
            <p className="mb-4">
              As per Ayurveda, chia seeds aid to maintain a variety of ‘doshas’.
              Because to their ‘guru’ character, chia seeds provide a sense of
              satiety and aid in weight management. They protect skin cells from
              harm thanks to their high antioxidant content.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">
              Are chia seeds healthy for babies?
            </h2>
            <p className="mb-4">
              Chia seeds should be introduced as soon as baby is ready to start
              solids, which is generally around 6 months of age. Chia seeds offer
              fibre, fat, and protein. They also offer calcium, iron, plant-based
              omega-3 fatty acids (such as alpha linolenic acid), selenium, and zinc.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-green-700">
              How can we Differentiate Chia seeds and Sabja (Basil) seeds?
            </h2>
            <p className="mb-4">
              <strong>1.</strong> Chia seeds can be consumed raw or soaked while sabja
              (Basil) seeds can be consumed only after soaking.
            </p>
            <p className="mb-4">
              <strong>2.</strong> Sabja seeds are jet black in colour while chia seeds
              are a mixture of black, white and grey in colour.
            </p>
            <p className="mb-4">
              <strong>3.</strong> Sabja seeds are elliptical or round in shape while
              chia seeds are oval.
            </p>
            <p className="mb-4">
              <strong>4.</strong> The size of Chia seeds are bigger compared to sabja
              seeds which are tiny in size.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ChiaSeeds;
