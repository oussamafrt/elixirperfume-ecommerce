import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default function HomePage({product}) {
  console.log(product);
  return (
    <div>
      <Header/>
      <Featured product={product}/>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '67cef6fdb5e16f5d9e0c2d87';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: {product: JSON.parse(JSON.stringify(product))},
  };
}