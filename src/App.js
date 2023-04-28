//Library Imports
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

//Component Imports
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Faq from "./Pages/Faq.js";
import Portfolio from "./Pages/Portfolio.js";
import Contact from "./Pages/Contact.js";

function App() {
return (
    <div>
        <Router basename="/"> 
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route exact path="/portfolio" element = {<Portfolio/>}/>
            <Route exact path="/faq" element = {<Faq/>}/>
            <Route exact path="/contact" element = {<Contact/>}/>
          </Routes>
        </Router>
    </div>
);
}

export default App;
