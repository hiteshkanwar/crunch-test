import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FreeClassPass from "@/components/FreeClassPass";
import VideoSection from "@/components/VideoSection";
import EquipmentSection from "@/components/EquipmentSection";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <FreeClassPass />
      <VideoSection />
      <EquipmentSection />
      <Philosophy />
      <Footer />
    </div>
  );
}
