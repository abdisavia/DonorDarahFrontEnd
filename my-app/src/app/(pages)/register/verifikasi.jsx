import "@/_styles/css/login.css";
import Navbar from "@/_components/navbar";

export default function Verifikasi() {

  return (
              <>
                <h1 className="text-black font-Title text-[40px] w-full block left-0 absolute top-[2%]">
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
                        type="text"
                        placeholder="Masukan Kode OTP"
                        className="mt-1 p-2 border border-black rounded-md w-80 text-center"/>
                    </div>
                    <p className="mt-3 mb-5">
                      <a href="#" className="border-b border-black">
                        Kirim ulang{" "}</a>{" "}atau{" "}<a href="#" className="border-b border-black">{" "}ganti nomor</a>
                    </p>
                  </div>
                </div>
              </>
  );
}
