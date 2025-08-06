import Container from "@/components/Container";
import FeaturesSection from "@/components/HomePageComponents/Features";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import OptionsSection from "@/components/HomePageComponents/Options";
import PoweredBySection from "@/components/HomePageComponents/PoweredBy";
import Testimonials from "@/components/HomePageComponents/Testimonials";
import UnderOptions from "@/components/HomePageComponents/UnderOptions";

export default function Home() {
  return (
    <div className="text-white !mx-auto">
      <Header />
      <PoweredBySection />
      <OptionsSection />
      <UnderOptions />
      <FeaturesSection />
      <Testimonials />
    </div>
  );
}
