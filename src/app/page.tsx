import FeaturedProducts from "./pages/homes/FeaturedProducts";
import HeroSection from "./pages/homes/HeroSection";
import InstagramWall from "./pages/homes/InstagramWall";
import OurBlogs from "./pages/homes/OurBlogs";
import ServiceSection from "./pages/homes/ServiceSection";
import ShopCollection from "./pages/homes/ShopCollection";
import UniqueStyles from "./pages/homes/UniqueStyles";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <ServiceSection />
        <ShopCollection />
        <FeaturedProducts />
        <UniqueStyles />
        <OurBlogs />
        <InstagramWall />
      </div>
    </>
  );
}
