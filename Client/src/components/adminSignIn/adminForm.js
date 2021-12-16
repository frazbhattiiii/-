import React, { useState} from "react";

import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
  CheckBox,
} from "./adminStyleForm";
import { Container } from "../../globalStyles";
import {useHistory} from  "react-router-dom";
import adminValidate from "./adminValidate";
const AdminForm = () => {

  const [isChecked, setIsChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const checkBox = e.target.value;
    
    const resultError = adminValidate({
          email,
        password
    });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    

    
      alert('Your Request is submitted and you will receive the response Shortly!')

      
        
          
      
      
    
    
    console.log(checkBox);
    
    setEmail("");
    setPassword("");
   
    setError(null);
    setSuccess("Successfully donated!");
    routeChange();

  };

  const messageVariants = {
    hidden: { y: 30, opasiblings: 0 },
    animate: { y: 0, opasiblings: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  

  
  const eligibilityformData = [
    {
      label: "Your Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
    },   
    {
      label: "Your Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: "password",
    }
  ];
  const history = useHistory();
  const routeChange = () =>{ 
	
    let path = `/receive`; 
    history.push(path);
    
		
  }
  const handleOnChange = (e) => {
    setIsChecked(!isChecked);
    const checked = e.target.checked;
    
    // to get the checked value

    let checkedArray=[]
    const checkedValue = e.target.value;
    console.log(checkedValue)
    checkedArray.push(checkedValue)
    console.log(checkedArray)
        // to get the checked name
    const checkedName = e.target.name;
  }


  
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Sign In
            </FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              
                

              <CheckBox>
                <h3>Select one of these</h3>
                <div id="checklist" >
                  <input id="car" type="checkbox" size="r" value="employee"  ></input>
                  <label for="car">Employee</label>
                  <input id="bike" type="checkbox" size="r" value="admin" ></input>
                  <label for="bike">Admin</label>
                  
                  
                </div>
              </CheckBox>
              
              {eligibilityformData.map((el, index) => (
                <FormInputRow key={index} >
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Enter ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                    
                  />
                </FormInputRow>
              ))}

              <FormButton type="submit" onClick={handleOnChange}>Sign In</FormButton>
            </FormWrapper>

            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};
export default AdminForm;
