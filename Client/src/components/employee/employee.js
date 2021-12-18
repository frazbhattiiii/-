import React, { useState } from 'react';

import { onHoldData } from '../../data/onHoldData';
import { receiveData } from '../../data/receivedData';
// import { receiveData } from '../../data/receivedData';
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
} from './employeeStyle';
import { HeroButton ,HeroText} from '../Hero/HeroStyles';

import { useHistory } from "react-router-dom";
import { donorsData } from '../../data/donors';


function EmployeeInterface() {
  
	const history = useHistory();
  

const [buttonText, setButtonText] = useState("Not Delivered"); 
const [buttonText2, setButtonText2] = useState("Have to pick up"); 
  const routeChange = () =>{ 
	
    let path = `/create-Employee`; 
    history.push(path);
  }
  const changeText = (text) => {
    
    setButtonText(text)
  
  
  }
  const changeText2 = (text) => {
    
    setButtonText2(text)
  
  
  }


	return (
    <div >
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
    <PricingSection id="pricing">
				<PricingWrapper>
        
					<Heading> Donors </Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						 
					</TextWrapper>
					<PricingContainer>
          
						{donorsData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
                <PriceImageWrapper>
			
              </PriceImageWrapper>
									<PricingCardPlan>{card.Name}</PricingCardPlan>
									<PricingCardCost>{card.Phone}</PricingCardCost>
									<PricingCardText>{card.Email}</PricingCardText>
                  <PricingCardText>{card.Category}</PricingCardText>
                  <PricingCardText>{card.Size}</PricingCardText>
                  <PricingCardText>{card.peice}</PricingCardText>
                 
									
								
                  			
									<Button >
                      
                    Received
                   
									</Button>
											
								

								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
      
				</PricingWrapper>
			</PricingSection> 
      <PricingSection id="pricing">
				<PricingWrapper>
        
					<Heading> Pick Up Remaining </Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						 
					</TextWrapper>
					<PricingContainer>
          
						{donorsData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
                <PriceImageWrapper>
			
              </PriceImageWrapper>
									<PricingCardPlan>{card.Name}</PricingCardPlan>
									<PricingCardCost>{card.Phone}</PricingCardCost>
									<PricingCardText>{card.Email}</PricingCardText>
                  <PricingCardText>{card.Category}</PricingCardText>
                  <PricingCardText>{card.Size}</PricingCardText>
                  <PricingCardText>{card.peice}</PricingCardText>
                 
									
								
                  			
									<Button onClick={() => changeText2("Picked")}>
                      
                    {buttonText2}
                   
									</Button>
											
								

								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
      
				</PricingWrapper>
			</PricingSection> 
			<PricingSection id="pricing">
				<PricingWrapper>
        
					<Heading> Received </Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						 
					</TextWrapper>
					<PricingContainer>
          
						{receiveData.map((card, index) => (
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
									
								
                  			
									<Button >
                      
                    Received
                   
									</Button>
											
								

								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
      
				</PricingWrapper>
			</PricingSection>
      <PricingSection id="pricing">
				<PricingWrapper>
        
					<Heading> On Hold </Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						 
					</TextWrapper>
					<PricingContainer>
          
						{onHoldData.map((card, index) => (
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
									
								
                  			
									<Button onClick={() => changeText("Delivered")}>
                     {buttonText} 
                
                   
									</Button>
											
								

								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
      
				</PricingWrapper>
			</PricingSection>
      
		</IconContext.Provider>
  </div>
	);

}
export default EmployeeInterface;
