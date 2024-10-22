import React,{ useState } from 'react';
import Navbar from '../Navbar'; // Ensure you have the Navbar component
import Footer from '../Footer/Footer';

const DiseasesPage = () => {
  const diseases = [
    {
      name: "Diabetes Type-1 and Type-2",
      description: `Diabetes is a disorder in which the body either cannot properly use the insulin it does produce, or cannot produce enough of it. Symptoms include frequent urination, increased thirst, increased hunger, unexplained weight loss, fatigue, and more.`,
      symptoms: [
        "Frequent Urination (Polyuria)",
        "Increased Thirst (Polydipsia)",
        "Increased Hunger (Polyphagia)",
        "Unexplained Weight Loss",
        "Fatigue",
        "Blurred Vision",
        "Slow-Healing Sores",
        "Tingling or Numbness in Hands or Feet (Peripheral Neuropathy)",
        "Dry Itchy Skin",
        "Dark Patches of Skin (Acanthosis Nigricans)"
      ]
    },
    {
      name: "Gallbladder Stone",
      description: `Gallstones are solidified deposits of digestive juice that can develop in the tiny organ called the gallbladder. Symptoms include intense pain in the upper right abdomen, nausea, vomiting, jaundice, and more.`,
      symptoms: [
        "Sudden and intense pain in the upper right abdomen",
        "Pain between the shoulder blades or in the right shoulder",
        "Nausea or vomiting",
        "Indigestion, bloating, and gas",
        "Jaundice if the bile duct is blocked"
      ]
    },
    {
      name: "Joint Pain, Arthritis and Osteoarthritis",
      description: `Joint pain refers to discomfort or soreness in any joint of the body. Arthritis is inflammation in the joints. Symptoms include pain, stiffness, swelling, and loss of flexibility.`,
      symptoms: [
        "Pain",
        "Stiffness",
        "Swelling",
        "Loss of flexibility",
        "Grating sensation"
      ]
    },
    {
      name: "Liver Disease",
      description: `Liver disease refers to any ailment that causes inflammation or damage to the liver. It can range from hepatitis to cirrhosis and liver cancer. Symptoms include dark urine, jaundice, nausea, and more.`,
      symptoms: [
        "Dark urine",
        "Nausea and vomiting",
        "Loss of appetite",
        "Jaundice",
        "Fatigue",
        "Itchy skin",
        "Abdominal pain"
      ]
    },
    {
      name: "Infertility",
      description: `The failure to become pregnant following a year of consistent, unprotected sexual activity is known as infertility. This period is shortened to six months for women who are over 35. Men and women can experience infertility, which can be caused by a variety of reasons such as environmental, lifestyle, and medical problems.`,
      symptoms: [
        "Irregular menstrual cycles",
        "Gaining weight",
        "Hirsutism (excessive hair growth)",
        "Greasy skin and acne",
        "Hair loss or thinning"
      ]
    },
    {
      name: "PCOD/PCOS",
      description: `PCOD is a disorder in which the ovaries produce large numbers of partly or underdeveloped eggs, which may turn into cysts over time. PCOS is a more complex endocrine condition characterized by hormonal abnormalities and can lead to infertility.`,
      symptoms: [
        "Irregular menstruation",
        "Excessive facial and body hair growth (hirsutism)",
        "Greasy skin and acne",
        "Hair loss or thinning",
        "Weight gain or difficulty losing weight",
        "Skin darkening, especially under the breasts, groin, and neck (acanthosis nigricans)",
        "Skin tags",
        "Inability to conceive",
        "Depression and mood fluctuations"
      ]
    },
    {
      name: "Heart Disease",
      description: `Heart disease includes any disorders affecting the anatomy and function of the heart. This can encompass congenital deformities, coronary artery disease, and other conditions affecting heart function.`,
      symptoms: [
        "Chest pain or discomfort",
        "Shortness of breath",
        "Nausea or vomiting",
        "Sweating",
        "Lightheadedness or dizziness"
      ]
    },
    {
      name: "High Blood Pressure (Hypertension)",
      description: `High blood pressure is a condition where the force of the blood against the artery walls is too high. It can lead to severe health complications if left untreated.`,
      symptoms: [
        "Headaches",
        "Shortness of breath",
        "Nosebleeds",
        "Flushing",
        "Dizziness",
        "Chest pain",
        "Visual changes"
      ]
    },
    {
      name: "Thyroid Disease",
      description: `Thyroid disease refers to disorders affecting the thyroid gland, which controls metabolism and energy levels. Common types include hypothyroidism and hyperthyroidism.`,
      symptoms: [
        "Fatigue",
        "Weight gain or loss",
        "Cold or heat intolerance",
        "Dry skin",
        "Hair loss",
        "Constipation or diarrhea",
        "Rapid heart rate or slow heart rate"
      ]
    },
    {
      name: "Obesity",
      description: `Obesity is a medical condition characterized by excessive body fat accumulation, often assessed using Body Mass Index (BMI). It poses various health risks.`,
      symptoms: [
        "Shortness of breath",
        "Increased sweating",
        "Snoring and sleep apnea",
        "Joint and back pain",
        "Fatigue",
        "Skin problems like acanthosis nigricans"
      ]
    },
    {
      name: "Skin Diseases",
      description: `Skin diseases encompass a wide range of conditions affecting the skin, ranging from minor issues to chronic diseases.`,
      symptoms: [
        "Eczema",
        "Psoriasis",
        "Acne",
        "Rosacea",
        "Contact dermatitis",
        "Vitiligo",
        "Melanoma"
      ]
    },
    {
      name: "Kidney Disease",
      description: `Kidney disease refers to conditions affecting the kidneys, impacting their ability to filter waste. It can be acute or chronic, ranging from mild dysfunction to kidney failure.`,
      symptoms: [
        "Fatigue and weakness",
        "Swelling (edema) in legs, ankles, or face",
        "Shortness of breath",
        "Nausea and vomiting",
        "Changes in urine output",
        "Persistent itching"
      ]
    },
    // Add more disease cards here
  ];
  const [visibleSymptoms, setVisibleSymptoms] = useState({});

  const toggleSymptoms = (index) => {
    setVisibleSymptoms(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
<div className="bg-gray-100">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto my-10 p-4">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-8">Diseases and Conditions</h1>

        {/* Disease Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diseases.map((disease, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-green-700 mb-4">{disease.name}</h2>
              <p className="text-gray-700 mb-4">{disease.description}</p>
              <button
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                onClick={() => toggleSymptoms(index)}
              >
                {visibleSymptoms[index] ? "Hide Symptoms" : "Show Symptoms"}
              </button>
              {visibleSymptoms[index] && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-green-700">Symptoms:</h3>
                  <ul className="list-disc list-inside">
                    {disease.symptoms.map((symptom, idx) => (
                      <li key={idx} className="text-gray-700">{symptom}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DiseasesPage;
