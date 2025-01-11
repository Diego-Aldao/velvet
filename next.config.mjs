/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.asos-media.com",
      },
      {
        hostname: "video.asos-media.com",
      },
      {
        hostname: "www.asos-video.com",
      },
    ],
  },
};
export default nextConfig;
