import React, { useState, useEffect } from "react";


export let golongan_darah = "";

export default function DropDownGolonganDarah() {
  const [selectedOption, setSelectedOption] = useState("");
  const [golongan, setgolongaList] = useState([]);

  const handleDropdownChange = (e) => {
    golongan_darah = e.target.value;
    setSelectedOption(e.target.value);
  };
  const dropdownStyle = {
    height: "40px", 
    width: "150px",
    top: "-63px",
    right: "12vh"   
  };

  return (
      <select className="dropdown border-2 border-stone-950 text-left rounded-md"
      style={dropdownStyle} 
        id="pilihan"
        name="pilihan"
        value={selectedOption}
        onChange={handleDropdownChange}
      >
        <option value="" className="">Golongan Darah</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="O">O</option>
      </select>
  );
}
