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
import styles from "./typographyStyle";
import {  Typography } from "@material-ui/core";
import {useHistory} from  "react-router-dom";
import {signupData} from '../../data/signupData';
import { Container } from '../../globalStyles';
import validateForm from './validateForm';
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
let getName='';
let getEmail='';
let getPassword='';
let index;
const Form = () => {

	const[loggedIn, setloggedIn]= useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
	
	
		const resultError = validateForm({  email, password });
		
		if (resultError !== null) {
			setError(resultError);
			return;
		}

		

		getEmail=email;
		getPassword = password;
	

	
	

		setEmail('');
		setPassword('');
		setError(null);
		setSuccess('Please Enter some valid email or password or register for new user');
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

  const routeChange = () =>{ 
	
    let path = `/newHome`; 
    history.push(path);
		
  }
	const check= () =>{
		signupData.map((data,index)=>
		{console.log(email,password);
			if (data.email===email && data.password===password) {
				console.log(true);
				alert("Successfully Logged In ");
				//setloggedIn(true);
				routeChange();
				
				
			}
			else{
				console.log(false);
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

              <FormButton type="submit" onClick= {check}>Signin</FormButton>
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

           

            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                key={index}
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
