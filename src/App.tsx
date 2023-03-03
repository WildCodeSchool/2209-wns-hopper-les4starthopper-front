import { useState } from "react";
import "./App.scss";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Cities from "./components/Cities/Cities";
import Contact from "./components/Contact/Contact";
import Main from "./components/Main/Main";
import DocData from "./components/Data.json";

import Home from "./components/Home";
import { MainSearchBar } from "./components/SearchBar/MainSearchBar";
import WelcomeTitle from "./components/WelcomeTitle/WelcomeTitle";
import { ModalAuth } from "./components/ModalAuth/ModalAuth";
import Signup from "./components/Signup";
import Layout from "./components/layout/Layout";

const httpLink = createHttpLink({
  uri: "http://localhost:5070",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg0MiwidXNlclJvbGUiOjEsImlhdCI6MTY3NzgzMzYxMiwiZXhwIjoxNjc3ODQwODEyfQ.sKl4QiNbuCiVVzkEVQA6fwrbaYlEixvEpH3e51WGooY"
  );
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <div className="mainBox">
        <NavBar />
        <WelcomeTitle />
        <MainSearchBar
          placeholder="Entrez votre requête ici..."
          data={DocData}
        /> */}

      <div className="mainContainer">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Main />} />
          </Route>
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      {/* </div> */}
    </ApolloProvider>
  );
}

export default App;
