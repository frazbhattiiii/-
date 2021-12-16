import React from 'react';


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
  PriceImageWrapper,
  PriceImage
} from './categoriesStyle';
import {categoriesData} from '../../data/categoriesData';

import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function AllCategories() {
	const history = useHistory();

  const routeChange = () =>{ 
	
    let path = `/signup`; 
    history.push(path);
  }
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="pricing">
				<PricingWrapper>
					<Heading> All Categories </Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						 
					</TextWrapper>
					<PricingContainer>
          
						{categoriesData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
                <PriceImageWrapper>
						  	<PriceImage
								src={card.image}
						
					
						  	/>			
              </PriceImageWrapper>
									<PricingCardPlan>{card.title}</PricingCardPlan>
									<PricingCardCost>{card.price}</PricingCardCost>
									<PricingCardText>{card.description}</PricingCardText>
									<PricingCardFeatures>
										{card.features.map((feature, index) => (
											<PricingCardFeature key={index}>
												{feature}
											</PricingCardFeature>
										))}
									</PricingCardFeatures>
								
                  			
									<Button onClick={routeChange}>Get Started
								
									</Button>
											
								

								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
}
export default AllCategories;
