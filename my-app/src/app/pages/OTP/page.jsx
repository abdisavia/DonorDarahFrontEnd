import Navbar from "@/_components/navbar";
import "@/_styles/css/login.css";


export default function otp() {
  return (
    <main>
      <div className="my-bg">
        <Navbar itemsColor="text-white" />
        <div className="row">
          <div class="rectangle-36">
            <div className="wraper text-center">
              <label className="text-black font-Title text-[40px]">OTP</label>
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
                    placeholder="Masukkan Kode OTP"
                    name="noTelp"
                  />
                </div>
                <p className="tulisan text-xs"></p>
                <button className=" border-2 bg-black text-xs text-white rounded-full h-8 w-40">
                  <a href="">Kirim Kode OTP</a>
                </button>
                <br/>
                <a href="/pages/Login" className="text-xs">Sudah Memiliki Akun</a>
              </form>
            </div>
          </div>
          {/* <div class="kotak-baru rounded-full"><p>Nomor anda belum terdaftar di sistem harap daftar terlebih dahulu</p></div> */}
        </div>
      </div>
    </main>
  );
}
