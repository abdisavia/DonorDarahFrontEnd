"use client";
import { Suspense, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/_components/navbar";
import Dropdown from "@/_components/Dropdown/dropdown";
import "@/_styles/css/login.css";
import "@/_styles/css/regis.css";
import ErrorMessage from "@/_components/errorMessage";
import { idProv } from "@/_components/Dropdown/dropdown_provinsi";
import { idKab } from "@/_components/Dropdown/dropdown_kabupaten";
import { idKec } from "@/_components/Dropdown/dropdown_kecamatan";
import { idKelu } from "@/_components/Dropdown/dropdown_kelurahan";
import { golongan_darah } from "@/_components/Dropdown/golongan_darah";
import { useRouter } from "next/navigation";

export default function Register() {
  const [data, setData] = useState({});
  const [session, setSession] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    getcsrf();
  },[])

  async function registrasi() {
    try {
      setData({
        "nama" : document.getElementById("nama").value,
        "telepon" : document.getElementById("telpon").value,
        "golongan_darah" : golongan_darah,
        "provinsi_id" : idProv,
        "kabupaten_id" : idKab,
        "kecamatan_id" : idKec,
        "kelurahan_id" : idKelu
      })
    console.log(session);
      await axios.post(
        "http://localhost:8000/api/register/auth",
        data,{
          headers: {
            "csrf_token" : session.csrf_token,
            "session_data" : session.session_data
          }
        }
      );
      router.push("/OTP",{scroll:false})
    } catch (error) {
      alert(error);
    }
  }

  const getcsrf = async () => {
    let cookie = await axios.get("http://localhost:8000/api/get-session-data")
    setSession(cookie)
  }

  const detect = (e) => {
    const { name, value } = e.target;
    if (value == "") {
      setErrorMessage(
        <ErrorMessage
          message="tidak boleh ada data yang kosong"
          kelas="w-full h-auto bg-red text-white  absolute left-[-1px] bottom-[-50px] rounded-xl p-2"
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
        }
      }
    }
  };

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
                      <Dropdown category="provinsi"/> 
                      <Dropdown category="kabupaten"/>
                      <div className="flex justify-center">
                        <Dropdown category="kecamatan"/>
                        <Dropdown category="kelurahan"/>
                      </div>
                      <Dropdown category="golongan_darah"/>
                    </div>
                  </Suspense>
                </div>
                <div className="flex justify-center items-center">
                  <p className="tulisan text-xs">
                    Kode OTP dikirim via Whatsapp
                  </p>
                  <button type="button" className="border-2 bg-black text-l font-bold p-3 text-white rounded-full "  onClick={registrasi}>
                      Kirim Kode OTP
                  </button>
                </div>
                {errorMessage}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
