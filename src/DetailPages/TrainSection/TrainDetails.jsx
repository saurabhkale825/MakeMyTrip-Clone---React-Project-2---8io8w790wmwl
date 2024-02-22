import {useContext , useEffect , useState} from 'react'
import "./TrainDetails.css"
import NavbarDetails from '../../Homepage/Navbar/NavbarDetails'
import TrainSearchNav from './TrainSearchNav/TrainSearchNav'
import TrainIndividualCard from './TrainIndividualCard/TrainIndividualCard'
import TrainContext from '../../Context/TrainContext'
import axios from 'axios'


function TrainDetails() {

  const {source , setSource , destination , setDesitination , travelDate , setTravelDate} = useContext(TrainContext);
  const [data , setData] = useState([]);
  const[selectedFilter , setSelectedFilter] = useState("");
  const [selectedSort , setSelectedSort] = useState("");
  const [sort , setSort] = useState("Default");
  const [showSortOption , setShowSortOption] = useState(true);
  const FetchTrains = async() => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/train?search={"source":"${source}","destination":"${destination}"}&day=Tue&sort={${selectedSort}}`,
        {
          headers: {
            projectID: "8io8w790wmwl",
          },
        }
      );

      setData(response.data?.data?.trains);

    } catch (error) {
      console.error('Error fetching train data:', error);
    }
  }
  

  const updateSort = (sort , selectedSort) => {
    setSort(sort);
    setSelectedSort(selectedSort);
  }

  useEffect(() => {
    updateSort(sort , selectedSort); 
  }, []);

  useEffect(() => {
    FetchTrains(); 
  }, [data]);

  return (
    <>
    <NavbarDetails />
    <TrainSearchNav />
    <div className='train-details'>
      <div className='train-details-sorting'>
        <div className='flex items-center  h-full' onClick={() => setShowSortOption(!showSortOption)}>
        <div className='ml-8'>Sorted By :</div>
        <div className='ml-2 text-blue-500' >{sort}</div>
        </div>
        {showSortOption === false ? <div  className='sort-option'>
          <div onClick={() => updateSort("Default" , "")}>Default</div>
          <div onClick={() =>updateSort("Price(Low to High)" , `"fare":1`)}>Price(Low to High)</div>
          <div  onClick={() => updateSort("Price(High to Low)" , `"fare":-1`)}>Price(High to Low)</div>
          <div onClick={() => updateSort("Seat Availibility" , `"availableSeats":1`)}> Seat Availibility</div>
          <div onClick={() => updateSort("Travel Time" , `"travelDuration":1`)}>Travel Time</div>
        </div>:null}
      </div>
     
      <div className='flex gap-1'>
      <div className='train-details-functionality'>
          <div className='flex justify-between items-center mx-3 mt-4 '>
            <div className='text-xl font-bold'>Filters</div>
            <div className='text-sm text-center text-blue-700 font-semibold cursor-pointer'>Clear All</div>
          </div>

          <div className="trains-details-functionality-container">
                <h3></h3>
                <div className='flex'>
                  <div></div>
                </div>
          </div>
      </div>

      <div className="train-details-content">
      <h3 className='text-left my-4 text-2xl font-bold text-slate-950'>{`Trains From ${source} To ${destination}`}</h3>
      {data?.length ? 
              data?.map((item) => (
                <div key={item._id}>
                  <TrainIndividualCard Trains={item} />
                  
                </div>
              ))   
            : (
              <p className="text-4xl font-bold text-black subpixel-antialiased relative border-2 border-black p-5 rounded-2xl">
                No Data Found
              </p>
            )}
      </div>
      </div>
    </div>

    </>
  )
}

export default TrainDetails