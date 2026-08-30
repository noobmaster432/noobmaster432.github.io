import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Page-one thumbnail of the resume PDF, fetched and cached by the
    // image optimizer so the browser never hotlinks Drive directly.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/thumbnail",
      },
    ],
  },
};

export default nextConfig;
