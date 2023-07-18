import React, { useState } from "react";
import "./Contact.scss";
import { FormInput } from "../FormInput/FormInput";

type InputName =
  | "username"
  | "email"
  | "message"
  | "password"
  | "confirmPassword";

export interface UserFormState {
  username: string;
  email: string;
  message: string;
  password: string;
  confirmPassword: string;
}

export interface UserInputs {
  id: number;
  name: InputName;
  type: any;
  placeholder: string;
  label: string;
}

const Contact = () => {
  const [values, setValues] = React.useState<UserFormState>({
    username: "",
    email: "",
    message: "",
    password: "",
    confirmPassword: "",
  });

  console.log(values);

  const inputs: UserInputs[] = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Nom",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "message",
      type: "textarea",
      placeholder: "Ecrivez votre demande ici...",
      label: "Message",
    },
  ];

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="contactContainer">
      <div className="contact">
        <form className="contact__form" onSubmit={handlesubmit}>
          <h1>Contactez-nous</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div className="contact__btn">
            <button className="contact__submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
