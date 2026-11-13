/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST || '.next',  // lets a test build run beside the dev server
  trailingSlash: true,          // /portales-inmobiliarios-paraguay/
  poweredByHeader: false,
  reactStrictMode: true,
};
export default nextConfig;
