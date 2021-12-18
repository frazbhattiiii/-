import React, {useEffect} from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
// Hero Feature Content Carousel

const Home = () => {
	const history = useHistory();
	const routeChange = (path) => {
		history.push(path);

	}
	useEffect(() => {
		Axios.post("http://localhost:3001/api/currentUser")
			.then((response) => {
				if (response.data[1] == "admin") {
					routeChange("/admin")
				}
				else if(response.data[1] == "employee") {
					routeChange("/employeeSide") //Change it when UI is updated
				}
				else if(response.data[1] == "user") {
					routeChange("/newHome") 
				}
			})
	})
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
