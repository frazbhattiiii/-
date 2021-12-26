import React, { useEffect } from 'react';
import AdminInterface from '../components/admin/admin';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import 'tachyons'
// Hero Feature Content Carousel

const AdminSide = () => {
	const history = useHistory();

	const routeChange = (path) => {
		history.push(path);

	}
	useEffect(() => {
		Axios.post("http://localhost:3001/api/currentUser")
			.then((response) => {
				console.log(response.data)
				if (response.data[1] == "") {
					routeChange("/admEmp")
				}
				else if (response.data[1] == "employee") {
					routeChange("/employeeSide") //Change it when UI is updated
				}
				else if (response.data[1] == "user") {
					routeChange("/newHome")
				}


			})
	})
	const signOut = (e)=>{
		Axios.post("http://localhost:3001/api/signOut/currentUser")
			.then((response) => {
				console.log(response.data)
				if (response.data) {
					routeChange("/admEmp")
				}
			})
	}
	return (
		<>
			<div className='flex flex-column items-end'>
				<button onClick={signOut} className='mt4 ph3 pv2 grow br3 bg-dark-blue b-dark-blue b white'>Sign Out</button>
			</div>

			<AdminInterface />
		</>
	);
};

export default AdminSide;
