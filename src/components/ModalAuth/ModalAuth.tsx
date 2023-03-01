import React, { useState, ReactNode } from "react";
import "./modalAuth.scss";
import { createUser } from "../../graphql/users.server";
import { useMutation } from "@apollo/client";
import Modal from "../Modal/Modal";

export interface IProps {
  open: boolean;
  onClose: any;
}

export const ModalAuth = ({ open, onClose, ...props }: IProps) => {
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
    setAuthMode(authMode === "signup" ? "signup" : "signin");
  };

  if (!open) return null;
  if (authMode === "signup") {
    return (
      <>
        <Modal onClose={onClose} open={open}>
          <>
            <div className="modalAuth__title">S'inscrire</div>

            <div className="modalAuth__input">
              <div className="modalAuth__signin-input">
                <label className="modalAuth__label" htmlFor="email">
                  Email
                </label>
                <input
                  disabled={loading}
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label className="modalAuth__label" htmlFor="password">
                  Mot de passe
                </label>
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
              <div className="modalAuth__mode">
                Déjà enregistré ?{" "}
                <span className="modalAuth__span" onClick={changeAuthMode}>
                  Se connecter
                </span>
              </div>
            </div>
          </>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <Modal onClose={onClose} open={open}>
          <>
            <div className="modalAuth__title">Se connecter</div>

            <div className="modalAuth__input">
              <div className="modalAuth__signin-input">
                <label className="modalAuth__label" htmlFor="email">
                  Email
                </label>
                <input
                  disabled={loading}
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label className="modalAuth__label" htmlFor="password">
                  Mot de passe
                </label>
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
                <button onClick={handleSignup}>Connexion</button>
              </div>
            </div>
          </>
        </Modal>
      </>
    );
  }
};
