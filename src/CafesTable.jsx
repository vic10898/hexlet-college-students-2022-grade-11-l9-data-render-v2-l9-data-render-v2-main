import React, { useState, useEffect } from 'react';
import FilterCafes from "./FilterCafes.jsx";

export default function CafesTable() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    fetch('/cafes')
       .then(res => res.json())
       .then(data => setCafes(data.cafes))
       .catch((err) => {
          console.log(err.message);
       });
  }, []);
  
  return (
    <div id="container" class="container m-3">
      <div className="cafesTable">
        <FilterCafes />
        <ul className="cardsList">
          {cafes.map(cafe => (
            <li className="card" key={cafe.id}>
              <img src={cafe.img || "https://via.placeholder.com/150"} alt={cafe.name}/>
              <h2>{cafe.name}</h2>
              <p>{cafe.desc}</p>
              <p>{cafe.address}</p>
              <p>Subway: {cafe.subwayCode}</p>
              <p>{cafe.workTime}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  )
}

