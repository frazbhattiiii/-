export default function validateDonationForm({ size, number, address,city }) {
	if (!size.trim()) {
		return 'Size required';
	}
	else if(size>80){
		return 'Size can be upto max 80';
	}
	else if(size<0){
		return 'Enter some valid size!!';
	}
	if(!number.trim()){
		return 'Please Enter the number of pieces';
	}
	if(number>200){
		return 'You can donate maximum upto 200 pieces!';
	}
	else if(number<0){
		return 'Enter some valid number!!';
	}
  if(!address.trim()){
    return 'Address Required';
  }
if(!city.trim()){
	return 'City required';
}


  
	// else if (!/^[A-Za-z]+/.test(size.trim())) {
	//   errors.size = 'Enter a valid size';
	// }


    
 
   


	return null;
}
