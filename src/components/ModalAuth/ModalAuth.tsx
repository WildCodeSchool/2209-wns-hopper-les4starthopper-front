import React, { useState, ReactNode } from "react";
import "./modalAuth.scss";
import ReactDOM from "react-dom";
import { createUser } from "../../graphql/createUser";
import { useMutation } from "@apollo/client";

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
		setAuthMode(authMode === "signin" ? "signup" : "signin");
	};

	if (!open) return null;
	if (authMode === "signin") {
		return ReactDOM.createPortal(
			<>
				<div className='overlay_styles' />

				<div className='modalAuth-component'>
					<div className={`modalAuth-body`}>
						<div className='close'>
							<button onClick={onClose}>X</button>
						</div>
						<div className='modalAuth__title'>S'inscrire</div>

						<div className='modalAuth__input'>
							<div className='modalAuth__signin-input'>
								<label className='modalAuth__label' htmlFor='email'>
									Email
								</label>
								<input
									disabled={loading}
									type='email'
									name='email'
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
								<label
									className='modalAuth__label'
									htmlFor='password'
								>
									Mot de passe
								</label>
								<input
									disabled={loading}
									type='password'
									name='password'
									value={password}
									onChange={(e) => {
										setPassword(e.target.value);
									}}
								/>
							</div>
							<div className='modalAuth__submit'>
								<button onClick={handleSignup}>
									Créer un compte
								</button>
							</div>
							<div className='modalAuth__mode'>
								Déjà enregistré ?{" "}
								<span
									className='modalAuth__span'
									onClick={changeAuthMode}
								>
									Se connecter
								</span>
							</div>
						</div>
					</div>
				</div>
			</>,
			document.querySelector("#portal") as Element
		);
	}

	return ReactDOM.createPortal(
		<>
			<div className='overlay_styles' />

			<div className='modalAuth-component'>
				<div className={`modalAuth-body`}>
					<div className='close'>
						<button onClick={onClose}>X</button>
					</div>
					<div className='modalAuth__title'>Se connecter</div>

					<div className='modalAuth__input'>
						<div className='modalAuth__signin-input'>
							<label className='modalAuth__label' htmlFor='email'>
								Email
							</label>
							<input
								disabled={loading}
								type='email'
								name='email'
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
							<label className='modalAuth__label' htmlFor='password'>
								Mot de passe
							</label>
							<input
								disabled={loading}
								type='password'
								name='password'
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</div>
						<div className='modalAuth__submit'>
							<button onClick={handleSignup}>Créer un compte</button>
						</div>
						<div className='modalAuth__mode'>
							Déjà enregistré ?{" "}
							<span
								className='modalAuth__span'
								onClick={changeAuthMode}
							>
								Se connecter
							</span>
						</div>
					</div>
				</div>
			</div>
		</>,
		document.querySelector("#portal2") as Element
	);
};

// <div className="modalAuth-component">
// <div className={`modalAuth-body`}>
// 	<div className="modalAuth__title">Se connecter</div>
// 	<div className="modalAuth__mode">
// 		Pas de compte ? <span onClick={changeAuthMode}>S'inscrire</span>
// 	</div>
// 	<div className="modalAuth__input">
// 		<div className="modalAuth__signup-input">
// 			<label htmlFor="email">Email</label>
// 			<input
// 				disabled={loading}
// 				type="email"
// 				name="email"
// 				value={email}
// 				onChange={(e) => {
// 					setEmail(e.target.value);
// 				}}
// 			/>
// 			<label htmlFor="password">Mot de passe</label>
// 			<input
// 				disabled={loading}
// 				type="password"
// 				name="password"
// 				value={password}
// 				onChange={(e) => {
// 					setPassword(e.target.value);
// 				}}
// 			/>
// 		</div>
// 		<div className="modalAuth__submit">
// 			<button onClick={handleSignup}>Se connecter</button>
// 			<div className="modalAuth__submit__forgotPassword">
// 				<a href="test"> Mot de passe oublié ? </a>
// 			</div>
// 		</div>
// 	</div>
// </div>
// </div>
