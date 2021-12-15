import React, { useState } from 'react';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,
	FormTitle,
} from './registerFormStyles';
import { Container } from '../../globalStyles';
import validateRegisterForm from './validateRegisterForm';
import Axios from 'axios'

const Form = () => {
	const [firstName, setfirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [phone_number, setphone_number] = useState('');
	const [age, setAge] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateRegisterForm({ firstName, lastName, email, password, confirmPass, address, city, phone_number, age });


		if (resultError !== null) {
			setError(resultError);
			setSuccess(null)
			return;
		}
		Axios.post("http://localhost:3001/api/insert/user",
			{
				first_name: firstName,
				last_name: lastName,
				password: password,
				phone_number: phone_number,
				city: city,
				full_address: address,
				email: email,
				age: age
			},
		).then((response)=>{
			console.log(response)
			if(response.data==null){
				setfirstName('');
				setLastName('');
				setEmail('');
				setCity('');
				setAge('');
		
				setphone_number('');
				setPassword('');
				setAddress('');
				setConfirmPass('');
				setError(null);
				setSuccess('Application was submitted!');		
			}
			else{
				setSuccess(null)
				setError(response.data.sqlMessage)
			}
		})
		
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'First Name', value: firstName, onChange: (e) => setfirstName(e.target.value), type: 'text' },
		{ label: 'Last Name', value: lastName, onChange: (e) => setLastName(e.target.value), type: 'text' },
		{ label: 'Phone Number', value: phone_number, onChange: (e) => setphone_number(e.target.value), type: 'number' },
		{ label: 'Address', value: address, onChange: (e) => setAddress(e.target.value), type: 'text' },
		{ label: 'Age', value: age, onChange: (e) => setAge(e.target.value), type: 'number' },
		{ label: 'City', value: city, onChange: (e) => setCity(e.target.value), type: 'text' },
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },


		{
			label: 'Password',
			value: password,
			onChange: (e) => setPassword(e.target.value),
			type: 'password',
		},
		{
			label: 'Confirm Password',
			value: confirmPass,
			onChange: (e) => setConfirmPass(e.target.value),
			type: 'password',
		},
	];
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Register</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
										value={el.value}
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}

							<FormButton type="submit">Register</FormButton>
						</FormWrapper>
						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default Form;
