// app/products/[slug]/page.js
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation'; // For 404 handling

// Dummy product data (replace with actual data fetching in a real app)
const products = [
  {
    id: 'classic-black-frames',
    name: 'Classic Black Frames',
    price: 199.99,
    image: '/images/product-1.jpg',
    description: 'Lightweight and durable classic black frames, perfect for everyday wear. These frames offer a sleek and professional look, suitable for any occasion.',
    details: 'Material: Acetate, Lens Type: Prescription Ready, Shape: Rectangle, Color: Black, Includes: Case and cleaning cloth.',
  },
  {
    id: 'aviator-sunglasses',
    name: 'Aviator Sunglasses',
    price: 149.99,
    image: '/images/product-2.jpg',
    description: 'Timeless aviator style sunglasses with 100% UV protection. Perfect for sunny days and adding a touch of cool to your outfit.',
    details: 'Material: Metal Alloy, Lens Type: Polarized, UV Protection: UV400, Color: Gold/Green, Includes: Protective pouch.',
  },
  {
    id: 'kids-collection',
    name: 'Kids Collection',
    price: 89.99,
    image: '/images/product-3.jpg',
    description: 'Durable and fun frames designed specifically for children. Built to withstand active lifestyles while providing optimal vision.',
    details: 'Material: Flexible Plastic, Lens Type: Impact Resistant, Age Range: 5-12, Colors: Various, Includes: Fun case.',
  },
  {
    id: 'blue-light-glasses',
    name: 'Blue Light Blocking Glasses',
    price: 79.99,
    image: '/images/product-4.jpg',
    description: 'Protect your eyes from digital strain with our blue light blocking glasses. Ideal for extended screen time.',
    details: 'Material: TR90, Lens Type: Blue Light Filter, Style: Unisex, Color: Transparent, Includes: Microfiber cloth.',
  },
  {
    id: 'progressive-lenses',
    name: 'Progressive Lenses',
    price: 349.99,
    image: '/images/product-5.jpg',
    description: 'Seamless vision at all distances with our high-quality progressive lenses. Custom-made for your specific prescription.',
    details: 'Lens Type: Freeform Digital Progressive, Material: Polycarbonate, Coatings: Anti-glare, Anti-scratch, UV protection.',
  },
  {
    id: 'daily-contact-lenses',
    name: 'Daily Disposable Contact Lenses',
    price: 59.99,
    image: '/images/product-6.jpg',
    description: 'Convenient and hygienic daily disposable contact lenses. Perfect for active individuals seeking fresh lenses every day.',
    details: 'Material: Hydrogel, Water Content: 69%, Pack Size: 30 lenses, Wear Schedule: Daily Disposable, Base Curve: 8.6.',
  },
];

// Function to generate static params for all products (important for static site generation)
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

// Function to generate dynamic metadata for each product page
export async function generateMetadata({ params }) {
  const product = products.find((p) => p.id === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    };
  }

  return {
    title: `${product.name} - Optics Shop`,
    description: product.description,
    keywords: [product.name.toLowerCase(), 'eyeglasses', 'sunglasses', 'contact lenses', 'optics'],
    openGraph: {
      title: `${product.name} - Optics Shop`,
      description: product.description,
      url: `https://your-optics-shop-domain.com/products/${product.id}`,
      images: [
        {
          url: `https://your-optics-shop-domain.com${product.image}`,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}


export default function ProductPage({ params }) {
  const product = products.find((p) => p.id === params.slug);

  if (!product) {
    notFound(); // Render a 404 page if product is not found
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-lg shadow-lg">
        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-700 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 text-lg mb-6">{product.description}</p>
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Product Details</h2>
            <p className="text-gray-600">{product.details}</p>
          </div>
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md">
            Add to Cart (Coming Soon!)
          </button>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link href="/products" className="text-blue-600 hover:underline">
          &larr; Back to All Products
        </Link>
      </div>
    </div>
  );
}