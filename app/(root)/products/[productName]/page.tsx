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
      images={product.images}
      title={product.productTitle}
      description={product.productDescription}
      features={product.productFeatures}
      specialFeature={product.productSpecialFeature}
    />
  );
}
