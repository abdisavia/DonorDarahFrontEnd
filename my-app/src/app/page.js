import  Navbar  from "./components/navbar";
import Card from "./components/card";

export default function Home() {
  return (
    <main>
      <Navbar itemsColor="text-white"/>
      <section className="bg-hero-bg bg-no-repeat bg-cover">
        <div className="w-full h-screen overflow-hidden relative z-20 backdrop-blur-sm">
          <div className="container mx-auto w-full h-full flex justify-end items-center">
            <span>
              <h1 className="text-red font-Title text-[40px] text-right">Setetes darah berguna <br/> untuk mereka</h1>
              <h4 className="text-white font-Title text-[25px] text-right font-light">segera donorkan<br/> darah anda</h4>
            </span>
          </div>
        </div>
          <div className="w-full h-full absolute top-0 bg-gradient-to-b to-white from-transparent from-80% z-10 to-100%"></div>
      </section>

      <section className="w-full h-screen border-2">
        <div className="container mx-auto border-2 h-screen ">
          <label htmlFor="">Cara menjadi </label>
          <input type="select" value={"Pendonor"}/>
          <div className="flex flex-row justify-center border-2 gap-8 items-center">
            <Card path="/img/Asset 18.png" alt="Registrasi"/>
            <Card path="/img/email.png" alt="Tunggu"/>
            <Card path="/img/Frame3.png" alt="Terima Broadcast"/> 
          </div>
        </div>
        
      </section>
    </main>
  )
}
