//Library Imports
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { UsersContextProvider } from "./context/UsersContext";

//Component Imports
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Faq from "./Pages/Faq.js";
import Portfolio from "./Pages/Portfolio.js";
import Contact from "./Pages/Contact.js";

function App() {
return (
  <div>
      {/* <UsersContextProvider>  */}
        <Router basename="/website/"> 
          <Routes>
            <Route exact path="/website/" element={<Home/>}/>
            <Route path="/website/about" element = {<About/>}/>
            <Route exact path="/website/portfolio" element = {<Portfolio/>}/>
            <Route exact path="/website/faq" element = {<Faq/>}/>
            <Route exact path="/website/contact" element = {<Contact/>}/>
          </Routes>
        </Router>
      {/* </UsersContextProvider> */}
    </div>
);
}

export default App;
