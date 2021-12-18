import React , {useEffect}from 'react'
import { useHistory } from 'react-router-dom';
import  Axios from 'axios';
import CreditCardForm from '../components/sponsor/sponsor';
import  { useState } from 'react';
import NewNavbar from '../components/newNavbar/newNavbar';
function CreditPage() {
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
  const [creditCardInfo, setCreditCardInfo] = useState({});

  const creditCardData = info => {
    setCreditCardInfo({
      numCard01: info.numCard01Ref,
      numCard02: info.numCard02Ref,
      numCard03: info.numCard03Ref,
      numCard04: info.numCard04Ref,
      nameCard: info.nameCardRef,
      monthCard: info.monthCardRef,
      yearCard: info.yearCardRef,
      
      ccvCard: info.ccvCardRef,
      
    });
    console.log(info.yearCardRef);
    
  }
  return (
    <>
    <NewNavbar/>
    {/* <CreditCardImage creditCardInfo={creditCardInfo} /> */}
      <CreditCardForm  />
      
    </>
  )
}

export default CreditPage
