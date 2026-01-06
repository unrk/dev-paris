const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  
  // Domaine canonical
  env: {
    NEXT_PUBLIC_DOMAIN: 'https://dev-paris.tech'
  },
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  
  async redirects() {
    return [
      // Redirect .vercel.app vers domaine custom
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?<subdomain>.*)\\.vercel\\.app'
          }
        ],
        destination: 'https://dev-paris.tech/:path*',
        permanent: true
      }
    ]
  }
};

module.exports = nextConfig;
