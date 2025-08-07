// Layout Imports
import Header from "@/components/layout/Header";

// Module Imports
import FeaturesSection from "@/components/modules/home/Features";
import OptionsSection from "@/components/modules/home/Options";
import PoweredBySection from "@/components/modules/home/PoweredBy";
import Testimonials from "@/components/modules/home/Testimonials";
import UnderOptions from "@/components/modules/home/UnderOptions";

export default function Home() {
  return (
    <div className='text-white !mx-auto'>
      <Header />
      <PoweredBySection />
      <OptionsSection />
      <UnderOptions />
      <FeaturesSection />
      <Testimonials />
    </div>
  );
}
