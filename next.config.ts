import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow accessing the dev server from devices on the local network.
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev", "192.168.*.*"],
};

export default nextConfig;
