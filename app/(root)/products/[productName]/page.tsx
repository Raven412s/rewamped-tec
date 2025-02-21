import { productsData } from "@/data";
import { notFound } from "next/navigation";
import ProductDetails from "./_components/productDetail";



export default function ProductPage({ params }: { params: { productName: string } }) {
  const product = productsData.find(
    (p) => p.productTitle.toLowerCase() === params.productName.toLowerCase()
  );

  if (!product) {
    notFound(); // Handle invalid product names
  }

  return (
    <ProductDetails
      carouselImages={product.carouselImages}
      productTitle={product.productTitle}
      productDescription={product.productDescription}
      productFeatures={product.productFeatures}
      productSpecialFeature={product.productSpecialFeature}
      heroImage={product.heroImage}
      heroHeading={product.heroHeading}
      sections={product.sections}
      productSubHeading={product.productSubHeading}
      productMiniHeading={product.productMiniHeading}
      />
  );
}
