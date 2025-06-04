import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Optics Shop</h3>
          <p className="text-gray-400 text-sm">
            Providing clear vision and stylish eyewear.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/products" className="text-gray-400 hover:text-white text-sm">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                Contact
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            123 Main Street, Toronto, ON M1M 1M1
          </p>
          <p className="text-gray-400 text-sm">
            Email: info@opticsshop.com
          </p>
          <p className="text-gray-400 text-sm">
            Phone: (416) 123-4567
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Optics Shop. All rights reserved.
      </div>
    </footer>
  );
}