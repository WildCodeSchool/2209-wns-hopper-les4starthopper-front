import React, { useState } from "react";
import "./App.css";
import {Route , Routes} from "react-router-dom"
import Form from "./components/forms/Form";
import NavBar from "./components/NavBar/NavBar";
import Cities from "./components/pages/Cities";
import Contact from "./components/pages/Contact";
import Main from "./components/pages/Main";

import Home from "./components/Home"



function App() {
  const [signup, setSignup] = useState(false);

  const handleToggleSignup = (toggle: any) => {
    setSignup(toggle);
  };

  return (
<div className='mainBox'>
    <NavBar />
    <div className='mainContainer'>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path='/' element={<Main />} />
					<Route path='/cities' element={<Cities />} />
					<Route path='/contact' element={<Contact />} />
        <Route/>
      </Routes>
      </div>
      {/* <Form
        login={signup === false ? "Connectez vous !" : "Créez votre compte"}
        bouttonLabel={signup === false ? "Connexion" : "Créer le compte"}
        onToggle={handleToggleSignup}
        signup={signup}
      /> */}
    </div>
  );
}

export default App;
