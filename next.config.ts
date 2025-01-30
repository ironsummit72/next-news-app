import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};


const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav:true,
  cacheStartUrl:true,
  aggressiveFrontEndNavCaching:true,
  reloadOnOnline:true,
  disable:false,
  workboxOptions:{
    disableDevLogs:true
  }
});
export default withPWA({
  // Your Next.js config
  ...nextConfig,
  
});
