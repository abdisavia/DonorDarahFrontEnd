import React, { useState, useEffect } from "react";


export default function DropDown() {
  const [selectedOption, setSelectedOption] = useState("");
  const [kecamatanList, setKecamatanList] = useState([]);
  
  useEffect(() => {
    // Mengambil data kecamatan dari API
    fetch("") // Ganti dengan URL API 
      .then((response) => response.json())
      .then((data) => {
        // Menyimpan data kecamatan ke dalam state
        setKecamatanList(data);
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
    top: "-30px",
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
        <option value="">kecamatan</option>
        {kecamatanList.map((kecamatan) => (
          <option key={kecamatan.id} value={kecamatan.nama}>
            {kecamatan.nama}
          </option>
        ))}
      </select>
    </section>
  );
}
