import React, { useEffect, useState } from 'react';

import { usersData } from '../../data/usersData';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
	PricingCard,
	priceButton,
  employeeButton,
  PriceImageWrapper,
  PriceImage
} from './adminStyle';
import { HeroButton ,HeroText} from '../Hero/HeroStyles';
import './admin.css';
import { useHistory } from "react-router-dom";
import  Axios  from 'axios';



function AdminInterface() {
  
	const history = useHistory();
  

const [buttonText, setButtonText] = useState("On Hold"); 
const [users, setUsers] = useState(null)
useEffect(()=>{
	Axios.post("http://localhost:3001/api/fetch/elligibleUsersCandidates")
	.then((response)=>{

	})
})
  const routeChange = () =>{ 
	
    let path = `/create-Employee`; 
    history.push(path);
  }
  const changeText = (text,salary) => {
    
    setButtonText(text)
  
  
  }


	return (
    <div >
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
      
			<PricingSection id="pricing">
				<PricingWrapper>
        
					<Heading> Users </Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						 
					</TextWrapper>
					<PricingContainer>
          
						{usersData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
                <PriceImageWrapper>
			
              </PriceImageWrapper>
									<PricingCardPlan>{card.Name}</PricingCardPlan>
									<PricingCardCost>{card.Phone}</PricingCardCost>
									<PricingCardText>{card.Email}</PricingCardText>
                  <PricingCardText>{card.Salary}</PricingCardText>
                  <PricingCardText>{card.siblings}</PricingCardText>
                  <PricingCardText>{card.Childrens}</PricingCardText>
                  <PricingCardText>{card.Company}</PricingCardText>
									
								
                  			
									<Button onClick={() => changeText("Deserving",card.Salary)}>
                     {buttonText} 
                
                   
									</Button>
											
								

								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
      
				</PricingWrapper>
			</PricingSection>
    
      
		</IconContext.Provider>
    <h2 className='textHeading'>For Creating Employees for the NGO click the button</h2>
  <div className='btnContainer'>
    
    <HeroButton onClick={routeChange}>Create Employee</HeroButton>
    </div>
    </div>
	);

}
export default AdminInterface;
