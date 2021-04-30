const { override, fixBabelImports, addPostcssPlugins } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addPostcssPlugins([
    require('postcss-px-to-viewport')({
      unitToConvert: 'px', // 需要转化的单位
      viewportUnit: 'vw', // 需要转化的视窗单位
      fontViewportUnit: 'vw', // 字体需要转化成的视窗单位
      viewportWidth: 750, // 设计稿的宽度
      viewportHeight: 1334, // 设计稿的高度
      unitPrecision: 3, // 单位转化后的精度
      propList: ['*', '!letter-spacing'], // css 属性的单位， *代表全部css属性的单位
      selectorBlackList: ['.ignore'], // 指定不参与转换为视窗单位这类名
      minPixelValue: 1, // 小于或等于1px 则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 转换后是否直接更换属性值
      exclude: [/node_modules/], // 忽略的文件
      landscape: false // 是否处理横屏
    }),
    require('postcss-write-svg')({utf8: false}), // 适配Retina屏下使用border 线条加粗情况
    require('postcss-flexbugs-fixes')
  ])
);
