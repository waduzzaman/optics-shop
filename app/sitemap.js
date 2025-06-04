// app/sitemap.js
export default function sitemap() {
  return [
    {
      url: 'https://your-optics-shop-domain.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://your-optics-shop-domain.com/products',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://your-optics-shop-domain.com/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://your-optics-shop-domain.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // Dynamically add product URLs (example)
    // Replace with actual product data fetching
    {
      url: 'https://your-optics-shop-domain.com/products/classic-black-frames',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // ... add other product URLs
  ];
}