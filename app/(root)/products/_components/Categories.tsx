import { BackgroundBeams } from "@/components/ui/background-beams";
import CommercialLifts from "./CommercialLifts";
import LuxuryHomeLifts from "./LuxuryHomeLifts";
import ProductsPageSmartSlide from "./ProductsPageSmartSlide";

const Categories = () => {
  return (
    <section id="categories-section" className="relative">
      <ProductsPageSmartSlide />
      <LuxuryHomeLifts />
      <div id="commercial-section">
        <CommercialLifts />
      </div>
      <BackgroundBeams className="bg-zinc-900" />
    </section>
  );
};

export default Categories;
