"use client";
import { Suspense, useState, useEffect } from "react";
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
<<<<<<< HEAD
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    getcsrf();
  }, []);
=======
  const [buttonNext, setButtonNext] = useState(false)
>>>>>>> 1b7a3ad9116c58ac444ce2c4fae31781b4137a7e

  
  async function registrasi() {
<<<<<<< HEAD
    try {
      setData({
        nama: document.getElementById("nama").value,
        telepon: document.getElementById("telpon").value,
        golongan_darah: golongan_darah,
        provinsi_id: idProv,
        kabupaten_id: idKab,
        kecamatan_id: idKec,
        kelurahan_id: idKelu,
      });
      console.log(session);
      await axios.post("http://localhost:8000/api/register/auth", data, {
        headers: {
          csrf_token: session.csrf_token,
          session_data: session.session_data,
        },
      });
      router.push("/OTP", { scroll: false });
    } catch (error) {
      alert(error);
    }
  }
  // // =======
  // const [data, setData] = useState({
  //   nama: "",
  //   telepon: "",
  //   golongan_darah: "",
  // });
=======
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
>>>>>>> 1b7a3ad9116c58ac444ce2c4fae31781b4137a7e

  const getcsrf = async () => {
    let cookie = await axios.get("http://localhost:8000/api/get-session-data");
    setSession(cookie);
  };

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
<<<<<<< HEAD
          <div className="rectangle-37">
            <div className="wraper text-center">
              <form className="w-full px-5 py-50">
                <h1 className="text-black font-Title text-[40px] block">
                  Register
                </h1>
                <input
                  className="border-2 border-black rounded w-[400px] h-[40px] px-10"
                  type="tel"
                  onChange={detect}
                  placeholder="Masukkan Nama Anda"
                  id="nama"
                  name="nama"
                />
                <div className="input-container my-3">
                  <img
                    className="input-icon"
                    src="/img/phone.svg"
                    alt="Icon"
                    height={20}
                    width={20}
                  />
                  <input
                    className="border-2 border-black rounded w-[400px] h-[40px] px-10"
                    type="tel"
                    onChange={detect}
                    placeholder="Masukkan No Anda"
                    id="telpon"
                    name="telpon"
                  />
                </div>
                <div className="h-auto flex justify-center">
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <div>
                      <Dropdown category="provinsi" />
                      <Dropdown category="kabupaten" />
                      <div className="flex justify-center">
                        <Dropdown category="kecamatan" />
                        <Dropdown category="kelurahan" />
                      </div>
                      <Dropdown category="golongan_darah" />
                    </div>
                  </Suspense>
                </div>
                <div className="flex justify-center items-center">
                  <p className="tulisan text-xs">
                    Kode OTP dikirim via Whatsapp
                  </p>
                  <button
                    type="button"
                    className="border-2 bg-black text-l font-bold p-3 text-white rounded-full "
                    onClick={registrasi}
                  >
                    Kirim Kode OTP
                  </button>
                </div>
                {errorMessage}
              </form>
            </div>
          </div>
        </div>
      </div>
=======
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
>>>>>>> 1b7a3ad9116c58ac444ce2c4fae31781b4137a7e
    </section>
  );
}
