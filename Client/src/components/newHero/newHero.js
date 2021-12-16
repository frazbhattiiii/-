import React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton,mainHeading } from './newHeroStyle';
 
const NewHero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/blackHero.mp4" loop  autoPlay muted="false"/>
			<Container>
				<MainHeading className='main-heading'>Donate For the Sake of Allah</MainHeading>
				<HeroText>
				Giving even a date for the Sake of Allah more worthy then this world and everything which it contains
				</HeroText>
				<ButtonWrapper>
					<Link to="donate">
						<Button>Donate</Button>
					</Link>
					<Link to ="receive">
					<HeroButton>Receive</HeroButton>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default NewHero;
