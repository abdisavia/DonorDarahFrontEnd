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

  const handleNextButton = () => {
    setButtonNext(!buttonNext);
  }

  

  return (
    <section>
      <div className="my-bg">
        <Navbar itemsColor="text-white" />
        <div className="row">
            <div className="rectangle-37">
              <div className="wraper text-center">
                <form className="w-full px-5 py-50">
                  <h1 className="text-black font-Title text-[40px] block">
                    Register
                  </h1>
                  { buttonNext ?
                    <>
                      <div id="ProgressBar" className="h-5 w-1/2 rounded-full border border-black mx-auto my-2"><div className="bg-red w-full transition-[width] h-full rounded-full"></div></div>
                      <Alamat />
                      <button className="border-2 border-red rounded-full text-red py-2 px-3">
                        Kembali
                      </button>
                      <button type="button"  className="border-2 bg-black text-l font-bold p-3 text-white rounded-full ">
                        Kirim OTP
                      </button>
                    </> 
                    : 
                    <div className="">
                      <div id="ProgressBar1" className="h-5 w-1/2 rounded-full border border-black mx-auto my-2"><div className="bg-red w-1/2 h-full rounded-full"></div></div>
                      <DataDiri data={data} action={(newValue)=>{setData(newValue)}}/>    
                    </div>
                  }
                  {buttonNext ? "" 
                  :
                  <button type="button" onClick={handleNextButton} className="border-2 bg-black text-l font-bold p-3 text-white rounded-full ">
                        Selanjutnya
                  </button>
                  }
                      
                      
                  
                </form>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
