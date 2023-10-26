import React, { useState, useEffect } from "react";
import { idKec } from "./dropdown_kecamatan";
import axios from "axios";

export let idKelu = "";

export async function getKelurahanData() {
  try{
    let responseKelurahan = await axios.get(`http://localhost:8000/api/get/kelurahan/${idKec}`)
    return responseKelurahan.data.kelurahan
  }catch(e){
    console.log(e.message)
    alert(e.message);
  }
}

function setidKelurahan(id){
  idKelu = id
}

export default function DropDownKelurahan() {
  const [selectedOption, setSelectedOption] = useState("");
  const [kelurahanList, setKelurahanList] = useState([]);
  

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDropdownClick = (e) => {
    try{
      getKelurahanData()
      .then(response => {
        setidKelurahan(e.target.value)
        setKelurahanList(response);
      })
    }catch(e){}
  }
  const RenderDropdowndata = () => {
    try{
      return kelurahanList.map((kelurahan) => (
        <option key={kelurahan.id} value={kelurahan.id}>
          {kelurahan.nama}
        </option>
      ))
    }catch(e){}
  }

  return (
      <select className="h-[40px] w-[200px]  border-2 border-stone-950 text-left rounded-md flex mb-3"
        id="pilihan"
        name="pilihan"
        value={selectedOption}
        onChange={handleDropdownChange}
        onClick = {handleDropdownClick}
      >
        <option value="">Kelurahan</option>
        <RenderDropdowndata/>
      </select>
  );
}
