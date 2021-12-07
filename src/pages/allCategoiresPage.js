import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import NewHero from '../components/newHero/newHero';
import NewNavbar from '../components/newNavbar/newNavbar';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import AllCategories from '../components/Categories/categories';
import NewPricing from '../components/newPricing/newPricing';
// Hero Feature Content Carousel

const All= () => {
	return (
		<>
      <NewNavbar />
      <AllCategories />
		</>
	);
};

export default All;
