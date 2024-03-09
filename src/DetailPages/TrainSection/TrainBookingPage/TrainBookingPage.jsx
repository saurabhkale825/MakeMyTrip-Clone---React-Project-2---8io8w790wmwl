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
                    <h3 className='text-xl font-semibold text-black'>{train?.trainName}</h3>
                    <p>
                      <span>{`#${train?.trainNumber}`}</span>
                      <span className='text-xs ml-4 pl-2'>S M T W T F S</span>
                      </p>
                      </div>

                      <div className='mt-8'>
                        <p className='font-semibold '>Availablity Status</p>
                        <div className='border border-black rounded p-2 '>
                          <div className='flex justify-between'>
                            <p className='font-semibold text-black'>{coachType}</p>
                            <p className='text-teal-500 font-semibold ml-2'>{`AVAILABLE-${seats}`}</p>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className='w-2/3 h-full p-2 mx-6'>
                      <div className='flex justify-between border border-black p-2 rounded'>
                        <div className='flex flex-col items-center '>
                          <div className='font-semibold text-black '>{train?.departureTime}</div>
                          <p>{train?.source}</p>
                        </div>

                        <div className='font-semibold '>
                          {train?.travelDuration}
                        </div>

                        <div className='font-semibold text-blackle hoachha'>
                          <div>{train?.arrivalTime}</div>
                          <p>{train?.destination}</p>
                        </div>
                      </div>
                    </div>
              </div>


              <div className='w-2/6 h-full border border-black p-3 text-left rounded'>
                  <h3 className='text-lg font-semibold  border-b border-black ml-3'>Price Breakup</h3>
                  <div className='flex justify-between items-center mt-3 mx-2  border-b border-black px-3'>
                        <div className='text-xs'>Base Fare per Adult</div>
                        <div className='text-lg font-semibold text-black'>{`₹ ${train.fare}`}</div>
                  </div>

                  <div className='flex justify-between items-center mt-3 mx-2  border-b border-black px-3'>
                        <div className='text-xs'>Tax</div>
                        <div className='text-lg font-semibold text-black'>{`₹ ${Math.floor(train?.fare * 0.2)}`}</div>
                  </div>

                  <div className='flex justify-between items-center mt-3 mx-2  border-b border-black px-3'>
                        <div className='text-xs'>Tatkal Fare</div>
                        <div className='text-lg font-semibold text-black'>{`₹ ${Math.floor(train?.fare * 0.45)}`}</div>
                  </div>

                  <div className='flex justify-between  items-center py-3 mx-2 bg-slate-300  border-b border-black px-3'>
                        <div className='text-sm font-semibold'>Total Price per adult</div>
                        <div className='text-lg font-semibold text-black'>{`₹ ${Math.floor(train?.fare * 1.65)}`}</div>
                  </div>
              </div>
            </div>
        </div>
        
        <UserDetails />
    </div>
  )
}

export default TrainBookingShow