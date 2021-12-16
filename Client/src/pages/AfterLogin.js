import React, { useEffect } from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import NewHero from '../components/newHero/newHero';
import NewNavbar from '../components/newNavbar/newNavbar';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import { useHistory } from "react-router-dom";
import Axios from 'axios'
// Hero Feature Content Carousel

const NewHome = () => {
	const history = useHistory();

	const routeChange = () => {

		let path = `/`;
		history.push(path);

	}
	useEffect(() => {
		Axios.post("http://localhost:3001/api/currentUser")
			.then((response) => {
				if (response.data === "") {
					console.log(response.data)
					routeChange()
				}
			})
	})
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
