import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import AdminForm from '../components/adminSignIn/adminForm'
import Navbar from '../components/Navbar/Navbar';
import Axios from 'axios'
function AdminSignIn() {
	const history = useHistory();

	const routeChange = (path) => {
		history.push(path);

	}
	useEffect(() => {
		Axios.post("http://localhost:3001/api/currentUser")
			.then((response) => {
				console.log(response.data)
				if (response.data[1] == "admin") {
					routeChange("/admin")
				}
				else if (response.data[1] == "employee") {
					routeChange("/employeeSide") //Change it when UI is updated
				}
				else if (response.data[1] == "user") {
					routeChange("/newHome")
				}


			})
	})
	return (
		<div>
			<Navbar />
			<AdminForm />
		</div>
	)
}

export default AdminSignIn
