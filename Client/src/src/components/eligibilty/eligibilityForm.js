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
} from "./eligiblityStyles";
import { Container } from "../../globalStyles";
import {useHistory} from  "react-router-dom";
import validateEligible from "./eligibiltyFormValidation";
const Eligible = () => {
  
  const [isChecked, setIsChecked] = useState(false);
  const [able, setAble] = useState(true);
  const [salary, setSalary] = useState("");
  const [children, setChildren] = useState("");
  const [siblings, setSiblings] = useState("");
  const [showNext, setshowNext] = useState("");
  const [address, setAddress] = useState("");
   const[company,setCompany]= useState("");
  const [number, setNumber] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const checkBoxData=[
    {value:"Car"},
    {value:"Bike"},
    
    
    
];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const checkBox = e.target.value;
    
    const resultError = validateEligible({
      salary,
        children,
      siblings,
      company,
    });

    if (resultError !== null) {
      setError(resultError);
      return;
    }

    
      alert('Your Request is submitted and you will receive the response Shortly!')

      
        
          
      
      
    
    
    console.log(checkBox);
    
    setSalary("");
    setNumber("");
    setSiblings("");
    setCompany("");

    setAddress("");
 
    setChildren("");
  
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
      label: "Your Salary(PKR)",
      value: salary,
      onChange: (e) => setSalary(e.target.value),
      type: "number",
    },
    ,
    {
      label: "Company Name(if you are employed)",
      value: company,
      onChange: (e) => setCompany(e.target.value),
      type: "text",
    },
   
    {
      label: "Your number of Siblings",
      value: siblings,
      onChange: (e) => setSiblings(e.target.value),
      type: "number",
    },
    {
      label: "Number of Your Childrens",
      value: children,
      onChange: (e) => setChildren(e.target.value),
      type: "number",
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
    const checkedValue = e.target.value;
   
        // to get the checked name
    const checkedName = e.target.name;
  }


  
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Eligiblilty Criteria
            </FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              
                

              <CheckBox>
                <h3>Select what you own</h3>
                <div id="checklist" onClick={handleOnChange}>
                  <input id="car" type="checkbox" size="r" value="car"  ></input>
                  <label for="car">Car</label>
                  <input id="bike" type="checkbox" size="r" value="bike" ></input>
                  <label for="bike">Bike</label>
                  <input id="Married" type="checkbox" size="r" value="Married" ></input>
                  <label for="bike">Married</label>
                  
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

              <FormButton type="submit" >Proceed</FormButton>
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

export default Eligible;
