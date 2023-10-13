import React, { useState, useEffect } from "react";


export default function DropDown() {
  const [selectedOption, setSelectedOption] = useState("");

  const golongan = ["A", "A+", "A-", "B", "B+", "B-", "O", "O+", "O-", "AB", "AB+", "AB-"]

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
        {golongan.map((golongan) => (
          <option key={golongan} value={golongan}>
            {golongan}
          </option>
        ))}
      </select>
    </section>
  );
}
