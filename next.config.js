/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos", // دامنه جدید
        port: "",
        pathname: "/**",
      },
      // می‌توانی دامنه loremflickr را نگه داری یا حذف کنی
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack(config) {
  const fileLoaderRule = config.module.rules.find((rule) =>
    rule.test?.test?.(".svg"),
  );

  config.module.rules.push(
    // این قانون برای زمانی است که شما به صورت مشخص URL فایل svg را بخواهید (مثلا: import Icon from './icon.svg?url')
    {
      ...(fileLoaderRule || {}),
      test: /\.svg$/i,
      resourceQuery: /url/,
    },
    // این قانون برای تبدیل SVG به کامپوننت است
    {
      test: /\.svg$/i,
      issuer: fileLoaderRule?.issuer || undefined,
      resourceQuery: {
        not: [...(fileLoaderRule?.resourceQuery?.not || []), /url/],
      },
      //  ▼▼▼  این بخش تغییر کرده است  ▼▼▼
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: false,
            svgo: false,
          },
        },
      ],
    },
  );
  if (fileLoaderRule) {
    fileLoaderRule.exclude = /\.svg$/i;
  }

  return config;
}
};

export default nextConfig;
