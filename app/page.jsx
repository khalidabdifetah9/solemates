import Hero from "@/Components/Landing/Hero";
import BrandStory from "@/Components/Landing/BrandStory";
import FeaturedShoes from "@/Components/Landing/FeaturedShoes";
import WhyUs from "@/Components/Landing/WhyUs";
import CTA from "@/Components/Landing/CTA";
import Footers from "@/Components/Landing/Footers";

export default function Home() {
  return (
    <div className="max-w-500">
      <main className="relative bg-white">
        <div className="fixed top-0 left-0 w-full h-screen z-0">
          <BrandStory />
        </div>
        <div className="relative z-10 bg-white min-h-screen mb-[100vh] shadow-xl px-10">
          <Hero />
        </div>
      </main>
      <FeaturedShoes/>
      <WhyUs/>
      <CTA/>
      <Footers/>
    </div>
  );
}
