import { useState, useEffect , useContext } from "react";
import "./TravellerSection.css";
import MyContext from "../../../Context/MyContext";

function TravellerSection() {
  const [selectedAdults, setSelectedAdults] = useState(1);
  const [selectedChildren, setSelectedChildren] = useState(0);
  const [selectedInfants, setSelectedInfants] = useState(0);
  
  const{traveller , setTraveller , selectedClass , setSelectedClass , setShowTravellerSection} = useContext(MyContext);

  
  const updatedTraveller =()=> selectedAdults + selectedChildren + selectedInfants;
 
  const handleApply = () => {
    setTraveller(updatedTraveller());
    setShowTravellerSection(false);  
  }
  

  return (
    <div className="traveller-section">
      <div className="traveller-section-adults">
        <div className="traveller-section-adults-heading">ADULTS (12y+)</div>
        <div className="traveller-section-adults-content">
          on the day of travel
        </div>
        <div className="traveller-section-adults-div">
          <span>
            <ol className="traveller-section-adults-number">
              <li id="1" onClick={() => setSelectedAdults(1)} className={selectedAdults === 1 ? "traveller-section-adults-number-li-selected" : "traveller-section-adults-number-li"} 
              >
                1
              </li>
              <li id="2" onClick={() => setSelectedAdults(2)}
              className={selectedAdults === 2 ? "traveller-section-adults-number-li-selected" : "traveller-section-adults-number-li"}>
                2
              </li>
              <li id="3" onClick={() => setSelectedAdults(3)}
              className={selectedAdults === 3 ? "traveller-section-adults-number-li-selected" : "traveller-section-adults-number-li"}>
                3
              </li>
              <li id="4" onClick={() => setSelectedAdults(4)}
              className={selectedAdults === 4 ? "traveller-section-adults-number-li-selected" : "traveller-section-adults-number-li"}>
                4
              </li>
              <li id="5" onClick={() => setSelectedAdults(5)}
              className={selectedAdults === 5 ? "traveller-section-adults-number-li-selected" : "traveller-section-adults-number-li"}>
                5
              </li>
              <li id="6" onClick={() => setSelectedAdults(6)}
              className={selectedAdults === 6 ? "traveller-section-adults-number-li-selected" : "traveller-section-adults-number-li"}>     
                6
              </li>
              <li id="7" onClick={() => setSelectedAdults(7)}
              className={selectedAdults === 7 ? "traveller-section-adults-number-li-selected" : "traveller-section-adults-number-li"}>
                7
              </li>
              <li id="8" onClick={() => setSelectedAdults(8)}
              className={selectedAdults === 8 ? "traveller-section-adults-number-li-selected" : "traveller-section-adults-number-li"}>
                8
              </li>
              <li id="9" onClick={() => setSelectedAdults(9)}
              className={selectedAdults === 9 ? "traveller-section-adults-number-li-selected" : "traveller-section-adults-number-li"}>
                9
              </li>
            </ol>
          </span>

          <span className={selectedAdults === 10 ? "traveller-section-adults-number-morethan-selected" : "traveller-section-adults-number-morethan"}>
            <p onClick={() => setSelectedAdults(10)}>{`>9`}</p></span>
        </div>
      </div>

      <div className="traveller-section-second-options">
        <div className="traveller-section-second-options-content">
          <div className="traveller-section-children-heading">
            CHILDREN (2y-12y)
          </div>
          <div className="traveller-section-children-content">
            on the day of travel
          </div>
          <div className="traveller-section-children-div">
            <span>
              <ol className="traveller-section-children-number">
                <li  className={selectedChildren === 0 ? "traveller-section-children-number-li-selected":"traveller-section-children-number-li"}
                onClick={() => setSelectedChildren(0)}>0</li>
                <li  className={selectedChildren === 1 ? "traveller-section-children-number-li-selected":"traveller-section-children-number-li"}
                onClick={() => setSelectedChildren(1)}>1</li>
                <li  className={selectedChildren === 2 ? "traveller-section-children-number-li-selected":"traveller-section-children-number-li"}
                onClick={() => setSelectedChildren(2)}>2</li>
                <li  className={selectedChildren === 3 ? "traveller-section-children-number-li-selected":"traveller-section-children-number-li"}
                onClick={() => setSelectedChildren(3)}>3</li>
                <li  className={selectedChildren === 4 ? "traveller-section-children-number-li-selected":"traveller-section-children-number-li"}
                onClick={() => setSelectedChildren(4)}>4</li>
                <li  className={selectedChildren === 5 ? "traveller-section-children-number-li-selected":"traveller-section-children-number-li"}
                onClick={() => setSelectedChildren(5)}>5</li>
              </ol>
            </span>
            <span className={selectedChildren === 6 ? "traveller-section-children-morethan-selected":"traveller-section-children-morethan"} 
            onClick={() => setSelectedChildren(6)}>{`>6`}</span>
          </div>
        </div>
        <div className="traveller-section-second-options-content">
          <div className="traveller-section-children-heading">
            INFANTS (below 2y)
          </div>
          <div className="traveller-section-children-content">
            on the day of travel
          </div>
          <div className="traveller-section-children-div">
            <span>
              <ol className="traveller-section-children-number">
                <li className={selectedInfants === 0 ?"traveller-section-children-number-li-selected" :"traveller-section-children-number-li"}
                onClick={() =>setSelectedInfants(0)}>0</li>
                <li  className={selectedInfants === 1 ?"traveller-section-children-number-li-selected" :"traveller-section-children-number-li"} onClick={() =>setSelectedInfants(1)}>1</li>
                <li  className={selectedInfants === 2 ?"traveller-section-children-number-li-selected" :"traveller-section-children-number-li"} onClick={() =>setSelectedInfants(2)}>2</li>
                <li  className={selectedInfants === 3 ?"traveller-section-children-number-li-selected" :"traveller-section-children-number-li"} onClick={() =>setSelectedInfants(3)}>3</li>
                <li  className={selectedInfants === 4 ?"traveller-section-children-number-li-selected" :"traveller-section-children-number-li"} onClick={() =>setSelectedInfants(4)}>4</li>
                <li  className={selectedInfants === 5 ?"traveller-section-children-number-li-selected" :"traveller-section-children-number-li"} onClick={() =>setSelectedInfants(5)}>5</li>
              </ol>
            </span>
            <span className={selectedInfants === 6 ? "traveller-section-children-morethan-selected":"traveller-section-children-morethan"}
            onClick={() => setSelectedInfants(6)}>{`>6`}</span>
          </div>
        </div>
      </div>

      <div className="traveller-section-travel-class">
        <div className="traveller-section-travel-class-heading">
          CHOOSE TRAVEL CLASS
        </div>
        <div className="travel-section-travel-class-content">
          <div
            className={
              selectedClass === "economy"
                ? "travel-section-travel-class-content-options-selected"
                : "travel-section-travel-class-content-options"
            }
            onClick={() => setSelectedClass("economy")}
          >
            Economy/Premium Economy
          </div>

          <div
          className={
            selectedClass === "premium"
              ? "travel-section-travel-class-content-options-selected"
              : "travel-section-travel-class-content-options"
          }
          onClick={() => setSelectedClass("premium economy")}>
            Premium Economy
          </div>
          <div 
          className={
            selectedClass === "business"
              ? "travel-section-travel-class-content-options-selected"
              : "travel-section-travel-class-content-options"
          }
          onClick={() => setSelectedClass("business")}>
            Business
          </div>
        </div>
      </div>
      <div className="traveller-section-error-div">
        {(selectedInfants > selectedAdults)?<>Number of infants cannot be more than adults </> : null}
      </div>
      <div className="traveller-section-apply-button"
      onClick={handleApply}>Apply</div>
    </div>
  );
}

export default TravellerSection;
