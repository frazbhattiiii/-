export default function validateDonationForm({
	salary,
	children,
	siblings,
	company }) {
	if (!salary.trim()) {
		return 'Please Enter the salary or 0 if you didn not earn any thing';
	}
	else if (salary < 0) {
		return 'Enter valid number';
	}
	if (!children.trim()) {
		return 'Enter 0 if not have any childs';
	}
	else if (children < 0) {
		return 'Kindly put some valid info';
	}
	if (!siblings.trim()) {
		return 'Enter 0 if not have any siblings';
	}
	else if (siblings < 0) {
		return 'Kindly put some valid info';
	}
	if(!company.trim()){
		return "Company required (Type 'n/a' if none)"
	}




	// else if (!/^[A-Za-z]+/.test(size.trim())) {
	//   errors.size = 'Enter a valid size';
	// }







	return null;
}
