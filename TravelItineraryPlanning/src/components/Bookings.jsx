import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Bookings() {

    const [getData, setGetData] = useState({});

     async function bookingsData(){
        try{
            const res = await axios.get(`https://travel-services-b90a2-default-rtdb.firebaseio.com/bookings.json`)
            // console.log(res.data);
            setGetData(res.data);

        }catch(err){
            console.log(err+" something went wrong.")
        }
    }

    useEffect(()=>{
        bookingsData();
    },[])


  return (
    <>
    <h1 className='heading'>Booking History</h1>
    <div className='bookingsContainer'>
        
      {
        Object.entries(getData).map(([id,val])=>(
            <div key={id} className='contentsBox'>
                <p><b>Username: </b>{val.username}</p>
                <p><b>Gmail: </b>{val.email}</p>
                <p><b>Hotel or Resort: </b>{val.name}</p>
                <p><b>Price: </b>{val.price}</p>
                <p><b>Date: </b>{val.date}</p>
            </div>
        ))
      }
    </div>
    </>
  )
}

export default Bookings
