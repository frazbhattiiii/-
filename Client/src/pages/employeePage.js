import React,{useEffect} from 'react'
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
				else if(response.data[1] == "") {
					routeChange("/admEmp") //Change it when UI is updated
				}
				else if(response.data[1] == "user") {
					routeChange("/newHome") 
				}
				

			})
	})  
  return (
    <div>
      <EmployeeInterface/>
    </div>
  )
}

export default EmployeePage
