import Image from 'next/image';
import Link from 'next/link';

// Page-specific SEO Metadata
export const metadata = {
  title: 'Products - Optics Shop | Eyeglasses & Contact Lenses',
  description: 'Browse our extensive collection of eyeglasses, sunglasses, and contact lenses. Find the perfect eyewear for your vision needs.',
  keywords: ['eyeglasses', 'sunglasses', 'contact lenses', 'optical products', 'designer frames'],
};

const products = [
  {
    id: 'classic-black-frames',
    name: 'Classic Black Frames',
    price: 199.99,
    image: '/images/product-1.jpg',
    description: 'Lightweight and durable classic black frames, perfect for everyday wear.',
  },
  {
    id: 'aviator-sunglasses',
    name: 'Aviator Sunglasses',
    price: 149.99,
    image: '/images/product-2.jpg',
    description: 'Timeless aviator style sunglasses with 100% UV protection.',
  },
  {
    id: 'kids-collection',
    name: 'Kids Collection',
    price: 89.99,
    image: '/images/product-3.jpg',
    description: 'Durable and fun frames designed specifically for children.',
  },
  {
    id: 'blue-light-glasses',
    name: 'Blue Light Blocking Glasses',
    price: 79.99,
    image: '/images/product-4.jpg', // Add this image
    description: 'Protect your eyes from digital strain with our blue light blocking glasses.',
  },
  {
    id: 'progressive-lenses',
    name: 'Progressive Lenses',
    price: 349.99,
    image: '/images/product-5.jpg', // Add this image
    description: 'Seamless vision at all distances with our high-quality progressive lenses.',
  },
  {
    id: 'daily-contact-lenses',
    name: 'Daily Disposable Contact Lenses',
    price: 59.99,
    image: '/images/product-6.jpg', // Add this image
    description: 'Convenient and hygienic daily disposable contact lenses.',
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Link href={`/products/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={250}
                  layout="responsive"
                  objectFit="cover"
                />
            </Link>
            <div className="p-4">
              <Link href={`/products/${product.id}`} className="block">
                <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                  {product.name}
                </h2>
              </Link>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <p className="text-blue-700 font-bold text-lg">${product.price.toFixed(2)}</p>
              <Link href={`/products/${product.id}`} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 text-sm">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}