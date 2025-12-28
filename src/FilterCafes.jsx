import React, { useState } from 'react';

export default function FilterCafes({ subways=[], cafes = [], onCafesFiltered }) {
  const [selectedSubway, setSelectedSubway] = useState('All');

  const handleSubwayChange = (event) => {
    const value = event.target.value;
    setSelectedSubway(value);
    
    let filtered;
    if (value === 'All') {
      filtered = cafes;
    } else {
      filtered = cafes.filter(cafe => cafe.subwayCode === value);
    }
    
    if (onCafesFiltered) {
      onCafesFiltered(filtered);
    }
  };

  return (
    <div className="controls">
      <select name="subway" id="subway" value={selectedSubway} onChange={handleSubwayChange}>
       <option value="All">Все</option>
        {subways.map((subway, index) => (
          <option value={subway.code} key={index}>
            {subway.name}
          </option>
        ))}
      </select>
    </div>
  )
}