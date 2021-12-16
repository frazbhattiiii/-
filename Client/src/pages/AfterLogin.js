import React, { useEffect } from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import NewHero from '../components/newHero/newHero';
import NewNavbar from '../components/newNavbar/newNavbar';

import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import { useHistory } from "react-router-dom";


// Hero Feature Content Carousel

const NewHome = () => {
	const history = useHistory();

	const routeChange = () => {

		let path = `/`;
		history.push(path);

	}
	
	return (
		<>
			<NewNavbar />
			<NewHero />
			<Features />
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Carousel />
		</>
	);
};

export default NewHome;
