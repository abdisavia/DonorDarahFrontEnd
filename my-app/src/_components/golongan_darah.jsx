import React, { useState, useEffect } from "react";


export default function DropDown() {
  const [selectedOption, setSelectedOption] = useState("");
  const [golongan, setgolongaList] = useState([]);
  
  useEffect(() => {
    // Mengambil data gologan darah dari API
    fetch("") // Ganti dengan URL API 
      .then((response) => response.json())
      .then((data) => {
        // Menyimpan data golongan darah ke dalam state
        setgolongaList(data);
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
    top: "-63px",
    right: "12vh"   
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
        <option value="" className="">Golongan Darah</option>
        {golongan.map((gologan) => (
          <option key={gologan.id} value={gologan.nama}>
            {gologan.nama}
          </option>
        ))}
      </select>
    </section>
  );
}
