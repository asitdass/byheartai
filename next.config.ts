import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // MVP renders every lesson as a fully static page via generateStaticParams (SSG).
  // Cache Components / Partial Prerendering (Next 16) is a documented future step
  // (see docs/ROADMAP.md "Watch"); it's deferred here because next-mdx-remote's
  // idle-callback polyfill trips PPR's unstable-value (Date.now) prerender guard.
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
