/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    sri: { algorithm: 'sha256' }
  }
};

export default nextConfig;
