import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import ReceiveForm from '../components/receivingCategories/receive';

import NewNavbar from '../components/newNavbar/newNavbar';
function ReceiveFormPage() {
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
				else if(response.data[1] == "user"){
					Axios.post("http://localhost:3001/api/check/is_eligible/user")
					.then((response)=>{
            console.log(response.data[0].is_eligible)
						if(response.data[0].is_eligible == 0){
              alert("Your request is being processed you will access this when you are considered as elligible")
							routeChange("/newHome")
						}
					})
				}
				

			})
	})
  return (
    <div>
      <NewNavbar/>
      <ReceiveForm />
    </div>
  )
}

export default ReceiveFormPage
