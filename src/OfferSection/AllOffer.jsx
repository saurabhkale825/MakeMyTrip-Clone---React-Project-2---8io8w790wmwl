import { useState, useEffect } from 'react';
import "./AllOffer.css";
import NavbarDetails from '../Homepage/Navbar/NavbarDetails';
import OfferCard from './OfferCard';
import axios from 'axios';

function AllOffer() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/offers`,
        {
          method: "GET",
          headers: {
            projectID: "8io8w790wmwl",
          },
        }
      );
      const data = response.data.data;
      setOffers(data.offers);
      console.log(data.offers);
    };
    fetchApi();
  }, []);

  return (
    <div className='all-offer'>
      <NavbarDetails />
      <div >
        <ul className='all-offer-content'>
          {
            offers.map((item) => (
              <li key={item._id}>
                <OfferCard offer={item} />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default AllOffer;
