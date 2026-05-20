/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.0.107'],
  images: { domains: ["res.cloudinary.com"] }
};

export default nextConfig;
