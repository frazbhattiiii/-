export default function validateDonationForm({ size, number, address, city, checkedValue_,description }) {
	if (!size.trim()) {
		return 'Size required';
	}
	else if (size.trim() !== 's' && size.trim() !== 'l' && size.trim() !== 'xl' && size.trim() !== 'xxl' && size.trim() !== 'xxxl') {
		console.log(size)
		return 'Invalid Size! Enter("s","l","xl","xxl","xxxl")';
	}
	if (!number.trim()) {
		return 'Please Enter the number of pieces';
	}
	if (number > 200) {
		return 'You can donate maximum upto 200 pieces!';
	}
	else if (number < 0) {
		return 'Enter some valid number!!';
	}
	if (!address.trim()) {
		return 'Address Required';
	}
	if (!city.trim()) {
		return 'City required';
	}
	if (checkedValue_ === 0) {
		return "Please Select Category"
	}
	if(!description.trim()){
		return "Description Required"
	}



	// else if (!/^[A-Za-z]+/.test(size.trim())) {
	//   errors.size = 'Enter a valid size';
	// }







	return null;
}
