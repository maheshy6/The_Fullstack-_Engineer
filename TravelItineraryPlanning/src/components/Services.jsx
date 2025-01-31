import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import axios from "axios";



//dependencies :- axios

function Services() {
  const [getData, setGetData] = useState({});
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getServices();
  }, []);

  async function getServices() {
    let res = await axios.get(
      `https://travel-services-b90a2-default-rtdb.firebaseio.com/services.json`
    );
    console.log(res);
    // Object.entries(res.data).map(([id, value])=>{
    //   console.log(value.name);
    // })

    setGetData(res.data);
  }

  const filteredData = () => {
    if (filter === "all") {
      return Object.entries(getData);
    }
    return Object.entries(getData).filter(([id, value]) => value.type === filter);
  };


  // const navigate = useNavigate();
{/* <Route path="/book-now" element={<BookNow />} /> */}
  // function RedirectPage(){
  //   navigate("/booking");
  // }

  return (
    <div>
      <Navbar />
      <div className="image-container">
        <img
          src="https://t4.ftcdn.net/jpg/08/58/42/39/360_F_858423980_xg0UIh9XUAndF89lkTqQAzcaWO23naQ0.jpg"
          alt="bg_image"
        />
        <h1 className="image-heading">Services</h1>
      </div>

      <div className="btn-box">
        <button className="btn"  onClick={() => setFilter("all")}>All</button>
        <button className="btn" onClick={() => setFilter("hotel")}>Hotel</button>
        <button className="btn" onClick={() => setFilter("resort")}>Resort</button>
      </div>

      <div>
        {filteredData().map(([id, value]) => (
          <div className="container" key={id}>
            <div className="img-box">
              <img src={value.image} alt="" />
            </div>
            <div className="contents">
              <p><b>Name : </b>{value.name}</p>
              <p><b>Location : </b>{value.location}</p>
              <p><b>Rating : </b>{value.rating}</p>
              <p><b>Style : </b>{value.style}</p>
              <p><b>Type : </b>{value.type}</p>
              <p><b>Price : </b> ₹{value.price}</p>
              <button  className="btn2">Book Now</button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Services;

// git checkout -b fs39_332283_day2
// git pull origin developer
// git add .
// git commit -m "payment files added"
// git push origin fs39_332283_day2
