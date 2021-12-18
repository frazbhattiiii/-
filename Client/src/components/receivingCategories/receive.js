import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
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
} from './receiveFormStyle';
import { Container } from '../../globalStyles';
import validateReceiveForm from './validateReceiveForm';

import Axios from 'axios'

const RecieveForm = () => {

  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(null);
  const [checkeditem, setCheckedItem] = useState(0)
  const checkBoxData = [
    { value: "1", category: "C-1" },
    { value: "2", category: "C-2" },
    { value: "3", category: "C-3" },
    { value: "4", category: "C-4" },
    { value: "5", category: "C-5" },
    { value: "6", category: "C-6" },
    { value: "7", category: "C-7" },
    { value: "8", category: "C-8" },
    { value: "9", category: "C-9" },
    { value: "10", category: "C-10" },
    { value: "11", category: "C-11" },
    { value: "12", category: "C-12" },
    { value: "13", category: "Your own category" },
  ];


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("checkedItem-> "+checkeditem)
    const resultError = validateReceiveForm({
      size,
      number,
      city,
      address,
      checkeditem,
      description
    });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    Axios.post("http://localhost:3001/api/insert/take",
    {
      category:checkeditem,
      description:description,
      size:size,
      num_pieces:number
    }).then((response)=>{
      if(response.data ===""){
        alert('Your Request is processed. Our Employee will contact within 48hrs')

        setSize("");
        setNumber("");
        setCity("");
    
    
        setAddress("");
    
        setDescription("");
    
        setError(null);
        routeChange();
      }else{
        setError(response.data.sqlMessage)
        return
      }
    })

  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };




  const RecieveformData = [
    {
      label: "size of piece",
      value: size,
      onChange: (e) => setSize(e.target.value),
      type: "text",
    },
    ,
    {
      label: "Number of Pieces",
      value: number,
      onChange: (e) => setNumber(e.target.value),
      type: "number",
    },
    {
      label: "Your Address",
      value: address,
      onChange: (e) => setAddress(e.target.value),
      type: "text",
    },
    {
      label: "Your City",
      value: city,
      onChange: (e) => setCity(e.target.value),
      type: "text",
    },
    {
      label: "Description of your own category",
      value: description,
      onChange: (e) => setDescription(e.target.value),
      type: "text",
    }
  ];
  const history = useHistory();
  const routeChange = () => {

    let path = `/newHome`;
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
            <FormTitle>Recieve</FormTitle>
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

              {RecieveformData.map((el, index) => (
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

              <FormButton type="submit" >Recieve</FormButton>
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

export default RecieveForm;
