import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import NewFeatures from '../components/newFeatures/newFeatures';
import NewHero from '../components/newHero/newHero';
import NewNavbar from '../components/newNavbar/newNavbar';
import { AboutheroTwo ,AboutheroOne,AboutheroThree} from '../data/AboutData';
import { NewContent } from '../components/newContent/newContent';

import NewPricing from '../components/newPricing/newPricing';
import Hero from '../components/Hero/Hero';
// Hero Feature Content Carousel

const About= () => {
	return (
		<>
      <NewNavbar />
      <NewContent {...AboutheroTwo} />
      <NewContent {...AboutheroOne} />
      <NewContent {...AboutheroThree} />
      <NewFeatures/>
		</>
	);
};

export default About;
