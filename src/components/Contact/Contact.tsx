import React, { useState } from "react";
import "./contact.scss";
import { FormInput } from "../FormInput/FormInput";

type InputName = "username" | "email" | "birthday" | "password" | "confirmPassword"

export interface UserFormState {
	username: string;
	email: string;
	birthday: any;
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
		birthday: "",
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
			label: "Username",
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
			name: "birthday",
			type: "text",
			placeholder: "Birthday",
			label: "Birthday",
		},
		{
			id: 4,
			name: "password",
			type: "password",
			placeholder: "Password",
			label: "Password",
		},
		{
			id: 5,
			name: "confirmPassword",
			type: "password",
			placeholder: "confirmPassword",
			label: "confirmPassword",
		},
	];

	const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	return (
		<div className='contact'>
			<form onSubmit={handlesubmit}>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange}
					/>
				))}

				<button>Submit</button>
			</form>
		</div>
	);
};

export default Contact;
