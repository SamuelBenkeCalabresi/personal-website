import remarkFrontmatter from "remark-frontmatter";

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            providerImportSource: "@mdx-js/react",
            remarkPlugins: [remarkFrontmatter],
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "tsx", "md", "mdx"],
  /*  images: {
    loader: "imgix",
    path: "https://images.unsplash.com/",
  }, */
};

export default nextConfig;
