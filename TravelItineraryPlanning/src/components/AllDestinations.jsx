import axios from "axios";
import React, { useEffect, useState } from "react";


function AllDestinations() {
  const [getData, setGetData] = useState({});
  const [filter, setFilter] = useState("all");

  async function getDestinations() {
    try {
      let res = await axios.get(
        `https://travel-destinations-5a801-default-rtdb.firebaseio.com/destinations.json`
      );
      console.log(res.data);
      setGetData(res.data);
    } catch (err) {
      console.log(err + " Something went wrong");
    }
  }

  const filteredData = () => {
    if (filter === "all") {
      return Object.entries(getData);
    }
    return Object.entries(getData).filter(([id, value]) => value.type === filter);
  };

  useEffect(() => {
    getDestinations();
  }, []);
  return (
    <>
    
     <div className="btnBox">
        <button className="btn"  onClick={() => setFilter("all")}>All</button>
        <button className="btn" onClick={() => setFilter("popular")}>Popular</button>
        <button className="btn" onClick={() => setFilter("latest")}>Latest</button>
        <button className="btn" onClick={() => setFilter("romantic")}>Romantic</button>
      </div>

      <div className="container1">
        {filteredData().map(([id, value]) => (
          <div key={id} className="img-box">
            {/* <p>{value.type}</p> */}

            <img src={value.image} alt="" />
          </div>
        ))}
      </div>
      
    </>
  );
}

export default AllDestinations;
