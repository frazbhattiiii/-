import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
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
} from './receiveFormStyle';
import { Container } from '../../globalStyles';
import validateReceiveForm from './validateReceiveForm';


const ReceiveForm = () => {
  const history = useHistory();

  const routeChange = () =>{ 
	
    let path = `/newHome`; 
    history.push(path);
  }
	const [name, setName] = useState('');
  const [address, setAddress] = useState('');
 

  const [size, setSize] = useState('');
	const [email, setEmail] = useState('');
	const [demand, setDemand] = useState('');
  const [description, setDescription] = useState('');
  const [comment, setComment] = useState('');

	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateReceiveForm({ name,address, email,size,demand,description});


		if (resultError !== null) {
			setError(resultError);
			return;
		}
		setName('');
		setEmail('');
   
    setDescription('');

      setComment('');
   setSize('');
		setDemand('');
    setAddress('');
		
		setError(null);
		setSuccess('Our Employee will contact you in short span of time');
    alert('Our Employee will contact you within next 48hrs');
    routeChange();
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
	
    { label: 'Receiving address', value: address, onChange: (e) => setAddress(e.target.value), type: 'text' },
  
   
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
    { label: 'Required Size', value: size, onChange: (e) => setSize(e.target.value), type: 'number' }
     ,
		{
			label: 'number of pieces(demand)',
			value: demand,
			onChange: (e) => setDemand(e.target.value),
			type: 'number',
		},
    {
			label: 'Description',
			value: description,
			onChange: (e) => setDescription(e.target.value),
			type: 'text',
		},
    {
			label: 'Comment',
			value: comment,
			onChange: (e) => setComment(e.target.value),
			type: 'text',
		}
	
	];
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Receive</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={`Enter ${el.label.toLocaleLowerCase()}`}
										value={el.value}
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}

							<FormButton type="submit">Receive</FormButton>
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

export default ReceiveForm;
