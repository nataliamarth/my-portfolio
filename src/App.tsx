import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header   from './components/Header/Header';
import Home     from './components/Home/Home';
import About    from './components/About/About';
import Projects from './components/Projects/Projects';
import VRApp    from './components/VRApp/VRApp';
import Contact  from './components/Contact/Contact';
import Footer   from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/vr-app" element={<VRApp />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/home"     element={<Navigate replace to="/" />} />
          <Route path="*"         element={<Navigate replace to="/" />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;


