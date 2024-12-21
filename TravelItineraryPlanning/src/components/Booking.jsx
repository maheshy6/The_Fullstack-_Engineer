import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

function Booking() {

  const[getData, setGetData] = useState({});

  const {id} = useParams();
  // console.log(id);

  const usernameRef = useRef();
  const emailRef = useRef();
  const dateRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();

  async function  fetchService() {
    let res = await axios.get(`https://travel-services-b90a2-default-rtdb.firebaseio.com/services/${id}.json`)
    // console.log(res.data);
    setGetData(res.data);
    
  }

  async function handleSubmit(e){
    e.preventDefault();

    const allData = {
      username : usernameRef.current.value,
      email : emailRef.current.value,
      date : dateRef.current.value,
      name : nameRef.current.value,
      price : priceRef.current.value
    }

    console.log(allData);

    try{
      const res = await axios.post(`https://travel-services-b90a2-default-rtdb.firebaseio.com/bookings.json`, allData);
      console.log( res.data);
      alert("Submitted Successfully!")
    }catch(err){
      console.log(err+" something went wrong.")
    }

  }

  

  useEffect(()=>{
    fetchService();
  },[id])

  return (
    <>
    
      <div className="containerForm">
        <div className="formBox">
        <h1 style={{textAlign:"center", color:"green"}}>Booking</h1>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" ref={usernameRef} name="username" className="inputField" placeholder="Username" required />
            <input type="email" ref={emailRef} name="email" className="inputField" placeholder="Email" required />
            <input type="date" ref={dateRef} name="sdate" className="inputField" required />
            <small>Hotel or Resort</small>
            <input type="text" ref={nameRef} name="name" value={getData.name || ""} className="inputField" disabled />
            <small>Price</small>
            <input type="text" ref={priceRef} name="price" value={getData.price || ""} className="inputField" disabled />
            <button type="submit" className="btn2">Submit</button>
          </form>
        </div>
      </div>

      
    </>
  );
}

export default Booking;
