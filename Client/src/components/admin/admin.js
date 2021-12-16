import React from 'react';

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



function AdminInterface() {
	const history = useHistory();

  const routeChange = () =>{ 
	
    let path = `/create-Employee`; 
    history.push(path);
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
                  <PricingCardText>{card.Company}</PricingCardText>
									
								
                  			
									<Button >
                      Delivered
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
