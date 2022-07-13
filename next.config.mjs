import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

// Set up MDX file support
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkGfm adds support for markdown tables
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
