"use client";
import  HeroSection from "./HeroSection";
import  TutorialSingkatSection from "./TutorialSingkatSection";
import  InformasiPendonorSection from "@/app/pages/Dashboard/InfomasiPendonorSection";
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


