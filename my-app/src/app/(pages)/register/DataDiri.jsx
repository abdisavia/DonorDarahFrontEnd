import {useState,Suspense} from "react";
import ErrorMessage from "@/_components/errorMessage";
import Dropdown from "@/_components/Dropdown/dropdown";
import Link from "next/link";
import Alamat from "./Alamat";


export default function DataDiri({DataDiri, action}){
    const [errorMessage, setErrorMessage] = useState("");

    const detect = (e) => {
        const { name, value } = e.target;
        if (value == "") {
        setErrorMessage(
            <ErrorMessage
            message="tidak boleh ada data yang kosong"
            kelas="w-full h-auto bg-red text-white  absolute left-[-1px] bottom-[-50px] rounded-xl p-2"
            />
        );
        } else if(name == "telepon" && value == "") {
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
        }else{
            setErrorMessage("");

        }
    };
    
    return(
        <div id="contentRegister" className="flex justify-center">
            <div>
                <div className="input-container mb-2">
                          <img
                            className="input-icon "
                            src="/img/phone.svg"
                            alt="Icon"
                            height={30}
                            width={30}
                          />
                          <div className="absolute bg-black h-14  w-14 z-0 rounded-e-[100px] rounded-s-2xl"></div>
                          <input
                            className="border border-black rounded-2xl w-[500px] h-14 px-[4rem] text-[25px]"
                            type="text"
                            placeholder="Masukkan nama anda"
                            name="noTelp"
                          />
                </div>
                <div className="input-container mb-2">
                          <img
                            className="input-icon "
                            src="/img/phone.svg"
                            alt="Icon"
                            height={30}
                            width={30}
                          />
                          <div className="absolute bg-black h-14  w-14 z-0 rounded-e-[100px] rounded-s-2xl"></div>
                          <input
                            className="border border-black rounded-2xl w-[500px] h-14 px-[4rem] text-[25px]"
                            type="text"
                            placeholder="Masukkan nomor telpon anda"
                            name="noTelp"
                          />
                </div>
                <div className="input-container mb-2">
                          <img
                            className="input-icon "
                            src="/img/phone.svg"
                            alt="Icon"
                            height={30}
                            width={30}
                          />
                          <div className="absolute bg-black h-14  w-14 z-0 rounded-e-[100px] rounded-s-2xl"></div>
                          <input
                            className="border border-black rounded-2xl w-[500px] h-14 px-[4rem] text-[25px]"
                            type="text"
                            placeholder="Masukkan No Anda"
                            name="noTelp"
                          />
                </div>
                <div className="h-auto flex justify-start">
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <div className="flex ">
                            <img
                                className="input-icon "
                                src="/img/phone.svg"
                                alt="Icon"
                                height={30}
                                width={30}
                            />
                            <Dropdown category="golongan_darah"/>
                        </div>
                    </Suspense>
                </div>
                <div className="flex justify-start items-center">
                    <p className="tulisan text-xs">
                        Kode OTP dikirim via Whatsapp
                    </p>
                    
                </div>
                {errorMessage}
            </div>
        </div>
            
    )
};