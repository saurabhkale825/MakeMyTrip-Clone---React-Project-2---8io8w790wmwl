import React from "react";
import "./BookNowPage.css";
import { Link ,useParams} from "react-router-dom";

function BookNowPage() {

    
  return (
    <div className="book-now-page">
      <div className="book-now-page-heading">
        <div className="book-now-page-heading-first">
          <span>3 fare options</span>
          <p>available for your trip.</p>
        </div>

        <div className="book-now-page-heading-close">
          <Link to={"/flights/details"}>
            <img
              src="https://jsak.mmtcdn.com/flights/assets/media/cross-icon.8b0f8487.png"
              alt="logo"
              width="px"
              height="15px"
            />
          </Link>
        </div>
      </div>
      <div className="book-now-page-content">
        <div className="book-now-page-content-heading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
  );
}

export default BookNowPage;
