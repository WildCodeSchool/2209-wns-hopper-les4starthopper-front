import { useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";

import "../assets/styles/Signup.scss";
import { createUser } from "../graphql/users.server";

function Signup() {
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
  console.log("****");
  return (
    <div className="signup-wrapper">
      <div>
        <div className="signup-input">
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
        <div className="signup-submit">
          <button onClick={handleSignup}>Créer un compte</button>
        </div>
      </div>
      <div>
        {error && (
          <pre style={{ color: "red" }}>{JSON.stringify(error, null, 4)}</pre>
        )}
      </div>
    </div>
  );
}

export default Signup;
