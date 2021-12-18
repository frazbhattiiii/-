import React, {useEffect} from 'react';
import AdminInterface from '../components/admin/admin';
import  Axios from 'axios';
import { useHistory } from 'react-router-dom';
// Hero Feature Content Carousel

const AdminSide= () => {
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
				else if(response.data[1] == "employee") {
					routeChange("/employeeSide") //Change it when UI is updated
				}
				else if(response.data[1] == "user") {
					routeChange("/newHome") 
				}
				

			})
	})  
	return (
		<>
      <AdminInterface/>
		</>
	);
};

export default AdminSide;
