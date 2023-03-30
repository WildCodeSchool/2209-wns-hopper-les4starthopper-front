import React, { useState } from "react";
import "./Form.scss";
type App = {
  login: string;
  bouttonLabel: string;
  onToggle: Function;
  signup: boolean;
};
function Form({ login, bouttonLabel, onToggle, signup }: App) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [toggleSignup, setToggleSignup] = useState<boolean>(false);

  const handleToggleSignup = () => {
    setToggleSignup(!signup);
    onToggle(!toggleSignup);
  };

  return (
    <div className="container">
      <form className="form">
        <h2>{login}</h2>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className={toggleSignup === false ? "btn" : "btn-signup"}>
          {bouttonLabel}
        </button>
        {toggleSignup === false ? (
          <p onClick={handleToggleSignup}>
            Vous n'avez pas de compte ? cliquez ici !{" "}
          </p>
        ) : null}
      </form>
    </div>
  );
}

export default Form;
