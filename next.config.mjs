/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos', // دامنه جدید
        port: '',
        pathname: '/**',
      },
      // می‌توانی دامنه loremflickr را نگه داری یا حذف کنی
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;