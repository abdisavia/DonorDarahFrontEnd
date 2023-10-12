"use client";
<<<<<<< HEAD:my-app/src/app/pages/register/page.jsx
import { useState } from "react";
import axios from "axios";
=======
import {useState }from 'react';
import redirect from "next/navigation";
import  axios from 'axios';
>>>>>>> 77b01a4956d370cdb78d7ad7c72874315df3c516:my-app/src/app/(pages)/register/page.jsx
import Navbar from "@/_components/navbar";
import Provinsi from "@/_components/dropdown_provinsi";
import Kabupaten from "@/_components/dropdwon_kabupaten";
import Kecamatan from "@/_components/dropdown_kecamatan";
import Kelurahan from "@/_components/dropdown_kelurahan";
import Golongan from "@/_components/golongan_darah";
import "@/_styles/css/login.css";
import "@/_styles/css/regis.css";
import ErrorMessage from "@/_components/errorMessage";

export default function Register() {
<<<<<<< HEAD:my-app/src/app/pages/register/page.jsx
  const [data, setData] = useState({
    nama: "",
    telpon: "",
    golongan_darah: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  async function registrasi() {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/register/auth",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
=======
    const [data,setData] = useState({
      nama:"",
      telepon:"",
      golongan_darah:""
    });

  const [errorMessage, setErrorMessage] = useState("");

  async function registrasi(){
    try{
      const response = await axios.post("http://localhost:8000/api/register/auth", data);
      
    }catch(error){
      console.log(error)
>>>>>>> 77b01a4956d370cdb78d7ad7c72874315df3c516:my-app/src/app/(pages)/register/page.jsx
    }
  }

  const detect = (e) => {
    const { name, value } = e.target;

    if (value == "") {
      setErrorMessage(
        <ErrorMessage
          message="tidak boleh ada data yang kosong"
          kelas="w-[400px] h-auto bg-red text-white  absolute left-[-1px] bottom-[-50px] rounded-xl p-2"
        />
      );
    } else {
      setErrorMessage("");
      if (name == "telepon") {
        let detectNonNumber = value.match(/\D/g);
        if (detectNonNumber != null) {
          setErrorMessage(
            <ErrorMessage
              message="Harap Masukkan Nomor telpon dengan Nomor"
              kelas="w-[400px] h-auto bg-red text-white  absolute left-[-1px] bottom-[-50px] rounded-xl p-2"
            />
          );
          detectNonNumber = "";
        } else {
          setErrorMessage("");
<<<<<<< HEAD:my-app/src/app/pages/register/page.jsx
          setData((prevData) => ({
            ...prevData,
            [name]: [value],
          }));
=======
>>>>>>> 77b01a4956d370cdb78d7ad7c72874315df3c516:my-app/src/app/(pages)/register/page.jsx
        }
      }
      setData((prevData) => ({
         ...prevData,
         [name] : [value]
       }))
       console.log(data.nama)
    }
  };
  const Style = {
    // height: "40px", 
    // width: "150px",
    position: "relative",
    top: "-65px",
    right: "1.5vh" 
  };

  return (
    <section>
      <div className="my-bg">
        <Navbar itemsColor="text-white" />
<<<<<<< HEAD:my-app/src/app/pages/register/page.jsx
        <div className="row">
          <div class="rectangle-37">
            <div className="wraper text-center">
              <label className="text-black font-Title text-[40px]">
                Register
              </label>
              <form>
                <div className="input-container mb-3">
                  <img
                    className="input-icon"
                    src="/img/phone.svg"
                    alt="Icon"
                    height={20}
                    width={20}
                  />
                  <input
                    className="border-2 border-black rounded w-[305px] h-[40px] px-10"
                    type="tel"
                    placeholder="Masukkan No Anda"
                    name="noTelp"
                  />
                </div>
                <div>
                  <Provinsi />
                </div>
                <Kabupaten />
                <Kecamatan />
                <Kelurahan />
                <Golongan/>
                <div style={Style}>
                  <p className="tulisan text-xs">
                    Kode OTP dikirim via Whatsapp
                  </p>
                  <button className="tombol5 float-right border-2 bg-black text-xs text-white rounded-full h-8 w-40">
                    <a href="/pages/OTP">Kirim Kode OTP</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <div class="kotak-baru rounded-full"><p>Nomor anda belum terdaftar di sistem harap daftar terlebih dahulu</p></div> */}
=======
        <div className="grid place-items-center h-screen border-2 ">
          <form className="bg-white w-[400px] h-auto p-5 margin-auto border-2 relative rounded-xl" id="form">
            <h1 className='font-3xl font-Title text-center text-4xl'>Registrasi</h1>
            <label htmlFor="nama">Nama :</label>
            <input type="text" id="nama" name="nama" onChange={detect} placeholder="Masukkan Nama" className="block border-2 w-full mt-2"/>
            <img src="/img/phone.svg"></img>
            <input type="text" id="telpon"name="telepon" onChange={detect} placeholder="Masukkan Nomor Whatsapp" className="block border-2 w-full mt-2" />
            <label htmlFor="golongan_darah">Golongan Darah:</label>
            <input type="text" id="golongan_darah"name="golongan_darah" onChange={detect} placeholder="masukkan golongan darah" className="block border-2 w-full mt-2"/>
            <button type="button"  onClick={registrasi} className="bg-red w-20 h-10 rounded-3xl mt-2 me-2 text-white">Submit</button>
            {errorMessage}
          </form>
>>>>>>> 77b01a4956d370cdb78d7ad7c72874315df3c516:my-app/src/app/(pages)/register/page.jsx
        </div>
      </div>
    </section>
  );
}
