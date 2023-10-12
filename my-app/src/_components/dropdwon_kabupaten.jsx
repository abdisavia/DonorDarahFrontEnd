import React, { useState, useEffect } from "react";


export default function DropDown() {
  const [selectedOption, setSelectedOption] = useState("");
  const [kabupatenList, setKabupatenList] = useState([]);
  
  useEffect(() => {
    // Mengambil data kabupaten dari API
    fetch("") // Ganti dengan URL API
      .then((response) => response.json())
      .then((data) => {
        // Menyimpan data kabupaten ke dalam state
        setKabupatenList(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const dropdownStyle = {
    height: "40px", 
    width: "150px",
    position: "relative",
    top: "-38px",
    left: "12.5vh"   
  };

  return (
    <section>
      <select className="dropdown border-2 border-stone-950 text-left rounded-md"
      style={dropdownStyle} 
        id="pilihan"
        name="pilihan"
        value={selectedOption}
        onChange={handleDropdownChange}
      >
        <option value="">Kabupaten</option>
        {kabupatenList.map((kabupaten) => (
          <option key={kabupaten.id} value={kabupaten.nama}>
            {kabupaten.nama}
          </option>
        ))}
      </select>
    </section>
  );
}
