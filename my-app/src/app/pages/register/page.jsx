"use client";
import { useState } from "react";
import axios from "axios";
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
          setData((prevData) => ({
            ...prevData,
            [name]: [value],
          }));
        }
      }
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
        </div>
      </div>
    </section>
  );
}
