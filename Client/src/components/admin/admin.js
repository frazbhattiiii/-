import React, { useEffect, useState } from 'react';

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
import { HeroButton, HeroText } from '../Hero/HeroStyles';
import './admin.css';
import { useHistory } from "react-router-dom";
import Axios from 'axios';



function AdminInterface() {

	const history = useHistory();


	const [users, setUsers] = useState([])
	let data = []
	useEffect(() => {
		Axios.post("http://localhost:3001/api/fetch/elligibleUserCandidates")
			.then((response) => {
				setUsers(response.data)
				console.log(users)
			})
	},users)
	const routeChange = () => {

		let path = `/create-Employee`;
		history.push(path);
	}

	const handleOnClick = (e) => {
		Axios.post("http://localhost:3001/api/update/elligibleUserCandidates", {
			email: users[e.target.value].email
		}).then((response) => {
			if (response.data.affectedRows != 0) {
				setUsers(users.filter((item, i) => {
					return i != e.target.value
				}))
			} else {
				console.log("Error occured! Please Login again");
				return;
			}
		})
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

							{users.map((card, index) => (
								<PricingCard key={index} >
									<PricingCardInfo>
										<PriceImageWrapper>

										</PriceImageWrapper>
										<PricingCardPlan>{card.name}</PricingCardPlan>
										<PricingCardCost>{card.phone_number}</PricingCardCost>
										<PricingCardText>{card.email}</PricingCardText>
										<PricingCardText>City: {card.city}</PricingCardText>
										<PricingCardText>Company: {card.company}</PricingCardText>
										<PricingCardText>Salary: {card.salary}</PricingCardText>
										<PricingCardText>Siblings: {card.siblings}</PricingCardText>
										<PricingCardText>Is Married: {card.is_married ? 'True' : 'False'}</PricingCardText>
										<PricingCardText>Children: {card.children}</PricingCardText>
										<PricingCardText>Has Car: {card.has_car ? 'True' : 'False'}</PricingCardText>
										<PricingCardText>Has Bike: {card.has_bike ? 'True' : 'False'}</PricingCardText>



										<Button onClick={handleOnClick} value={index}>
											"On Hold"
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
