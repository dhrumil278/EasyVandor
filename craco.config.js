const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#52b788',
              '@label-color': '#ffffff',
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};