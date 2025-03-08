import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudinary.pikakasino.com",
      },
    ],
  },
};

export default nextConfig;
