import React from 'react'
import CreditCardImage from '../components/creditCardImage/creditCardImage';
import CreditCardForm from '../components/sponsor/sponsor';
import NewHero from '../components/newHero/newHero';
import  { useState } from 'react';
import NewNavbar from '../components/newNavbar/newNavbar';
function CreditPage() {
  const [creditCardInfo, setCreditCardInfo] = useState({});

  const creditCardData = info => {
    setCreditCardInfo({
      numCard01: info.numCard01Ref,
      numCard02: info.numCard02Ref,
      numCard03: info.numCard03Ref,
      numCard04: info.numCard04Ref,
      nameCard: info.nameCardRef,
      monthCard: info.monthCardRef,
      yearCard: info.yearCardRef,
      
      ccvCard: info.ccvCardRef,
      
    });
    console.log(info.yearCardRef);
    
  }
  return (
    <>
    <NewNavbar/>
    {/* <CreditCardImage creditCardInfo={creditCardInfo} /> */}
      <CreditCardForm  />
      
    </>
  )
}

export default CreditPage
