import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SponsorPage from './pages/sponsorPage';
import {useState} from 'react';
//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Register from './pages/registerPage';
import Pricing from './pages/PricingPage';
import Footer from './components/Footer/Footer';
import Donate from './pages/Donate';
import NewPricing from './components/newPricing/newPricing';
import NewNavbar from './components/newNavbar/newNavbar';
import ReceiveFormPage from './pages/ReceivePage';
import NewHome from './pages/AfterLogin';
import Contact from './pages/Contact';
import All from './pages/allCategoiresPage';
import About from './pages/About';
import DonationFormPage from './pages/DonationForm';
import CreditPage from './pages/CreditPage';
import Features from './components/Features/Features';
function App() {
	 const [signedIn, setSignedIn] = useState(true);
	return (
		<Router>
			<GlobalStyle />
			
			<Switch>
				
				<Route path="/navbar" exact component={Navbar} />
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
				<Route path="/signin" exact component={SignUp} />
				<Route path="/new-pricing" exact component={NewPricing} />
				<Route path="/receive" exact component={ReceiveFormPage} />
				<Route path="/pricing" exact component={Pricing} />
				<Route path="/register" exact component={Register} />
				<Route path="/contact" exact component={Contact} />
				<Route path="/newHome" exact component={NewHome} />
				<Route path="/sponsor" exact component={SponsorPage} />
				<Route path="/donation" exact component={DonationFormPage} />
				<Route path="/creditCard" exact component={CreditPage} />
				<Route path="/donate" exact component={Donate} />
				<Route path="/allcategories" exact component={All} />
				


			</Switch>
			<Footer />
			
		</Router>
	);
}

export default App;
