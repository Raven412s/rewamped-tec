
import Categories from "./_components/Categories";
import HeroProducts from "./_components/HeroProducts";
import OurProducts from "./_components/OurProducts";
import PreferredStructure from "./_components/PreferredStructure";
import ProductsCardArray from "./_components/ProductsCardArray";




const ProductsPage = () => {

  return (
    <div className="bg-transparent  min-h-screen w-full">
        <HeroProducts/>
        <Categories/>
        <PreferredStructure/>
        <OurProducts/>
        <div id="products">
        <ProductsCardArray/>
        </div>
    </div>
  );
};

export default ProductsPage;
