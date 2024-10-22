import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from './components/About/About';
import HomePage from './components/Hompge/Hompage';
import Specialities from './components/Spacalities/Spacalities';
import WhatWeTreat from './components/WhatWeTreat/WhatWeTreat';
import ContactUs from './components/ContactUs/Contactus';
import Blog from './components/Blog/Blog';
import ChiaSeeds from './components/Detailed_Blog/ChiaSeeds';
import DanguRemedies from './components/Detailed_Blog/DanguRemedies';
import DengueFeverOutbreaks from './components/Detailed_Blog/DengueFeverOutbreaks';
function App() {
  return (
    <Router>
      <Routes>
        {/* Use element prop instead of component */}
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route path="/what-we-treat" element={<WhatWeTreat />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/chia-seeds' element={<ChiaSeeds/>}/>
        <Route path='/blog/dengue-remedies' element={<DanguRemedies/>}/>
        <Route path='/blog/dengue-outbreaks' element={<DengueFeverOutbreaks/>}/>
    
      </Routes>
    </Router>
  );
}

export default App;
