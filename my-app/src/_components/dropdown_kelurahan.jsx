import React, { useState, useEffect } from "react";


export default function DropDown() {
  const [selectedOption, setSelectedOption] = useState("");
  const [kelurahanList, setKelurahanList] = useState([]);
  
  useEffect(() => {
    // Mengambil data kelurahan dari API
    fetch("") // Ganti dengan URL API
      .then((response) => response.json())
      .then((data) => {
        // Menyimpan data kelurahan ke dalam state
        setKelurahanList(data);
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
    top: "-70px",
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
        <option value="">Kelurahan</option>
        {kelurahanList.map((kelurahan) => (
          <option key={kelurahan.id} value={kelurahan.nama}>
            {kelurahan.nama}
          </option>
        ))}
      </select>
    </section>
  );
}
