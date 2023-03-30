import React from "react";
import ReactDOM from "react-dom";

export interface IProps {
	open: boolean;
	onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({onClose, open, children,...props}:IProps) {

	return ReactDOM.createPortal(
		<>
				<div className='overlay_styles' />

				<div className='modalAuth-component'>
					<div className={`modalAuth-body`}>
						<div className='close'>
							<button onClick={onClose}>X</button>
						</div>
            {children}
					</div>
				</div>
			</>,
      document.querySelector("#portal") as Element
	);
}
