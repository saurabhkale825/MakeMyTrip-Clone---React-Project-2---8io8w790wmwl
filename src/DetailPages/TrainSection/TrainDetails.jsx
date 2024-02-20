import React from 'react'
import "./TrainDetails.css"
import NavbarDetails from '../../Homepage/Navbar/NavbarDetails'
import TrainSearchNav from './TrainSearchNav/TrainSearchNav'
import TrainIndividualCard from "./TrainIndividualCard/TrainIndividualCard";

function TrainDetails() {

  

  return (
    <>
    <NavbarDetails />
    <TrainSearchNav />
    <div className='train-details'>
      <div className='train-details-functionality'></div>
      <div className="train-details-content">
        <TrainIndividualCard />
      </div>
    </div>

    </>
  )
}

export default TrainDetails