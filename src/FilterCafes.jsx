export default function FilterCafes() {
    const subways = [
      {
        name: "Арбатская",
        code: "Arbat",
      },
      {
        name: "Александровский сад",
        code: "Alexanders Garden",
      },
      {
        name: "Московская",
        code: "Moscow",
      },
      {
        name: "Парк Культуры",
        code: "Culture",
      },
      {
        name: "Театральная",
        code: "Theater",
      },
    ];
  
    return (
      <div className="controls">
        <select name="subway" id="subway">
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
  
