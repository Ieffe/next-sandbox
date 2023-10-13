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
    }, 
    async redirects(){
        return [
            {
                source: '/paginated',
                destination: '/paginated//1',
                permanent: true
            }
        ]
    },
}

module.exports = nextConfig
