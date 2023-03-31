import React, { useState, useEffect } from "react";
import "./modalAuth.scss";
import { createUser, getMe, signin } from "../../graphql/users.server";
import { useMutation, useQuery } from "@apollo/client";
import Modal from "../Modal/Modal";
import { IUser } from "../../graphql/interfaces/user";

export interface IProps {
  open: boolean;
  onClose: any;
}

export const ModalAuth = ({ open, onClose, ...props }: IProps) => {
  const [authMode, setAuthMode] = useState("signin");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<null | string>(null);
  const [user, setUser] = useState<null | IUser>(null);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [
    handleSignupMutation,
    { data: signupData, loading: signupLoading, error: signupError },
  ] = useMutation(createUser);

  const { data, refetch } = useQuery(getMe);
  console.log("🚀 ~ file: ModalAuth.tsx:27 ~ ModalAuth ~ data:", data);

  useEffect(() => {
    if (data) {
      if (data.getMe) {
        setUser(data.getMe);
      } else {
        setUser(null);
      }
    }
  }, [data]);

  const [handleSigninMutation, { data: signinData, loading, error }] =
    useMutation(signin);

  const handleSignin = async () => {
    try {
      const { data } = await handleSigninMutation({
        variables: {
          email,
          password,
        },
      });
      if (data.signin) {
        localStorage.setItem("token", data.signin);
        setToken(data.signin);
        setEmail("");
        setPassword("");
        setWrongCredentials(false);
      } else {
        setWrongCredentials(true);
      }
    } catch {}
  };

  const infoGetMe = useQuery(getMe, {
    fetchPolicy: "network-only",
  });
  console.log(
    "🚀 ~ file: ModalAuth.tsx:65 ~ ModalAuth ~ infoGetMe:",
    infoGetMe
  );

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
                <button onClick={handleSignin}>Connexion</button>
              </div>
            </div>
          </>
        </Modal>
      </>
    );
  }
};
