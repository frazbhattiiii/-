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
} from "./eligiblityStyles";
import { Container } from "../../globalStyles";
import { useHistory } from "react-router-dom";
import validateEligible from "./eligibiltyFormValidation";
import Axios  from "axios";
const Eligible = () => {

  const [selected, setSelected] = useState([])
  const [salary, setSalary] = useState("");
  const [children, setChildren] = useState("");
  const [siblings, setSiblings] = useState("");
  const [company, setCompany] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const checkBoxData = [
    { value: "Car" },
    { value: "Bike" },



  ];

  const handleSubmit = (e) => {
    console.log(selected)
    e.preventDefault();

    const checkBox = e.target.value;

    const resultError = validateEligible({
      selected,
      salary,
      children,
      siblings,
      company,
    });
    let has_car = false
    let has_bike = false
    let is_married = false
    selected.forEach(item => {
      if (item == 1) {
        has_car = true
      }
      else if (item == 2) {
        has_bike = true
      }
      else if (item == 3) {
        is_married = true
      }
    })
    if (resultError !== null) {
      setSuccess(null)
      setError(resultError);
      return;
    }
    Axios.post("http://localhost:3001/api/insert/userEligibity",
      {
        has_car: has_car,
        has_bike: has_bike,
        is_married: is_married,
        salary: salary,
        company: company,
        siblings: siblings,
        children: children,
      }).then((response) => {
        console.log(response.data.affectedRows)
        if (response.data.affectedRows!=0) {
          setSalary("");
          setSiblings("");
          setCompany("");
          setChildren("");
          setError(null);
          setSuccess("Successfull! Our Employee will contact you");
          routeChange();
        } else {
          setSuccess(null)
          setError("Error occured! Please Login again");
          return;
        }
      })



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
  const routeChange = () => {

    let path = `/receive`;
    history.push(path);


  }
  const handleOnChange = (e) => {
    let set = selected
    if (e.target.checked) {
      set.push(parseInt(e.target.value))
    }
    else {
      set = set.filter((item) => {
        return item != e.target.value
      })
    }
    setSelected(set)
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
                <div id="checklist">
                  <input id="car" onClick={handleOnChange} type="checkbox" size="r" value={1}  ></input>
                  <label for="car">Car</label>
                  <input id="bike" onClick={handleOnChange} type="checkbox" size="r" value={2} ></input>
                  <label for="bike">Bike</label>
                  <input id="Married" onClick={handleOnChange} type="checkbox" size="r" value={3} ></input>
                  <label for="Married">Married</label>

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
