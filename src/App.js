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
        <Router> 
          <Routes>
            <Route exact path="/Website" element={<Home/>}/>
            <Route path="/Website/about" element = {<About/>}/>
            <Route exact path="/Website/portfolio" element = {<Portfolio/>}/>
            <Route exact path="/Website/faq" element = {<Faq/>}/>
            <Route exact path="/Website/contact" element = {<Contact/>}/>
          </Routes>
        </Router>
      {/* </UsersContextProvider> */}
    </div>
);
}

export default App;
