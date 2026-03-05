/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: false,
  },
  async headers() {
    return [
      {
        source: "/Sanjay_Deshmukh_Resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Sanjay_Deshmukh_Resume.pdf"',
          },
          {
            key: "Content-Type",
            value: "application/pdf",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
