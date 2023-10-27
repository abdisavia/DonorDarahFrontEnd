"use client";
import Navbar from "@/_components/navbar";
import "@/_styles/css/login.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { NextResponse } from "next/server";

export default function Otp() {
  const [session, setSession] = useState({})
  const [data,setData] = useState()
  const getcsrf = async () => {
    try{
      let csrf = await axios.get("http://localhost:8000/api/get-session-data")
      console.log(csrf.data)  
      setSession(csrf.data)

    }catch(e){
      alert(e.message)
    }
  }

  useEffect(() => {
    getcsrf();
  },[])

  async function verification(){
    try{
      setData({
        "code" : parseInt(document.getElementById("kodeOTP").value)
      })
      console.log(data)
      console.log(session.csrf_token)
      await axios.post("http://localhost:8000/api/register/auth/verify",
      data,
      {
        headers:{
          "csrf_token" : session.csrf_token,
          "session_data" : session.session_data
        }
      }
    );
    }catch(e){
      alert(e.message);
    };
  }




  return (
    <main>
      <div className="my-bg">
        <Navbar itemsColor="text-white" />
        <div className="row">
          <div className="rectangle-36">
            <div className="wraper text-center">
              <form>
               <h1 className="text-black font-Title text-[40px]">OTP</h1>
                <div className="input-container">
                  <img
                    className="input-icon"
                    src="/img/phone.svg"
                    alt="Icon"
                    height={20}
                    width={20}
                  />
                  <input
                    className="border-2 border-black rounded w-[280px] h-[40px] px-10"
                    type="tel"
                    id="kodeOTP"
                    placeholder="Masukkan Kode OTP"
                    name="kodeOTP"
                  />
                </div>
                <p className="tulisan text-xs"></p>
                <button type="button" className=" border-2 bg-black text-xs text-white rounded-full py-2 px-3" onClick={verification}>
                  Kirim Kode OTP
                </button>
                <br/>
                <a href="/pages/Login" className="text-xs">Sudah Memiliki Akun</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
