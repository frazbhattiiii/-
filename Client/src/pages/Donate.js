import React,{useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios'
import NewNavbar from '../components/newNavbar/newNavbar';
import NewPricing from '../components/newPricing/newPricing';
// Hero Feature Content Carousel

const Donate= () => {
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
				

			})
	})  
	return (
		<>
      <NewNavbar />
      <NewPricing />
		</>
	);
};

export default Donate;
