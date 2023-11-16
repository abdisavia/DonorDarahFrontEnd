import "@/_styles/css/login.css";
import Navbar from "@/_components/navbar";

export default function Login() {
  return (
    <main>
      <div className="my-bg">
        <Navbar itemsColor="text-white" />
        <div className="row">
          <div class="rectangle-36">
            <div className="wraper text-center">
              <form className="w-full h-full p-5 relative">
                <h1 className="text-black font-Title text-[40px] w-full block left-0 absolute">LOGIN</h1>
                <div className="flex justify-center items-center  h-full my-auto ">
                  <div className="mt-5">
                      <div className="input-container mb-5">
                        <div className="absolute bg-black h-14  w-14 z-0 rounded-e-3xl rounded-s-md flex justify-center items-center">
                          <img
                            className=""
                            src="/img/phone.svg"
                            alt="Icon"
                            height={30}
                            width={30}
                          />
                        </div>
                          <input
                            className="border border-black rounded w-[30rem] h-14 ps-[4rem] text-[25px]"
                            type="text"
                            placeholder="Masukkan No Anda"
                            name="noTelp"
                          />
                      </div>
                      <p className="text-l  text-left mt-2 col-start-1 col-span-3 my-auto mx-auto w-full ">Kode OTP dikirim via Whatsapp</p>
                      <div className=" col-start-3 flex items-center justify-end">
                        <a href="/register" className="text-l me-5 font-bold">Daftar</a>
                        <button  className="  bg-black font-bold text-l text-white rounded-full px-3 py-2 h-14 w-40" ><a href="/OTP">Kirim Kode OTP</a></button>
                      </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div class="kotak-baru rounded-full"><p>Nomor anda belum terdaftar di sistem harap daftar terlebih dahulu</p></div> */}
        </div>
      </div>
    </main>
  );
}
