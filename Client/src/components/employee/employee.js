import React, { useState, useEffect } from 'react';

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
import { HeroButton, HeroText } from '../Hero/HeroStyles';
import { useHistory } from "react-router-dom";
import { donorsData } from '../../data/donors';
import Axios from 'axios'

function EmployeeInterface() {
	const [buttonText, setButtonText] = useState("Not Delivered");
	const [buttonText2, setButtonText2] = useState("Have to pick up");
	const [giveDone, setGiveDone] = useState([])
	const [giveRem, setGiveRem] = useState([])
	const [takeDone, setTakeDone] = useState([])
	const [takeRem, setTakeRem] = useState([])


	useEffect(() => {
		Axios.post("http://localhost:3001/api/fetch/empUI/giveDone")
			.then((response) => {
				setGiveDone(response.data)

			})
		Axios.post("http://localhost:3001/api/fetch/empUI/giveRem")
			.then((response) => {
				setGiveRem(response.data)

			})
		Axios.post("http://localhost:3001/api/fetch/empUI/takeDone")
			.then((response) => {
				setTakeDone(response.data)

			})
		Axios.post("http://localhost:3001/api/fetch/empUI/takeRem")
			.then((response) => {
				setTakeRem(response.data)

			})
	}, giveDone, giveRem, takeDone, takeRem)

	const handleGiveRem = (e) => {
		giveRem.map((item) => {
			if (e.target.value == item.donation_id) {
				giveDone.push(item)
			}
		})
		Axios.post("http://localhost:3001/api/update/give",
			{
				donation_id: e.target.value
			}).then((response) => {
				console.log(response)
				if (response.data.affectedRows != 0) {
					setGiveRem(giveRem.filter((item) => {
						return item.donation_id != e.target.value
					}))
				} else {
					console.log("Error occured! Please Login again");
					return;
				}

			})
		// setGiveRem(giveRem.filter((item,i)=>{
		// 	return e.target.value!=i
		// }))
	}
	const handleTakeRem = (e) => {
		takeRem.map((item) => {
			if (e.target.value == item.donation_id) {
				takeDone.push(item)
			}
		})
		Axios.post("http://localhost:3001/api/update/take",
			{
				donation_id: e.target.value
			}).then((response) => {
				console.log(response)
				if (response.data.affectedRows != 0) {
					setTakeRem(takeRem.filter((item) => {
						return item.donation_id != e.target.value
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

							{giveDone.map((card, index) => (
								<PricingCard key={index}>
									<PricingCardInfo>
										<PriceImageWrapper>

										</PriceImageWrapper>
										<PricingCardPlan>{card.name}</PricingCardPlan>
										<PricingCardCost>{card.number}</PricingCardCost>
										<PricingCardText>{card.email}</PricingCardText>
										<PricingCardText>{card.category}</PricingCardText>
										<PricingCardText>{card.size}</PricingCardText>
										<PricingCardText>{card.pieces}</PricingCardText>
										<PricingCardText>{card.description}</PricingCardText>
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
							{giveRem.map((card, index) => (
								<PricingCard key={index}>
									<PricingCardInfo>
										<PriceImageWrapper>
										</PriceImageWrapper>
										<PricingCardPlan>{card.name}</PricingCardPlan>
										<PricingCardCost>{card.number}</PricingCardCost>
										<PricingCardText>{card.email}</PricingCardText>
										<PricingCardText>{card.category}</PricingCardText>
										<PricingCardText>{card.size}</PricingCardText>
										<PricingCardText>{card.pieces}</PricingCardText>
										<PricingCardText>{card.description}</PricingCardText>
										<Button onClick={handleGiveRem} value={card.donation_id}>
											Picked UP
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
							{takeDone.map((card, index) => (
								<PricingCard key={index}>
									<PricingCardInfo>
										<PriceImageWrapper>
										</PriceImageWrapper>
										<PricingCardPlan>{card.name}</PricingCardPlan>
										<PricingCardCost>{card.number}</PricingCardCost>
										<PricingCardText>{card.email}</PricingCardText>
										<PricingCardText>{card.category}</PricingCardText>
										<PricingCardText>{card.size}</PricingCardText>
										<PricingCardText>{card.pieces}</PricingCardText>
										<PricingCardText>{card.description}</PricingCardText>
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
							{takeRem.map((card, index) => (
								<PricingCard key={index}>
									<PricingCardInfo>
										<PriceImageWrapper>

										</PriceImageWrapper>
										<PricingCardPlan>{card.name}</PricingCardPlan>
										<PricingCardCost>{card.number}</PricingCardCost>
										<PricingCardText>{card.email}</PricingCardText>
										<PricingCardText>{card.category}</PricingCardText>
										<PricingCardText>{card.size}</PricingCardText>
										<PricingCardText>{card.pieces}</PricingCardText>
										<PricingCardText>{card.description}</PricingCardText>
										<Button onClick={handleTakeRem} value={card.donation_id}>
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
