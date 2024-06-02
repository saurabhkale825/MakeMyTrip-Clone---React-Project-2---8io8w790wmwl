import {useState , useEffect , useContext} from 'react'
import "./TrainBookingPage.css"
import UserDetails from "../../UserDetails/UserDetails"
import TrainContext from '../../../Context/TrainContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavbarDetails from '../../../Homepage/Navbar/NavbarDetails';

function TrainBookingShow() {

  const{coachType , seats} = useContext(TrainContext);
  const{itemId} = useParams();
  const [train , setTrain] = useState({});

  useEffect(() => {
    localStorage.setItem('value',"train")
}, []);


  const FetchIndiTrain = async() => {
    const response = await axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/train/${itemId}`,
    {
      headers: {
        projectID: "8io8w790wmwl",
      },
    }
    );

    setTrain(response?.data.data);
    // console.log(response?.data.data);
  }

  useEffect(() => {
    FetchIndiTrain();  
  }, [itemId]);

  return (
    <div className='train-booking-show'>
        <NavbarDetails />
        <div className='train-bookin-page-header'>
          <h3 className='text-xl text-white font-semibold ml-2'>Select Travellers</h3>
        </div>
        
        <div className='train-booking-show-container'>
            <div className='mt-3 w-4/5 mx-auto h-fit flex justify-between p-2'>
              <div className='w-3/5 h-full  text-left flex justify-between'>
                  <div  className='w-1/3 h-full p-2 ml-2 text-left'>
                    <div>
                    <h3 className='lg:text-2xl lg:text-lg text-xs lg:ml-0 ml-2 font-medium lg:font-semibold text-black'>{train?.trainName}</h3>
                    <p className='lg:flex block'>
                      <div className='lg:text-base text-xs'>{`#${train?.trainNumber}`}</div>
                      <div className='text-s  mt-1'>S M T W T F S</div>
                      </p>
                      </div>

                      <div className='mt-8'>
                        <p className='font-semibold lg:text-lg text-sm
                        '>Availablity Status</p>
                        <div className='border w-fit border-black rounded p-2 '>
                          <div className='flex justify-between'>
                            <p className='font-semibold text-black lg:text-base text-sm'>{coachType}</p>
                            <p className='text-teal-500 text-medium-font font-semibold ml-2'>{`AVAILABLE-${seats}`}</p>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className='w-2/3 h-full p-2 mx-6'>
                      <div className='flex justify-between border border-black p-2 rounded'>
                        <div className='flex flex-col items-center '>
                          <div className='lg:font-semibold font-medium text-black lg:text-base text-xs'>{train?.departureTime}</div>
                          <p className='text-s'>{train?.source}</p>
                        </div>

                        <div className='font-semibold lg:text-base text-xs lg:ml-2 mx-2'>
                          {train?.travelDuration}
                        </div>

                        <div className='flex flex-col items-center '>
                          <div className='font-semibold text-black lg:text-base text-xs'>{train?.arrivalTime}</div>
                          <p className='text-s'>{train?.destination}</p>
                        </div>
                      </div>
                    </div>
              </div>


              <div className='w-2/6 h-full border border-black p-3 text-left rounded'>
                  <h3 className='lg:text-lg text-sm font-semibold  border-b border-black ml-3'>Price Breakup</h3>
                  <div className='flex justify-between items-center mt-3 mx-2  border-b border-black px-3'>
                        <div className='text-medium-text'>Base Fare per Adult</div>
                        <div className='lg:text-lg text-xs lg:ml-0 ml-2 font-medium lg:font-semibold text-black'>{`₹ ${train.fare}`}</div>
                  </div>

                  <div className='flex justify-between items-center mt-3 mx-2  border-b border-black px-3'>
                        <div className='text-medium-text'>Tax</div>
                        <div className='lg:text-lg text-xs lg:ml-0 ml-2 font-medium lg:font-semibold text-black'>{`₹ ${Math.floor(train?.fare * 0.2)}`}</div>
                  </div>

                  <div className='flex justify-between items-center mt-3 mx-2  border-b border-black px-3'>
                        <div className='text-medium-text'>Tatkal Fare</div>
                        <div className='lg:text-lg text-xs lg:ml-0 ml-2 font-medium lg:font-semibold text-black'>{`₹ ${Math.floor(train?.fare * 0.45)}`}</div>
                  </div>

                  <div className='flex justify-between  items-center py-3 mx-2 bg-slate-300  border-b border-black px-3 lg:w-full w-fit'>
                        <div className='text-medium-text font-semibold'>Total Price per adult</div>
                        <div className='lg:text-lg text-xs lg:ml-0 ml-2 font-semibold text-black'>{`₹ ${Math.floor(train?.fare * 1.65)}`}</div>
                  </div>
              </div>
            </div>
        </div>
        
        <UserDetails />
    </div>
  )
}

export default TrainBookingShow