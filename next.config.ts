import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // você pode adicionar outros domínios aqui se quiser
    ],
  },
};

export default nextConfig;