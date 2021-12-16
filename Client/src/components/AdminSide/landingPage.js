import React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton,mainHeading } from './HeroStyles';
 
const LandingPage = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/blackHero.mp4" loop  autoPlay muted="false"/>
			<Container>
				<MainHeading className='main-heading'>Admin and Employee Sider</MainHeading>
				<HeroText>
          Login to sign In as admin or Employeee
				</HeroText>
				<ButtonWrapper>
					<Link to="admin-signIn">
						<Button>Admin</Button>
					</Link>
					<Link to ="emp-signIn">
					<HeroButton>Employee</HeroButton>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
