import Image from 'next/image';

// Page-specific SEO Metadata
export const metadata = {
  title: 'About Us - Optics Shop | Our Story & Mission',
  description: 'Learn about Optics Shop, our mission to provide exceptional eye care, and our commitment to quality eyewear and customer satisfaction.',
  keywords: ['about optics shop', 'our mission', 'eye care professionals', 'Toronto optician'],
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">About Optics Shop</h1>

      <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Optics Shop was founded in 20XX with a simple mission: to provide the community with
              high-quality eyewear and comprehensive eye care services in a friendly and professional environment.
              We believe that clear vision is essential for a fulfilling life, and we are dedicated
              to helping our clients achieve optimal eye health and visual comfort.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Over the years, we have grown to become a trusted name in Toronto for all things optical.
              Our commitment to using the latest technology, offering a wide selection of frames,
              and providing personalized attention sets us apart.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/about-us.jpg" // Add an image to your public/images folder
              alt="Our Team at Optics Shop"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg shadow-inner text-center mb-12">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          To enhance the lives of our clients by delivering exceptional eye care services,
          offering a curated selection of stylish and high-quality eyewear, and fostering
          a compassionate and trustworthy relationship built on professionalism and expertise.
        </p>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-blue-700 text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src="/images/team-member-1.jpg" // Add team member images
              alt="Dr. Jane Doe"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Dr. Jane Doe</h3>
            <p className="text-blue-600">Optometrist</p>
            <p className="text-gray-600 text-sm mt-2">Specializing in comprehensive eye exams and contact lens fittings.</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/team-member-2.jpg"
              alt="John Smith"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
            <p className="text-blue-600">Licensed Optician</p>
            <p className="text-gray-600 text-sm mt-2">Expert in frame selection and lens recommendations.</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/team-member-3.jpg"
              alt="Sarah Lee"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Sarah Lee</h3>
            <p className="text-blue-600">Optical Assistant</p>
            <p className="text-gray-600 text-sm mt-2">Dedicated to assisting clients with their optical needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
}