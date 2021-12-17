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
} from "./donationFormStyle";
import { Container } from "../../globalStyles";
import { useHistory } from "react-router-dom";
import validateRegisterForm from "./donationFormValidation";
import validateDonationForm from "./donationFormValidation";
const DonationForm = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [able, setAble] = useState(true);
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [showNext, setshowNext] = useState("");
  const [address, setAddress] = useState("");

  const [number, setNumber] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const checkBoxData = [
    { value: "01" },
    { value: "02" },
    { value: "03" },
    { value: "04" }
    , { value: "05" }
    , { value: "06" }
    , { value: "07" }
    , { value: "08" }
    , { value: "09" }
    , { value: "10" }
    , { value: "11" },
    { value: "12" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkBox = e.target.value;

    const resultError = validateDonationForm({
      size,
      number,
      city,
      address,
    });

    if (resultError !== null) {
      setError(resultError);
      return;
    }


    alert('Your Request is processed. Our Employee will contact within 48hrs')








    console.log(checkBox);

    setSize("");
    setNumber("");
    setCity("");


    setAddress("");

    setDescription("");

    setError(null);
    setSuccess("Successfully donated!");
    routeChange();

  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };




  const DonationformData = [
    {
      label: "size of piece",
      value: size,
      onChange: (e) => setSize(e.target.value),
      type: "number",
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

    let path = `/sponsor`;
    history.push(path);


  }
  const handleOnChange = (e) => {
    setIsChecked(!isChecked);
    const checked = e.target.checked;

    // to get the checked value
    const checkedValue = e.target.value;

    // to get the checked name
    const checkedName = e.target.name;
    checkBoxData.map((value => {

      if (checked == value.value) {
        console.log(checkedValue);

      }
    }))
    if (checkedValue == "own") {
      setError("Please fill out the description box!");
      setAble(false);
      if (setDescription == "") {
        setError("Fill the description to proceed");
      }

    }


  };
  const BoxCheck = () => {

    console.log(description);


    if (description != "") {
      setAble(true);
    }
  }
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Donate</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>



              <CheckBox>
                <h3>Select your Category</h3>
                <div id="checklist" onClick={handleOnChange}>
                  <input id="01" type="checkbox" size="r" value="01"  ></input>
                  <label for="01">C-1</label>
                  <input id="02" type="checkbox" size="r" value="02" ></input>
                  <label for="02">C-2</label>
                  <input id="03" type="checkbox" size="r" value="03"></input>
                  <label for="03">C-3</label>
                  <input id="04" type="checkbox" size="r" value="04"></input>
                  <label for="04">C-4</label>
                  <input id="05" type="checkbox" size="r" value="05"></input>
                  <label for="05">C-5</label>
                  <input id="06" type="checkbox" size="r" value="06"></input>
                  <label for="06">C-6</label>
                  <input id="07" type="checkbox" size="r" value="07"></input>
                  <label for="07">C-7</label>
                  <input id="08" type="checkbox" size="r" value="08"></input>
                  <label for="08">C-8</label>
                  <input id="09" type="checkbox" size="r" value="09"></input>
                  <label for="09">C-9</label>
                  <input id="10" type="checkbox" size="r" value="10"></input>
                  <label for="10">C-10</label>
                  <input id="11" type="checkbox" size="r" value="11"></input>
                  <label for="11">C-11</label>
                  <input id="12" type="checkbox" size="r" value="12"></input>
                  <label for="12">C-12</label>
                  <input id="own" type="checkbox" size="r" value="own" ></input>
                  <label for="own">Your Own Category</label>
                </div>
              </CheckBox>

              {DonationformData.map((el, index) => (
                <FormInputRow key={index} onClick={BoxCheck}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Enter ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}

                  />
                </FormInputRow>
              ))}

              <FormButton type="submit" onClick={BoxCheck} disabled={!able}>Donate</FormButton>
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

export default DonationForm;
