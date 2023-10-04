import Navbar from "../../components/navbar";
import "../../styles/css/regis.css";
import "../../styles/css/login.css";

export default function register() {
  return (
    <main>
      <div className="my-bg">
        <Navbar itemsColor="text-white" />
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
        </div>
      </div>
    </main>
  );
}
