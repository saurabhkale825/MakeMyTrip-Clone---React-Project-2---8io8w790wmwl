import React from 'react'
import "./BusesDetails.css";
import BusesDetailsNav from './BusesDetailsNav';
import NavbarDetails from '../../Homepage/Navbar/NavbarDetails';
import ACIcon from "../../Assest/Icons/ACIcon.png";
import NonACIcon from "../../Assest/Icons/NonAcIcon.png";
import Sleeper from "../../Assest/Icons/Sleeper.png";
import Seater from "../../Assest/Icons/Seater.png";



function BusesDetails() {
  return (
    <div className='buses-details'>
        <NavbarDetails />
        <BusesDetailsNav />
        <div className='bus-details-content'>
          <div className='bus-details-filter-container'>
            <div className='bus-details-filter-container-top'>
              <h3 className='bus-details-filter-container-heading'>Filters</h3>
              <p className='bus-details-filter-container-p'>Clear All</p>
            </div>

            <ul>
              <li className='containerHorizontal'>
                  <div className='containerHorizontal-heading'>AC</div>
                  <div className='containerHorizontal-content'>
                      <div className='containerHorizontal-content-options'>
                        <span><img src={ACIcon} alt='icon'width={"30px"} /></span>
                        <span>AC</span>
                      </div>

                      <div className='containerHorizontal-content-options'>
                        <span><img src={NonACIcon} alt='icon'width={"30px"} /></span>
                        <span> Non AC</span>
                      </div>
                  </div>
              </li>

              <li className='containerHorizontal'>
                  <div className='containerHorizontal-heading'>Seat Type</div>
                  <div className='containerHorizontal-content'>
                      <div className='containerHorizontal-content-options'>
                        <span><img src={Sleeper} alt='icon'width={"40px"} /></span>
                        <span>Sleeper</span>
                      </div>

                      <div className='containerHorizontal-content-options'>
                        <span><img src={Seater} alt='icon'width={"25px"} /></span>
                        <span> Seater</span>
                      </div>
                  </div>
              </li>

              <li className='containerHorizontal'>
                  <div className='containerHorizontal-heading'>Single Seater/Sleeper</div>
                  <div className='containerHorizontal-content'>
                      <div  className='containerHorizontal-content-checkbox'>
                        
                      </div>
                      <div>
                        <div>Single</div>
                        <div></div>
                      </div>
                  </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default BusesDetails;