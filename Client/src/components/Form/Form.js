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
} from './FormStyles';
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Container } from '../../globalStyles';
import validateForm from './validateForm';
import { Link } from "react-router-dom";
import Axios from 'axios';

const Form = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateForm({ email, password });

		if (resultError !== null) {
			setError(resultError);
			return;
		}
		check()
	};



	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
		{
			label: 'Password',
			value: password,
			onChange: (e) => setPassword(e.target.value),
			type: 'password',
		},

	];
	const history = useHistory();

	const routeChange = () => {

		let path = `/newHome`;
		history.push(path);

	}
	const check = () => {

		Axios.post("http://localhost:3001/api/signIn/user",
			{
				email: email,
				password: password,
			}
		).then((response)=>{
			if(response.data.length===1){
				setEmail('');
				setPassword('');
				//setloggedIn(true);
				routeChange();

			}
			else {
				setError('Please Enter valid email or password');
				return
			}
		})
	}


	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Sign in</FormTitle>
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

							<FormButton type="submit">Signin</FormButton>
							<Typography variant="button" textColor="text" fontWeight="regular">
								Don&apos;t have an account?{" "}
								<Typography
									component={Link}
									to="/register"
									variant="button"
									textColor="info"
									fontWeight="medium"
									textGradient
								>
									Sign up
								</Typography>
							</Typography>


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
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);

};

export default Form;
