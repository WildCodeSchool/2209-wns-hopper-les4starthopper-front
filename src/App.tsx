import { useState } from "react";
import "./App.css";
import Form from "./components/forms/Form";

function App() {
  const [signup, setSignup] = useState(false);

  const handleToggleSignup = (toggle: any) => {
    setSignup(toggle);
  };

  return (
    <div>
      <Form
        login={signup === false ? "Connectez vous !" : "Créez votre compte"}
        bouttonLabel={signup === false ? "Connexion" : "Créer le compte"}
        onToggle={handleToggleSignup}
        signup={signup}
      />
    </div>
  );
}

export default App;
