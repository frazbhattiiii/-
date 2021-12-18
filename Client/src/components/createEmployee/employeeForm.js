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
} from './empStyle';

import { Container } from '../../globalStyles';
import empValidation from './empValidation';
import { useHistory } from "react-router-dom";
import  Axios  from 'axios';

const EmployeeForm = () => {
	const history = useHistory();

	
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');

	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [age, setAge] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = empValidation({ name, lastName,  email, password, confirmPass, address, city, age });


		if (resultError !== null) {
			setError(resultError);
			return;
		}
		Axios.post("http://localhost:3001/api/insert/employee",
		{
			first_name:name,
			last_name:lastName,
			address:address,
			city:city,
			email:email,
			password:password,
			age:age
		}).then((response)=>{
			if(response.data==""){
				setName('');
				setLastName('');
				setEmail('');
				setCity('');
				setAge('');
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
		{ label: 'First Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
		{ label: 'Last Name', value: lastName, onChange: (e) => setLastName(e.target.value), type: 'text' },

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
						<FormTitle>Employee Registeration</FormTitle>
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

							<FormButton type="submit" >Create Employee</FormButton>
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

export default EmployeeForm;
