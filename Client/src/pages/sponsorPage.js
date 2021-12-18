import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import  Axios from 'axios';
import { NewContent } from '../components/newContent/newContent';
import { SponsorOne,SponsorTwo } from '../data/sponsorData';
import { SponsorContent } from '../components/sponsorContent/sponsorContent';
import { AboutheroThree, AboutheroTwo } from '../data/AboutData';
import SponsorForm from '../components/sponsorForm/sponsorForm';
import NewNavbar from '../components/newNavbar/newNavbar';
function SponsorPage() {
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
    <NewNavbar/>
    <SponsorContent {...SponsorOne}/>
    <SponsorContent {...SponsorTwo}/>
    <SponsorForm/>
      
    </>
  )
}

export default SponsorPage
