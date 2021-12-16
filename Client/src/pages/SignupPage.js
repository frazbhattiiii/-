import React,{useEffect} from 'react';
import Form from '../components/Form/Form';
import Navbar from '../components/Navbar/Navbar';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
function SignUp() {
	const history = useHistory();

	const routeChange = () => {

		let path = `/newHome`;
		history.push(path);

	}
	useEffect(() => {
		Axios.post("http://localhost:3001/api/currentUser")
			.then((response) => {
				if (response.data !== "") {
					console.log(response.data)
					routeChange()
				}
			})
	})
	return (
		<>
		<Navbar></Navbar>
			<Form />
		</>
	);
}

export default SignUp;
