import React ,{useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios'
import NewNavbar from '../components/newNavbar/newNavbar';
import Eligible from '../components/eligibilty/eligibilityForm';
// Hero Feature Content Carousel

const EligibleForm= () => {
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
				else if(response.data[1] == "employee") {
					routeChange("/employeeSide") //Change it when UI is updated
				}
				else if(response.data[1] == "") {
					routeChange("/") 
				}
				else if(response.data[1] == "user"){
					console.log(response.data[1])
					Axios.post("http://localhost:3001/api/check/is_eligible/user")
					.then((response)=>{
						if(response.data.length != 0){
							routeChange("/receive")
						}
					})
				}
				

			})
	})  
	return (
		<>
      <NewNavbar />
      <Eligible />
		</>
	);
};

export default EligibleForm;
