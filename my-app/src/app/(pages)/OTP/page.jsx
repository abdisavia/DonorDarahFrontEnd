"use client";
import Navbar from "@/_components/navbar";
import "@/_styles/css/login.css";
import axios from "axios";
import { useEffect, useState } from "react";
import MyModal from './myModal';
import { NextResponse } from "next/server";

export default function Verifikasi3() {
  const [session, setSession] = useState({});
  const [data, setData] = useState();
  const [inputvalue, setInputValue]=useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
 

  const handlechage=(e)=>{
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputvalue.trim() === '') {
      setErrorMessage('Input tidak boleh kosong!');
      setModalOpen(true);
    } else {
      // Lakukan sesuatu dengan nilai input
      console.log('Nilai input:', inputvalue);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setErrorMessage('');
  };

  const getcsrf = async () => {
    try {
      let csrf = await axios.get("http://localhost:8000/api/get-session-data");
      console.log(csrf.data);
      setSession(csrf.data);
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    getcsrf();
  }, []);

  async function verification() {
    try {
      setData({
        code: parseInt(document.getElementById("kodeOTP").value),
      });
      console.log(data);
      console.log(session.csrf_token);
      await axios.post("http://localhost:8000/api/register/auth/verify", data, {
        headers: {
          csrf_token: session.csrf_token,
          session_data: session.session_data,
        },
      });
    } catch (e) {
      alert(e.message);
    }
  }


  return (
    <>
      <div className="my-bg">
        <Navbar itemsColor="text-white" />
        <div className="row">
          <div
            className="bg-white bg-no-repeat bg-cover bg-center rounded-lg"
            style={{ width: "35rem", height: "25rem" }}
          >
            <div className="wraper text-center">
              <form className="w-full h-full p-5 relative">
                <h1 className="text-black font-Title text-[40px] w-full block left-0 absolute">
                  verifikasi
                </h1>
                <div className="flex justify-center items-center h-full my-auto ">
                  <div className="text-center">
                    <img
                      className="mx-auto mt-8"
                      src="/img/ic_baseline-whatsapp.svg"
                      alt="Icon"
                      height={100}
                      width={100}
                    />
                    <p>Kode OTP dikirim ke nomer :</p>
                    <p className="font-bold">nomer Hp</p>
                    <div>
                      <input
                        value={inputvalue}
                        onChange={handlechage}
                        type="text"
                        placeholder="Masukan Kode OTP"
                        className="mt-1 p-2 border border-black rounded-md w-80 text-center"
                      />
                    </div>
                    <p className="mt-3 mb-5">
                      <a href="#" className="border-b border-black">
                        Kirim ulang{" "}
                      </a>{" "}
                      atau{" "}
                      <a href="/Login" className="border-b border-black">
                        {" "}
                        ganti nomor
                      </a>
                    </p>
                    <div className="" style={{ marginLeft: "23rem" }}>
                      <button
                        type="button"
                        className="border-1 bg-red text-l font-bold p-2 text-white rounded-e-[25px] rounded-s-[5px] flex items-center font-Subtitle"
                        onClick={()=>{verification();handleSubmit()}}
                      >
                        Kirim
                        <img src="/img/ArrowNext.svg" alt="" className="ps-2" />
                      </button>
                      <MyModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        errorMessage={errorMessage}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div class="kotak-baru rounded-full"><p>Nomor anda belum terdaftar di sistem harap daftar terlebih dahulu</p></div> */}
        </div>
      </div>
    </>
  );
}
