/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    "/**": ["./vault/**/*", "./manifest.json"]
  }
};

export default nextConfig;
