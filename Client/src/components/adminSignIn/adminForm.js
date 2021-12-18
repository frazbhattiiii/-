import React, { useState } from "react";

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
import Axios from "axios";

const AdminForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [checkeditem, setCheckedItem] = useState(0)
  const checkBoxData = [
    { value: "1", category: "Employee" },
    { value: "2", category: "Admin" },
  ];


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const resultError = adminValidate({
      email,
      password
    });
    

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    console.log(checkeditem)
    console.log(checkeditem === 2)
    if(checkeditem!==2){//Why is it Hppening
      console.log("Current user -> " + email + " " + password)
      Axios.post("http://localhost:3001/api/signIn/admin",
      {
        email:email,
        password:password
      }).then((response)=>{
        if(response.data.length===1){
          setEmail('');
          setPassword('');
          //setloggedIn(true);
          routeChange();
  
        }
        else {
          setError('Please Enter valid email or password');
          return
        }
      })
    }
    else{
      Axios.post("http://localhost:3001/api/signIn/employee",
      {
        email:email,
        password:password
      }).then((response)=>{
        if(response.data.length===1){
          setEmail('');
          setPassword('');
          //setloggedIn(true);
          routeChange();//Change this method
  
        }
        else {
          setError('Please Enter valid email or password');
          return
        }
      })
    }
    

  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };




  const formData = [
    {
      label: "Your Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
    },
    ,
    {
      label: "Your Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: "password",
    },
  ];
  const history = useHistory();
  const routeChange = () =>{ 
	
    let path = `/admin`; 
    history.push(path);
    
		
  }
  const handleOnChange = (e) => {    
      setCheckedItem(e.target.value)      
  };
  
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Sign In</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>



              <CheckBox>
                <h3>Select your Category</h3>
                <div id="checklist" >
                  {checkBoxData.map(item=> {
                    return checkeditem === item.value ?
                      (
                        <>
                        <input key = {item.value} onClick={handleOnChange} id={item.value} type="checkbox" size="r" value={item.value} checked ></input>
                        <label key = {item.value+"b"} for={item.value}>{item.category}</label>
                        </>
                      ) : (
                        <>
                        <input key = {item.value} onClick={handleOnChange} id={item.value} type="checkbox" size="r" value={item.value}  ></input>
                        <label key = {item.value+"a"} for={item.value}>{item.category}</label>
                        </>
                      )
                  })}
                </div>
              </CheckBox>

              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Enter ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}

                  />
                </FormInputRow>
              ))}

              <FormButton type="submit" >Sign In</FormButton>
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
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default AdminForm;
