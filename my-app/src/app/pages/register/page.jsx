<<<<<<< HEAD
"use client";
import {useState}from 'react';
import  axios from 'axios';
import Navbar from "@/_components/navbar";
import "@/_styles/css/regis.css";
import ErrorMessage from "@/_components/errorMessage";
=======
import Navbar from "../../components/navbar";
import "../../styles/css/regis.css";
import "../../styles/css/login.css";
>>>>>>> 0411cc1e4c02c6d8f6b69beba834e06671d2b734

export default function register() {
  const [data,setData] = useState({
    nama:"",
    telpon:"",
    golongan_darah:""
  });

  const [errorMessage, setErrorMessage] = useState("");

  async function registrasi(){
    try{
      const response = await axios.post("http://localhost:8000/api/register/auth", data);
      console.log(response);
    }catch(error){
      console.log(error)
    }
  }
  
  const detect = (e) => {
    const { name, value } = e.target;

    if(value == ""){
      setErrorMessage(<ErrorMessage message="tidak boleh ada data yang kosong" kelas="w-[400px] h-auto bg-red text-white  absolute left-[-1px] bottom-[-50px] rounded-xl p-2"/>); 
    }else{
      setErrorMessage("");
      if(name == "telepon"){
        let detectNonNumber = value.match(/\D/g);
        if(detectNonNumber != null){
          setErrorMessage(<ErrorMessage message="Harap Masukkan Nomor telpon dengan Nomor" kelas="w-[400px] h-auto bg-red text-white  absolute left-[-1px] bottom-[-50px] rounded-xl p-2"/>)
          detectNonNumber = ""
        }else{
          setErrorMessage("");
          setData((prevData) => ({
            ...prevData,
            [name] : [value]
          }))
        }
      }
    }

  }



  return (
    <main>
      <div className="my-bg">
        <Navbar itemsColor="text-white" />
<<<<<<< HEAD
        <div className="grid place-items-center h-screen border-2 ">
          <form className="bg-white w-[400px] h-auto p-2 margin-auto border-2 relative rounded-xl" id="form">
            <h1 className='font-3xl font-Title'>Registrasi</h1>
            <label htmlFor="nama">Nama :</label>
            <input type="text" id="nama"name="nama" onChange={detect} placeholder="Masukkan Nama" className="block border-2 w-full mt-2"/>
            <label htmlFor="telepon">No Wa :</label>
            <input type="text" id="telpon"name="telepon" onChange={detect} placeholder="Masukkan Nomor" className="block border-2 w-full mt-2" />
            <label htmlFor="golongan_darah">Golongan Darah:</label>
            <input type="text" id="golongan_darah"name="golongan_darah" onChange={detect} placeholder="masukkan golongan darah" className="block border-2 w-full mt-2"/>
            <input type="button" value="Submit" onClick={registrasi} className="bg-red w-20 h-10 rounded-3xl mt-2 me-2 text-white"/>
            {errorMessage}
          </form> 
=======
        <div className="row">
          <div class="rectangle-36">
            <div className="wraper text-center">
              <label className="text-black font-Title text-[40px]">Register</label>
              <form>
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
                    placeholder="Masukkan Nomer Anda"
                    name="noTelp"
                  />
                </div>
                <p className="tulisan text-xs"></p>

              </form>
            </div>
          </div>
>>>>>>> 0411cc1e4c02c6d8f6b69beba834e06671d2b734
        </div>
      </div>
    </main>
  );
}
