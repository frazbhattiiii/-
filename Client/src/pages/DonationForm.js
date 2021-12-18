import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import DonationForm from '../components/donationForm/donationForm';
import NewNavbar from '../components/newNavbar/newNavbar';
function DonationFormPage() {
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
				else if(response.data[1] == "employee") {
					routeChange("/employeeSide") //Change it when UI is updated
				}
				else if(response.data[1] == "") {
					routeChange("/") 
				}
				
				

			})
	})  
  return (
    <div>
      <NewNavbar/>
      <DonationForm />
    </div>
  )
}

export default DonationFormPage
