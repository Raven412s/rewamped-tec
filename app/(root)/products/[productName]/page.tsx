import { Metadata } from "next";
import { productsData } from "@/data";
import { notFound } from "next/navigation";
import ProductDetails from "./_components/productDetail";

interface ProductPageProps {
  params: { productName: string };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const siteDomain = process.env.NEXT_PUBLIC_SITE_DOMAIN || "theelevatorcomapany.vercel.app";
    const product = productsData.find(
      (p) => p.productTitle.toLowerCase() === params.productName.toLowerCase()
    );

    if (!product) {
      return {
        title: "Product Not Found - The Elevator Company",
        description: "The product you are looking for does not exist.",
        openGraph: {
          type: "website",
          url: `${siteDomain}/products/${params.productName}`,
          title: "Product Not Found | Your Company Name",
          description: "The product you are looking for does not exist.",
          images: [
            {
              url: `${siteDomain}/opengraph-image.png`,
              width: 1200,
              height: 630,
              alt: "Product Not Found",
            },
          ],
        },
      };
    }
    return {
      title: `${product.productTitle} - The Elevator Company`,
      description: product.productDescription,
      openGraph: {
        type: "website",
        url: `${siteDomain}/products/${params.productName}`,
        title: `${product.productTitle} | ${product?.type} - The Elevator Company`,
        description: product.productDescription,
        images: [
            {
              url: product.ogImage,
              width: 1200,
              height: 630,
              alt: product.heroHeading || product.productTitle,
            },
          ],
      },
    };
  }

// Product Page Component
export default function ProductPage({ params }: ProductPageProps) {
  const product = productsData.find(
    (p) => p.productTitle.toLowerCase() === params.productName.toLowerCase()
  );

  if (!product) {
    notFound();
  }

  return (
    <ProductDetails
    ogImage=""
    ogImageAltText=""
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
