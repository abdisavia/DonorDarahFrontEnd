"use client";
import { useState, useContext, createContext, useReducer} from "react";
import  Navbar  from "./components/navbar";
import Card from "./components/card";
import Dropdown from "./components/dropdown";

const roleContext = createContext(null);
const roleDispatchContext = createContext(null);

export default function Home() {
  return (
    <main>
      <Herosection/>
      <TutorialSingkatSection />
    </main>
  )
}


export function useDispatch(){
  return useContext(roleDispatchContext);
}

function Herosection() {
  return(
  <section section className="bg-hero-bg bg-no-repeat bg-cover">
      <Navbar itemsColor="text-white"/>
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
  )
}

function TutorialSingkatSection() {
  const [category, dispatch] = useReducer(
    categoryReducer,
    {kategori:"Pendonor"}
  );

  function categoryReducer(category,action){
    if (action.type == "Pendonor"){
      return {kategori: "Pendonor"};
    }else{
      return {kategori: "Akseptor"};
    }
  }
  return(
    <section className="w-full h-screen flex items-center">
        <div className="container mx-auto my-auto">
          <roleContext.Provider value={category}>
            <roleDispatchContext.Provider value={dispatch}>
              <div className="flex items-center mb-14">
                <h1 className="pe-2 text-xl">Cara menjadi</h1>
                <Dropdown selection={["Pendonor", "Akseptor"]}/> 
              </div>
              {
                category.kategori == "Pendonor" ?
                <div className="flex flex-row justify-center gap-8 items-center">
                  <Card path="/img/Asset 18.png" alt="Registrasi"/>
                  <Card path="/img/email.png" alt="Tunggu"/>
                  <Card path="/img/Frame3.png" alt="Terima Broadcast"/> 
                </div> : 
                <div className="flex flex-row justify-center gap-8 items-center">
                <Card path="/img/Asset 18.png" alt="Registrasi 1"/>
                <Card path="/img/email.png" alt="Tunggu 1"/>
                <Card path="/img/Frame3.png" alt="Terima Broadcast 1"/> 
              </div>
              }
            </roleDispatchContext.Provider>
          </roleContext.Provider>
        </div>
      </section>
  )
}

function showMaps(){
  
}