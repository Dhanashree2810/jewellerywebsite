'use client';
import { useParams } from 'next/navigation';
import ProductDetails from "@/app/pages/shop/ProductDetails";

export default function ProductDetailspage() {
  const params = useParams();
  const { id } = params;

  const productId = typeof id === 'string' ? id : '';

  console.log("productid", productId);

  return (
    <div>
        <ProductDetails productid={productId} />
    </div>
  );
}
