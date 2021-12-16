import React, {useEffect} from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import { useHistory } from 'react-router-dom';

// Hero Feature Content Carousel

const Home = () => {
	const history = useHistory();

	const routeChange = () => {

		let path = `/newHome`;
		history.push(path);

	}
	
	return (
		<>
			<Navbar/>
			<Hero />
			<Features />
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Carousel />
		</>
	);
};

export default Home;
