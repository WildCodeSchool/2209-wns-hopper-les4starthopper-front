import React, { useState } from "react";
import "./modalAuth.scss";
import { createUser } from "../../graphql/users.server";
import { useMutation } from "@apollo/client";

export const Modal = ({ isVisible, backDrop }: any) => {
  const [authMode, setAuthMode] = useState("signin");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [handleSignupMutation, { data, loading, error }] =
    useMutation(createUser);

  const handleSignup = async () => {
    try {
      await handleSignupMutation({
        variables: {
          data: { email, password },
        },
      });
      setEmail("");
      setPassword("");
    } catch {}
  };

  const handleVisibility = () => {
    backDrop(!isVisible);
  };

  return (
    // <div className="modalWrapper" onClick={handleVisibility}>
    <div className="modalAuth">
      <div className="modalAuth__title">Sign-In</div>
      <div>Pas de compte ? cliquez ici !</div>
      <div className="modalAuth__input">
        <div className="modalAuth__signup-input">
          <label htmlFor="email">Email</label>
          <input
            disabled={loading}
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            disabled={loading}
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="modalAuth__submit">
          <button onClick={handleSignup}>Valider</button>
          <div className="modalAuth__submit__forgotPassword">
            Forgot <a href="test"> password? </a>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
