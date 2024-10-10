/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.typeform.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'workspace.google.com',
                pathname: '**'
            }

        ]
    }
};

export default nextConfig;
