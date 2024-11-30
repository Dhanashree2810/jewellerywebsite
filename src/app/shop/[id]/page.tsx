'use client'
import { useParams } from 'next/navigation';
import ProductDetails from "@/app/pages/shop/ProductDetails";



export default function ProductDetailspage() {
  const params = useParams();
  const { id } = params;

  console.log("productid",id);
  
  return (
    <div>
        <ProductDetails productid={id}/>
    </div>
  )
}
