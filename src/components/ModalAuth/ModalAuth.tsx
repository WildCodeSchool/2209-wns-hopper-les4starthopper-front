import React, { useState } from "react";
import "./modalAuth.scss";
import { createUser } from "../../graphql/createUser";
import { useMutation } from "@apollo/client";

export const ModalAuth = (props: any) => {
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

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div onClick={props.closeModal} className="modalAuth-component">
        <div className={`modalAuth-body ${props.className}`}>
          <div className="modalAuth__title">Se connecter</div>
          <div className="modalAuth__mode">
            Pas de compte ? <span onClick={changeAuthMode}>S'inscrire</span>
          </div>
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
              <button onClick={handleSignup}>Se connecter</button>
              <div className="modalAuth__submit__forgotPassword">
                <a href="test"> Mot de passe oublié ? </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div onClick={props.closeModal} className="modalAuth-component">
      <div className={`modalAuth-body ${props.className}`}>
        <div className="modalAuth__title">S'inscrire</div>
        <div className="modalAuth__mode">
          Déjà enregistré ? <span onClick={changeAuthMode}>Se connecter</span>
        </div>
        <div className="modalAuth__input">
          <div className="modalAuth__signin-input">
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
            <button onClick={handleSignup}>Créer un compte</button>
          </div>
        </div>
      </div>
    </div>
  );
  // <div>
  // 		{error && (
  // 			<pre style={{ color: "red" }}>
  // 				{JSON.stringify(error, null, 4)}
  // 			</pre>
  // 		)}
  // 	</div>
};
