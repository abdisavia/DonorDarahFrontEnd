import  Navbar  from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar itemsColor="text-white"/>
      <section className="bg-hero-bg bg-no-repeat bg-cover">
        <div className="w-full h-screen overflow-hidden relative z-20">
          <div className="container mx-auto w-full h-full flex justify-end items-center">
            <span>
              <h1 className="text-red font-Title text-[40px] text-right">Setetes darah berguna <br/> untuk mereka</h1>
              <h4 className="text-white font-Title text-[25px] text-right font-light">segera donorkan<br/> darah anda</h4>
            </span>
          </div>
        </div>
          <div className="w-full h-full absolute top-0 bg-gradient-to-b to-white from-transparent from-70% z-10 to-100%"></div>
      </section>

      <section>
        
      </section>
    </main>
  )
}
