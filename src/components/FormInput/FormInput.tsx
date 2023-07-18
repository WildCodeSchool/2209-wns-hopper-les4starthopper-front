import "./formInput.scss";

interface IProps {
  label: string
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
  [key:string] : any
}

export const FormInput: React.FC<IProps> = ({
	label,
	onChange,
	...inputProps
}) => {
	return (
		<div className='formInput'>
			<label>{label}</label>
			<input {...inputProps} onChange={onChange} className="formInput__input" />
		</div>
	);
};
