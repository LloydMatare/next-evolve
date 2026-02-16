/** @type {import('next').NextConfig} */
const nextConfig = {
      eslint: {
    ignoreDuringBuilds: true,
  },
    images: {
        unoptimized: true,
        domains: [
            'partners.bugherd.com' // Add full domain name including '.com'
        ]
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false };
        return config;
      }
};

export default nextConfig;
