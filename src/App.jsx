import React from "react";
import About from './component/Aboutus'
import Navbar from "./component/Navbar";
// import Navbile from "./component/Navbile";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import EligibilityComponent from "./component/Eligibility";
import CButton from "./component/CButton";
import Footerr from "./component/Footer"; 
import { Packages } from "./component/Packages";

const App = () => {
  return (
    <>
      <CButton />
      <div className="bg-[#fffeea]">
        <section>
          <Navbar />
        </section>
        <section className="my-4">
          <Hero />
        </section>
        <section className="my-4">
          <About />
        </section>
        <section className="my-4">
          <Skills />
        </section>
        <section className="my-4">
          <EligibilityComponent />
        </section>
        <section className="my-4">
          <Packages />
        </section>
        <section>
          <Footerr />
        </section>
      </div>
    </>
  );
};

export default App;
