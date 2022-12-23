import React, { useState } from "react";
import "./App.css";
import {Route , Routes} from "react-router-dom"
// import Form from "./components/forms/Form";
import Home from "./components/Home"



function App() {
  // const [signup, setSignup] = useState(false);

  // const handleToggleSignup = (toggle: any) => {
  //   setSignup(toggle);
  // };

  return (
    
    <div>
      <Routes>
        <Route path="/home" element={<Home/>} />

        <Route/>
      </Routes>
      {/* <Form
        login={signup === false ? "Connectez vous !" : "Créez votre compte"}
        bouttonLabel={signup === false ? "Connexion" : "Créer le compte"}
        onToggle={handleToggleSignup}
        signup={signup}
      />*/}
    </div> 
    
  );
}

export default App;
