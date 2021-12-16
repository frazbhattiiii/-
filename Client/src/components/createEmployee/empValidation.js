export default function empValidation({ name, lastName, portfolio,email, password, confirmPass,address,city,age}) {
	if (!name.trim()) {
		return 'First Name required';
	}
  if (!lastName.trim()) {
		return 'Last Name required';
	}
  if(!address.trim()){
    return 'Address Required';
  }
  if(!age.trim()){
    return 'Age required'
  }
  else if(age<=10 || age>=110){
    return 'Age required(10-110)';
  }
  
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    portfolio=portfolio.toLowerCase();
  
    if(!city.trim()){
      return 'City name Required';
    }
	if (!email) {
		return 'Email required';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email address is invalid';
	}
	if (!password) {
		return 'Password is required';
	} else if (password.length < 6) {
		return 'Password needs to be 6 characters or more';
	}

	if (!confirmPass) {
		return 'Enter Confirm password is required';
	} else if (confirmPass !== password) {
		return 'Passwords do not match';
	}
	return null;
}
