import React,{useEffect} from 'react';
import Form from '../components/Form/Form';
import Navbar from '../components/Navbar/Navbar';
import { useHistory } from 'react-router-dom';

function SignUp() {
	const history = useHistory();

	const routeChange = () => {

		let path = `/newHome`;
		history.push(path);

	}
	
	return (
		<>
		<Navbar></Navbar>
			<Form />
		</>
	);
}

export default SignUp;
