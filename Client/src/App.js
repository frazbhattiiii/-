import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SponsorPage from './pages/sponsorPage';
//Pages
import admEmp from './pages/admEmp';
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Register from './pages/registerPage';
import Pricing from './pages/PricingPage';
import Footer from './components/Footer/Footer';
import Donate from './pages/Donate';
import NewPricing from './components/newPricing/newPricing';
import ReceiveFormPage from './pages/ReceivePage';
import NewHome from './pages/AfterLogin';
import Contact from './pages/Contact';
import All from './pages/allCategoiresPage';
import About from './pages/About';
import adminSide from './pages/adminSide';
import EligibleForm from './pages/EligiblePage';
import DonationFormPage from './pages/DonationForm';
import CreditPage from './pages/CreditPage';
import adminSignIn from './pages/adminSignIn';
import EmployeePage from './pages/employeePage';
import EmployeeCreationPage from './pages/employeeCreationPage';
function App() {
	return (
		<Router>
			<GlobalStyle />

			<Switch>

				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
				<Route path="/admin-signIn" exact component={adminSignIn} />
				<Route path="/admEmp" exact component={admEmp} />
				<Route path="/admin" exact component={adminSide} />
				<Route path="/create-Employee" exact component={EmployeeCreationPage} />
				<Route path="/signin" exact component={SignUp} />
				<Route path="/eligibility" exact component={EligibleForm} />
				<Route path="/new-pricing" exact component={NewPricing} />
				<Route path="/receive" exact component={ReceiveFormPage} />
				<Route path="/pricing" exact component={Pricing} />
				<Route path="/employeeSide" exact component={EmployeePage} />
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
