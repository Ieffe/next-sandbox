/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'robohash.org',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'i.dummyjson.com',
                pathname: '/**'
            }
        ]
    }
}

module.exports = nextConfig
