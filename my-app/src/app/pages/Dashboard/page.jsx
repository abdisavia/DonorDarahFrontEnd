"use client";
import { useContext, createContext, useReducer} from "react";

import  HeroSection from "./HeroSection";
import  TutorialSingkatSection from "@/pages/Dashboard/TutorialSingkatSection";
import  InformasiPendonorSection from "@/pages/Dashboard/InfomasiPendonorSection";
import Footer from "@/_components/footer";



export default function Dashboard() {
  return (
    <main>
      <HeroSection/>
      <TutorialSingkatSection />
      <InformasiPendonorSection />
      <Footer/>
    </main>
  )
}


