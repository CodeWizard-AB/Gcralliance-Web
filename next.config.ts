import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ik.imagekit.io",
				pathname: "/gcralliance/**",
			},
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				pathname: "/images/**",
			},
		],
	},
};

export default nextConfig;
