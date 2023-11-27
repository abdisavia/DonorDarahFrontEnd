"use client";
import { Suspense, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/_components/navbar";
import Dropdown from "@/_components/Dropdown/dropdown";
import "@/_styles/css/login.css";
import "@/_styles/css/regis.css";
import DataDiri from "./DataDiri";
import DataDiri2 from "./DataDiri2";
import Alamat from "./Alamat";
import Verfikasi from "./verifikasi";

export default function Register() {
  const [data, setData] = useState({
    nama: "",
    telepon: "",
    golongan_darah: "",
    provinsi_id: "",
    kabupaten_id: "",
    kecamatan_id: "",
    kelurahan_id: "",
  });
  const [session, setSession] = useState({});
  const [buttonNext, setButtonNext] = useState(0);
  let form;
  let nextBtn;

  async function registrasi() {
    try {
      await axios.post("http://localhost:8000/api/register/auth", data, {
        headers: {
          csrf_token: session.csrf_token,
          session_data: session.session_data,
        },
      });
    } catch (error) {
      alert(error);
    }
  }

  useState(
    {
      registrasi,
    },
    []
  );

  const getcsrf = async () => {
    let cookie = await axios.get("http://localhost:8000/api/get-session-data");
    setSession(cookie);
  };

  const handleButton = () => {
    const pagi = document.getElementById("pagination").childNodes[buttonNext + 1];
    setButtonNext(buttonNext + 1);
    console.log(buttonNext);
    formRendering();
    pagi.classList.remove("border-2");
    pagi.classList.remove("border-red");
    pagi.classList.add("bg-red");
  };
  
  const handleKembali = () => {
    const pagi = document.getElementById("pagination").childNodes[buttonNext];
    setButtonNext(buttonNext - 1);
    pagi.classList.remove("bg-red");
    pagi.classList.add("border-2");
    pagi.classList.add("border-red");
  };

  const nextButton = () => {
    if(buttonNext == 0){
      return <button
                    type="button"
                    onClick={handleButton}
                    className="border-2 bg-red text-l font-bold p-3 text-white rounded-e-[25px] rounded-s-[5px] flex justify-center items-center font-Subtitle"
                  >
                    Selanjutnya
                    <img src="/img/ArrowNext.svg" alt="" className="ps-2" />
                  </button>;

    }else if (buttonNext == 1){
      return (
        <div className="flex justify-between w-full mx-2">
          <button
            type="button"
            onClick={handleKembali}
            className="border-2 border-red bg-transparent text-l font-bold p-3 text-red rounded-l-[25px] rounded-s-[5px] flex justify-center items-center "
          >
            <img src="/img/Vector (1).svg" alt="" className="ps-2 mr-2" />
            Kembali
          </button>

          <button
            type="button"
            onClick={handleButton}
            className="border-2 bg-red text-l font-bold p-3 text-white rounded-e-[25px] rounded-s-[5px] flex justify-center items-center"
          >
            Kirim OTP
            <img src="/img/ArrowNext.svg" alt="" className="ms-3" />
          </button>
        </div>
      )
    }else if(buttonNext == 2){
      // registrasi();
      return(
        <div className="flex justify-between w-full mx-2">
          <button
            type="button"
            onClick={handleKembali}
            className="border-2 border-red bg-transparent text-l font-bold p-3 text-red rounded-l-[25px] rounded-s-[5px] flex justify-center items-center "
          >
            <img src="/img/Vector (1).svg" alt="" className="ps-2 mr-2" />
            Kembali
          </button>

          <button
            type="button"
            onClick={handleButton}
            className="border-2 bg-red text-l font-bold p-3 text-white rounded-e-[25px] rounded-s-[5px] flex justify-center items-center"
          >
            Verrifikasi
            <img src="/img/ArrowNext.svg" alt="" className="ms-3" />
          </button>
        </div>
      )
    }else if (buttonNext == 3){
      return(
              <div className="flex justify-between w-full mx-2">
                <button
                  type="button"
                  onClick={handleKembali}
                  className="border-2 border-red bg-transparent text-l font-bold p-3 text-red rounded-l-[25px] rounded-s-[5px] flex justify-center items-center "
                >
                  <img src="/img/Vector (1).svg" alt="" className="ps-2 mr-2" />
                  Kembali
                </button>

                <a 
                  href="/verfikasi"
                  type="button"
                  className="border-2 bg-red text-l font-bold p-3 text-white rounded-e-[25px] rounded-s-[5px] flex justify-center items-center"
                >
                  Selesai
                  <img src="/img/ArrowNext.svg" alt="" className="ms-3" />
                </a>
              </div>
      )
    }
  }

  const formRendering = () => {
    if(buttonNext == 0){
      return <DataDiri data={data} action = {(newValue) => {setData(newValue)}}/>
    }else if (buttonNext == 1){
      document.getElementById("title").classList.remove("hidden");
      document.getElementById("title").classList.add("block");
      return <DataDiri2 data = {data} action ={(newValue) => {setData(newValue)}}/>
    }else if(buttonNext == 2){
      document.getElementById("title").classList.remove("block");
      document.getElementById("title").classList.add("hidden");
      return <Verfikasi data={data} action={(newValue)=>{setData(newValue)}} />;
    }else if(buttonNext == 3){
      document.getElementById("title").classList.remove("hidden");
      document.getElementById("title").classList.add("block");
      return <Alamat />;
    }
  }


  return (
    <section>
      <div className="my-bg">
        <Navbar itemsColor="text-white"/>
        <div className="row">
          <div className="rectangle-37">
            <div className="wraper text-center relative">
              <h1 id="title" className="text-black font-Title text-[40px] block absolute top-[4%]">
                Register
              </h1>
                  <div className=" flex justify-center items-center  mx-auto absolute top-[17%]" id="pagination">
                    <div className="w-14 h-3 bg-red me-2 rounded-full"></div>
                    <div className="w-14 h-3  rounded-full border-2 border-red me-2"></div>
                    <div className="w-14 h-3  rounded-full border-2 border-red me-2"></div>
                    <div className="w-14 h-3  rounded-full border-2 border-red"></div>
                  </div>
              <form className="w-full px-5 py-50 font-Subtitle mt-10">
                { formRendering() }
                <div className="flex justify-end px-[5rem]">
                  { nextButton() }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
