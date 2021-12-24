import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Axios from 'axios'
import EmployeeInterface from '../components/employee/employee'
function EmployeePage() {
	const history = useHistory();

	const routeChange = (path) => {
		history.push(path);

	}
	useEffect(() => {
		Axios.post("http://localhost:3001/api/currentUser")
			.then((response) => {
				if (response.data[1] == "admin") {
					routeChange("/admin")
				}
				else if (response.data[1] == "") {
					routeChange("/admEmp") //Change it when UI is updated
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
		<div>
			<div className='flex flex-column items-end'>
				<button onClick={signOut} className='mt4 ph3 pv2 grow br3 bg-dark-blue b-dark-blue b white'>Sign Out</button>
			</div>
			<EmployeeInterface />
		</div>
	)
}

export default EmployeePage
