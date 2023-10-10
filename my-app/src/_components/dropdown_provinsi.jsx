import React, { useState, useEffect } from "react";


export default function DropDown() {
  const [selectedOption, setSelectedOption] = useState("");
  const [ProvinsiList, setProvinsiList] = useState([]);
  
  useEffect(() => {
    // Mengambil data provinsi dari API
    fetch("") // Ganti dengan URL API
      .then((response) => response.json())
      .then((data) => {
        // Menyimpan data provinsi ke dalam state
        setProvinsiList(data);
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
    top: "3px",
    right: "12vh"   
  };

  return (
    <section className="">
      <select className="dropdown border-2 border-stone-950 text-left rounded-md"
      style={dropdownStyle} 
        id="pilihan"
        name="pilihan"
        value={selectedOption}
        onChange={handleDropdownChange}
      >
        <option value="">Provinsi</option>
        {ProvinsiList.map((provinsi) => (
          <option key={provinsi.id} value={provinsi.nama}>
            {provinsi.nama}
          </option>
        ))}
      </select>
    </section>
  );
}
