import React from 'react';

interface Props {
	name: string;
	label: string;
	placeholder: string;
	onChange: (value: any) => void;
	value: any;
	type?: 'text' | 'email' | 'password' | 'textarea';
	error?: string;
}
const InputField: React.FC<Props> = ({
	name,
	label,
	placeholder,
	onChange,
	value,
	type = 'text',
	error,
}) => {
	const getSharedStyles = () =>
		`border-2 bg-slate-900 w-full ${
			error ? 'border-red' : 'border-slate-800 focus:border-slate-700'
		} flex justify-start items-center rounded-md px-2 outline-none text-white transition-all duration-200 ease-in-out `;
	return (
		<div
			className={`w-full ${
				type === 'textarea' ? 'min-h-[5rem] max-h-[8rem]' : 'h-20'
			} flex flex-col justify-start items-start relative gap-1 `}
		>
			<label className={`text-white`} htmlFor={name}>
				{label}
			</label>
			{type === 'textarea' ? (
				<textarea
					id={name}
					name={name}
					className={`p-2 min-h-[3rem] min-w-[16rem] ${getSharedStyles()}`}
					placeholder={placeholder}
					onChange={onChange}
					value={value || ''}
				/>
			) : (
				<input
					id={name}
					name={name}
					type={type}
					className={`min-w-[16rem] h-12 ${getSharedStyles()} -ms-reveal:invert`}
					placeholder={placeholder}
					onChange={onChange}
					value={value || ''}
				/>
			)}
			<p className="top-full left-2 absolute font-bold text-red text-xs">
				{error}
			</p>
		</div>
	);
};

export default InputField;
