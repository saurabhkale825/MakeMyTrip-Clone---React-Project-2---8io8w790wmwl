import React from "react"
import {useEffect} from 'react'

function Demo() {

   const Booking = async() => {
    // const res = fetch('https://academics.newtonschool.co/api/v1/bookingportals/booking', {
    //     method: 'POST',
    //     headers: 
    //     { 
    //         'Content-Type': 'application/json',
    //         'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDU4YTgyYmJkOGMzMWJkZDU1ZTIzOCIsImlhdCI6MTcwOTMwNTM2MSwiZXhwIjoxNzQwODQxMzYxfQ.Wi4bD8A05jozmmhO8odNkVBC6O-InIG5gSnoNa8sHyM',
    //         'projectID' : '8io8w790wmwl'   
    //     },
    //     body: JSON.stringify({
    //         "bookingType": "hotel",
    //         "bookingDetails": {
    //             "hotelId": "6527dc50de44dd75f5271d99",
    //             "startDate": "2023-10-09T10:03:53.554+00:00",
    //             "endDate": "2023-10-09T10:03:53.554+00:00"
    //         }
    //     }),
    //    })
    //    .then((response) => response.json())
    //    .then((responseJson) => {
    //      console.log(responseJson);
    //    })
    //    .catch((error) => {
    //      console.error(error);
    //    });
    //    console.log(res);

    const response = await fetch('https://academics.newtonschool.co/api/v1/bookingportals/booking', {
            method: 'POST',
            headers: 
            { 
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDU4YTgyYmJkOGMzMWJkZDU1ZTIzOCIsImlhdCI6MTcwOTMwNTM2MSwiZXhwIjoxNzQwODQxMzYxfQ.Wi4bD8A05jozmmhO8odNkVBC6O-InIG5gSnoNa8sHyM',
                'projectID' : '8io8w790wmwl'   
            },
            body: JSON.stringify({
                "bookingType": "hotel",
                "bookingDetails": {
                    "hotelId": "6527dc50de44dd75f5271d99",
                    "startDate": "2023-10-09T10:03:53.554+00:00",
                    "endDate": "2023-10-09T10:03:53.554+00:00"
                }
            }),
           })

           const res = await response.json();
           console.log(res);
   }

   useEffect(() => {
    Booking(); 
   }, []);

  return (
    <div>Demo</div>
  )
}

export default Demo