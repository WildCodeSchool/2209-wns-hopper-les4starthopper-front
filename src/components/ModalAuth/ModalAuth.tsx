import React, { useState, ReactNode } from "react";
import "./modalAuth.scss";
import { createUser, signin } from "../../graphql/users.server";
import { useMutation } from "@apollo/client";
import Modal from "../Modal/Modal";

import { useUser } from "../../context/UserContext";

export interface IProps {
  open: boolean;
  onClose: any;
}

export const ModalAuth = ({ open, onClose, ...props }: IProps) => {
  const [authMode, setAuthMode] = useState("signin");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login } = useUser();

  const [handleSigninMutation, { data, loading }] = useMutation(signin, {
    variables: {
      email,
      password,
    },
  });

  // const [handleSignupMutation, { data, loading, error }] =
  //   useMutation(createUser);

  const handleSignin = async () => {
    try {
      const userSigninDatas = await handleSigninMutation();
      if ("signin" in userSigninDatas?.data) {
        setEmail("");
        setPassword("");
        login(userSigninDatas?.data?.signin);
      }
    } catch {}
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signup" ? "signup" : "signin");
  };

  if (!open) return null;
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
              <button onClick={handleSignin}>Connexion</button>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
};
