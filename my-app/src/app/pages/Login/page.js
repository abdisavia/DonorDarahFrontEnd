import "@/_styles/css/login.css";
import Navbar from "@/_components/navbar";

export default function Login() {
  return (
    <main>
      <div className="my-bg">
        <Navbar itemsColor="text-white" />
        <div className="container">
          <div className="row">
            <div class="rectangle-36">
              <label>LOGIN</label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

