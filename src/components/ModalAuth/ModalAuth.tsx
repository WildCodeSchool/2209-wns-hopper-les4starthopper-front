import React, { ReactNode } from "react";
import "./modalAuth.scss";
import ReactDOM from "react-dom";
import { createUser } from "../../graphql/createUser";
import { useMutation } from "@apollo/client";

export interface IProps {
	open: boolean;
	children?: ReactNode;
	onClose: any;
}

export const ModalAuth = ({ open, children, onClose }: IProps) => {
	if (!open) return null;

	return ReactDOM.createPortal(
		<>
			<div className='overlay_styles' />

			<div className='modal_styles'>
				{children}
				hello
				<div className='redtest'>
					<div className='modalAuth-component'>
						<div className='modalAuth-body'>
							<div className='modalAuth__title'>Se connecter</div>
              <button onClick={onClose}>Close Modal</button>
							<div className='modalAuth__mode'>
								Pas de compte ? <span>S'inscrire</span>
							</div>
							<div className='modalAuth__input'>
								<div className='modalAuth__signup-input'>
									<label htmlFor='email'>Email</label>
									<input type='email' name='email' />
									<label htmlFor='password'>Mot de passe</label>
									<input type='password' name='password' />
								</div>
								<div className='modalAuth__submit'>
									<button>Se connecter</button>
									<div className='modalAuth__submit__forgotPassword'>
										<a href='test'> Mot de passe oublié ? </a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>,
		document.querySelector("#portal") as Element
	);
};
