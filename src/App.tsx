import { useState } from "react";
import "./App.css";
// import Form from "./components/forms/Form";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Cities from "./components/pages/Cities";
import Contact from "./components/pages/Contact";
import Main from "./components/pages/Main";

// const [signup, setSignup] = useState(false);

// const handleToggleSignup = (toggle: any) => {
//   setSignup(toggle);
// };
function App() {
	return (
		<div className='mainBox'>
			<NavBar />
			<div className='mainContainer'>		
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/cities' element={<Cities />} />
					<Route path='/contact' element={<Contact />} />
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
