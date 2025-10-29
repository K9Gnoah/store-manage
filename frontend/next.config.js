/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Static export for GitHub Pages
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
