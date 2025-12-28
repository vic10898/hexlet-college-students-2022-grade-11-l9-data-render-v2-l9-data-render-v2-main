import React, { useState, useEffect } from 'react';
import FilterCafes from "./FilterCafes.jsx";

export default function CafesTable() {
  const [cafes, setCafes] = useState([]);
  const [visibleCafes, setVisibleCafes] = useState([]);
  const subways = [
    {
      name: "Арбатская", code: "Arbat",
    },
    {
      name: "Александровский сад", code: "Alexanders Garden",
    },
    {
      name: "Московская", code: "Moscow",
    },
    {
      name: "Парк Культуры", code: "Culture",
    },
    {
      name: "Театральная", code: "Theater",
    },
  ];

  useEffect(() => {
    fetch('/cafes')
       .then(res => res.json())
       .then(data => {
          setCafes(data.cafes);
          setVisibleCafes(data.cafes);
        })
       .catch((err) => {
          console.log(err.message);
       });
  }, []);

  const handleCafesFiltered = (filteredCafes) => {
    setVisibleCafes(filteredCafes);
  };
  
  return (
    <div id="container" className="container m-3">
      <div className="cafesTable">
        <FilterCafes 
          subways={subways}
          cafes={cafes}
          onCafesFiltered={handleCafesFiltered}
        />
        <ul className="cardsList">
          {visibleCafes.map(cafe => (
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