"use client";
import { Suspense, useState } from "react";
import axios from "axios";
import Navbar from "@/_components/navbar";
import Dropdown from "@/_components/Dropdown/dropdown";
import "@/_styles/css/login.css";
import "@/_styles/css/regis.css";
import DataDiri from "./DataDiri";
import Alamat from "./Alamat";

export default function Register() {
  const [data, setData] = useState({
    "nama" : "",
  "telepon" : "",
  "golongan_darah" : "",
  "provinsi_id" : "",
  "kabupaten_id" : "",
  "kecamatan_id" : "",
  "kelurahan_id" : ""});
  const [session, setSession] = useState({});
  const [buttonNext, setButtonNext] = useState(false)

  
  async function registrasi() {
    try{
      await axios.post(
        "http://localhost:8000/api/register/auth",
        data,{
          headers: {
            "csrf_token" : session.csrf_token,
            "session_data" : session.session_data
          }
        }
        );
      } catch (error) {
        alert(error);
      }
    }
    
    useState({
      registrasi
    },[])

  const getcsrf = async () => {
    let cookie = await axios.get("http://localhost:8000/api/senctum/csrf-cookie")
    setSession(cookie)
  }

  const handleButton = () => {
    setButtonNext(!buttonNext);
    let progressbar = document.getElementById("ProgressBar").firstElementChild;
    progressbar.classList.remove("w-1/2");
    progressbar.classList.remove("animateHalf");
    progressbar.classList.remove("animateFullHalf");
    progressbar.classList.add("w-full");
    progressbar.classList.add("animateFull");
  }

  const handleKembali = () =>{
    setButtonNext(!buttonNext);
    let progressbar = document.getElementById("ProgressBar").firstElementChild;
    progressbar.classList.remove("animateFull");
    progressbar.classList.remove("w-full");
    progressbar.classList.add("w-1/2");
    progressbar.classList.add("animateFullHalf");
  }

  

  return (
    <section>
      <div className="my-bg">
        <Navbar itemsColor="text-white" />
        <div className="row">
            <div className="rectangle-37">
              <div className="wraper text-center relative">
                  <h1 className="text-black font-Title text-[40px] block absolute top-[4%]">
                    Register
                  </h1>
                  <div id="ProgressBar" className="absolute h-5 w-[31rem] rounded-full border border-black top-[17%]"><div className="bg-red w-1/2 animateHalf h-full rounded-full"></div></div>
                <form className="w-full px-5 py-50 font-Subtitle">
                  { buttonNext ?
                    <>
                      <Alamat />
                      <div className="flex justify-between px-32">
                        <button type="button" onClick={handleKembali} className="border-2 border-red rounded-full text-red py-2 px-3">
                          Kembali
                        </button>
                        <button type="button"  className="border-2 bg-red text-l font-bold p-3 text-white rounded-e-[25px] rounded-s-[5px] flex justify-center items-center">
                          Kirim OTP
                          <img src="/img/ArrowNext.svg" alt="" className="ms-3"/>
                        </button>
                      </div>
                    </> 
                    : 
                    <div className="">
                    <DataDiri data={data} action={(newValue)=>{setData(newValue)}}/>    
                    </div>
                  }
                  <div className="flex justify-end px-[5rem]">
                      {buttonNext ? "" 
                      :
                      <button type="button" onClick={handleButton} className="border-2 bg-red text-l font-bold p-3 text-white rounded-e-[25px] rounded-s-[5px] flex justify-center items-center font-Subtitle">
                            Selanjutnya
                            <img src="/img/ArrowNext.svg" alt="" className="ps-2"/>
                      </button>
                      }
                  </div>
                      
                </form>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
