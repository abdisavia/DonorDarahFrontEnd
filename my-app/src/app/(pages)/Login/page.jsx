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
              <label className="text-black font-Title text-[40px]">LOGIN</label>
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
                    placeholder="Masukkan No Anda"
                    name="noTelp"
                  />
                </div>
                <p className="tulisan text-xs">Kode OTP dikirim via Whatsapp</p>
                <button  className="tombol float-right border-2 bg-black text-xs text-white rounded-full h-8 w-40" ><a href="/OTP">Kirim Kode OTP</a></button>
                <button className="tombol1 float-right border-2 bg-black text-xs text-white rounded-full h-8 w-40"><a href="/register">Daftar</a></button>
              </form>
            </div>
          </div>
          {/* <div class="kotak-baru rounded-full"><p>Nomor anda belum terdaftar di sistem harap daftar terlebih dahulu</p></div> */}
        </div>
      </div>
    </main>
  );
}
