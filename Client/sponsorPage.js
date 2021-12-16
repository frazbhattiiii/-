import React from 'react'
import { NewContent } from '../components/newContent/newContent';
import { SponsorOne,SponsorTwo } from '../data/sponsorData';
import { SponsorContent } from '../components/sponsorContent/sponsorContent';
import { AboutheroThree, AboutheroTwo } from '../data/AboutData';
import SponsorForm from '../components/sponsorForm/sponsorForm';
import NewNavbar from '../components/newNavbar/newNavbar';
function SponsorPage() {
  return (
    <>
    <NewNavbar/>
    <SponsorContent {...SponsorOne}/>
    <SponsorContent {...SponsorTwo}/>
    <SponsorForm/>
      
    </>
  )
}

export default SponsorPage
