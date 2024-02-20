import React from 'react'
import "./TrainIndividualCard.css"

function TrainIndividualCard() {

    const trains =  {
        "_id": "65b0c0bdd32aab0a6f3b7fdf",
        "trainName": "Shatabdi Express",
        "trainNumber": "840047",
        "source": "Ahmedabad Junction",
        "destination": "Allahabad Junction",
        "departureTime": "18:08",
        "arrivalTime": "06:33",
        "travelDuration": "12h 25m",
        "fare": 1964,
        "availableSeats": 271,
        "trainType": "Shatabdi",
        "coaches": [
            {
                "coachType": "2S",
                "numberOfSeats": 40,
                "_id": "65b0c0bdd32aab0a6f3b7fe0"
            },
            {
                "coachType": "2S",
                "numberOfSeats": 67,
                "_id": "65b0c0bdd32aab0a6f3b7fe1"
            },
            {
                "coachType": "1A",
                "numberOfSeats": 37,
                "_id": "65b0c0bdd32aab0a6f3b7fe2"
            },
            {
                "coachType": "CC",
                "numberOfSeats": 45,
                "_id": "65b0c0bdd32aab0a6f3b7fe3"
            },
            {
                "coachType": "3A",
                "numberOfSeats": 34,
                "_id": "65b0c0bdd32aab0a6f3b7fe4"
            },
            {
                "coachType": "3E",
                "numberOfSeats": 48,
                "_id": "65b0c0bdd32aab0a6f3b7fe5"
            }
        ],
        "daysOfOperation": [
            "Fri",
            "Wed",
            "Tue"
        ],
        "__v": 0
    }

    const FormatDay = (item) => {
        if(item === "Mon"){ 
            return "M";
        }
        else if(item === "Tue" || item === "Thu"){
            return "T";
        }
        else if(item === "Wed"){
            return "W";
        }
        else if(item === "Fri"){
            return "F";
        }
        else{
            return "S"
        }
    }
    

  return (
    <div className='train-individual-card'>
        <div className='train-individaul-card-first'>
            <div className='train-individual-cart-name'>
                <h2 className='trainName'>{trains.trainName}</h2>
                <div className='flex items-between flex-col'>
                    <span className='trainNumber text-xs'>{`${trains.trainNumber}`}</span>
                    <div className='flex justify-between items-center text-xs'>
                    <div>departs on:{trains.daysOfOperation.map((item) => (
                        <span className='xl-1'>{FormatDay(item)} </span>
                    ))}</div>
                    </div>
                </div>
            </div>
            
            <div className='train-departure-time'>
                <div className='text-lg font-bold'>{trains.departureTime}</div>
                <div className='text-xs'>{trains.source}</div>
            </div>
            <div className='empty-space mx-2'></div>
            <div className='train-duration '>
                <div className='text-lg font-bold'>{trains.travelDuration}</div>
                <div className='text-xs text-blue-700 font-semibold ml-1'>View Route</div>
            </div>
            <div className='empty-space mx-2'></div>
            <div className='train-arrival-time '>
                <div className='text-lg font-bold'>{trains.arrivalTime}</div>
                <div className='text-xs '>{trains.destination}</div>
            </div>

            <div className='train-fare'>
                <div className='text-xs font-normal'>Train Fare</div>
                <div className='train-fare-content'> ₹{trains.fare}</div>
            </div>
        </div>

        .
    </div>
  )
}

export default TrainIndividualCard