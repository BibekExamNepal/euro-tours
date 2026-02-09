/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
     qualities: [75, 80, 85],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
}

module.exports = nextConfig
