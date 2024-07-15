/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"images.asos-media.com"
            }
        ]
    }
};
export default nextConfig