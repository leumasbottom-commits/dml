/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this line to enable static exports
  output: 'export',

  // Optional: Change the build output directory (defaults to 'out')
  // distDir: 'build',

  // Note: If you are using next/image, you may need to configure a loader
  // for static exports. For example, to use a third-party loader:
  // images: {
  //   loader: 'custom',
  //   loaderFile: './my-loader.ts',
  // },
};

export default nextConfig;
