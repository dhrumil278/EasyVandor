const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#251B37',
              '@label-color': '#251B37',
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};