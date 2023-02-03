import React from "react";
import "./App.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import Form from "./components/forms/Form";
import NavBar from "./components/NavBar/NavBar";
import Cities from "./pages/Cities/Cities";
import Contact from "./pages/Contact/Contact";
import Signup from "./pages/Signup";
import Main from "./pages/Main/Main";
import DocData from "./components/Data.json";

import Home from "./components/Home";
import { MainSearchBar } from "./components/SearchBar/MainSearchBar";
import WelcomeTitle from "./components/WelcomeTitle/WelcomeTitle";
import { ModalAuth } from "./components/ModalAuth/ModalAuth";

const client = new ApolloClient({
  uri: "http://localhost:5070",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="mainBox">
        <NavBar />
        <WelcomeTitle />
        <MainSearchBar
          placeholder="Entrez votre requête ici..."
          data={DocData}
        />

        <div className="mainContainer">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Main />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
