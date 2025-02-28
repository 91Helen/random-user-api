const path = require('path'); 

module.exports = { 
  webpack: { 
    configure: (webpackConfig, { env, paths }) => { 
      webpackConfig.resolve = { 
        ...webpackConfig.resolve, 
        fallback: { 
          "crypto": false, 
        }, 
      }; 
      return webpackConfig; 
    }, 
  }, 
}; 