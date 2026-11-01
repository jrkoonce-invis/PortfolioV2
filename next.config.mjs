/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // These only apply when a request doesn't already match a static file
    // under public/ (e.g. public/legacy/_next/..., public/legacy/assets/...),
    // since Next checks the filesystem before falling back to rewrites.
    return [
      { source: "/legacy", destination: "/legacy/index.html" },
      { source: "/legacy/:path*", destination: "/legacy/:path*.html" },
    ];
  },
};

export default nextConfig;
