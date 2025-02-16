import Image from 'next/image';

export default function ProductPage({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <Image src={`/images/${product.image}`} width={500} height={500} alt={product.name} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  //Fetch product data here based on id, replace with your actual API call
  const product = {
    name: `Product ${id}`,
    image: `product-${id}.jpg`, // Ensure image is in public/images
  };
  return { props: { product } };
} 