// This is a Server Component by default, which is great for SEO
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'; // For page-specific metadata

// Page-specific SEO Metadata
export const metadata = {
  title: 'Home - Optics Shop | Quality Eyewear & Eye Care in Toronto',
  description: 'Discover the latest eyewear trends, contact lenses, and professional eye care services at Optics Shop in Toronto. Your vision, our priority.',
  keywords: ['optics Toronto', 'eyeglasses Toronto', 'contact lenses Toronto', 'eye exam Toronto', 'sunglasses Toronto'],
  openGraph: {
    title: 'Home - Optics Shop | Quality Eyewear & Eye Care in Toronto',
    description: 'Discover the latest eyewear trends, contact lenses, and professional eye care services at Optics Shop in Toronto. Your vision, our priority.',
    url: 'https://your-optics-shop-domain.com/', // Replace with your actual domain
    images: [
      {
        url: 'https://your-optics-shop-domain.com/hero-image.jpg', // Hero image for OG
        width: 1200,
        height: 630,
        alt: 'Stylish eyeglasses display',
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl shadow-xl text-white mb-16">
        <Image
          src="/images/hero-optics.png"
          alt="Modern Optics Shop Interior"
          fill
          className="absolute inset-0 object-cover opacity-40"
          priority
        />
        <div className="relative z-10 text-center flex flex-col items-center justify-center p-6 md:p-16 h-[30rem] md:h-[36rem]">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            See the World Clearly
          </h1>
          <p className="mt-4 text-xl md:text-2xl max-w-2xl drop-shadow-md">
            Your trusted partner for exceptional eyewear and personalized eye care solutions.
          </p>
          <Link
            href="/products"
            className="mt-8 px-8 py-3 bg-white text-blue-900 font-semibold text-lg rounded-full shadow hover:bg-blue-100 transition"
          >
            Explore Eyewear
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">Our Services</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {[
            {
              title: 'Comprehensive Eye Exams',
              desc: 'Thorough eye examinations using advanced technology to ensure your eye health.',
            },
            {
              title: 'Stylish Eyeglasses',
              desc: 'A wide selection of frames from leading brands, perfectly tailored to your style.',
            },
            {
              title: 'Contact Lenses',
              desc: 'Find the ideal contact lenses for your needs with expert fitting and care.',
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">Featured Products</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              src: '/images/product-1.png',
              title: 'Classic Black Frames',
              desc: 'Lightweight and durable design.',
              price: '$199.99',
              link: '/products/classic-black-frames',
            },
            {
              src: '/images/product-2.png',
              title: 'Aviator Sunglasses',
              desc: 'UV protected, timeless style.',
              price: '$149.99',
              link: '/products/aviator-sunglasses',
            },
            {
              src: '/images/product-3.png',
              title: 'Kids Collection',
              desc: 'Durable and fun frames for children.',
              price: '$89.99',
              link: '/products/kids-collection',
            },
          ].map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <Image
                src={product.src}
                alt={product.title}
                width={400}
                height={250}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.desc}</p>
                <p className="text-blue-700 font-bold mt-2">{product.price}</p>
                <Link
                  href={product.link}
                  className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="px-8 py-3 bg-blue-700 text-white text-lg font-semibold rounded-full hover:bg-blue-800 transition shadow-md"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-12 px-6 rounded-2xl shadow-inner">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">Why Choose Us?</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {[
            {
              title: 'Expert Opticians',
              desc: 'Our team of certified opticians provides personalized care and advice.',
            },
            {
              title: 'Latest Technology',
              desc: 'We use state-of-the-art equipment for precise diagnostics and fittings.',
            },
            {
              title: 'Wide Selection',
              desc: 'An extensive range of eyewear to suit every taste and budget.',
            },
            {
              title: 'Customer Satisfaction',
              desc: 'We are committed to providing the best possible experience for our clients.',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}