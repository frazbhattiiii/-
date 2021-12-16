import React from 'react';
import NewFeatures from '../components/newFeatures/newFeatures';
import NewNavbar from '../components/newNavbar/newNavbar';
import { AboutheroTwo ,AboutheroOne,AboutheroThree} from '../data/AboutData';
import { NewContent } from '../components/newContent/newContent';

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
