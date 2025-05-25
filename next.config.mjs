import webpack from 'webpack';

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        // DataTable: 'datatables.net'
      })
    );
    return config;
  },
  sassOptions: {
    includePaths: ['scss'],
  },
};

export default nextConfig;
