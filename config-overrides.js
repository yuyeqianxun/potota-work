const { override, addWebpackModuleRule, addLessLoader, addPostcssPlugins  } = require("customize-cra");
const px2vw = require('postcss-px-to-viewport');

module.exports = override(
  addLessLoader({
     lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
         javascriptEnabled: true
       },
  }),
  addWebpackModuleRule(
    {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader', {
        loader: 'style-resources-loader',
        options: {
            patterns: [
                './src/global/*.less'
            ]
        }
      }]
    }
  ),
  addPostcssPlugins([
    px2vw({
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568
    })
  ]),
  
);
