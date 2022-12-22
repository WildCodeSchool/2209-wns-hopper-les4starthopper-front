import { useState } from "react";
import "./App.css";
import Form from "./components/forms/Form";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Cities from "./components/pages/Cities";
import Contact from "./components/pages/Contact";

function App() {

  let component
  switch (window.location.pathname) {
    case '/':
      component = <App />
      break
    case '/cities':
      component = <Cities />
      break
    case '/contact':
      component = <Contact />
      break
  }

  const [signup, setSignup] = useState(false);

  const handleToggleSignup = (toggle: any) => {
    setSignup(toggle);
  };



  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<NavBar />} />
      </Routes> */}
      <NavBar />
      { component }

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
