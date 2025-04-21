const postcssConfigs = require('@taoyage/configs/postcss');
// const pxtorem=require('postcss-pxtorem');
module.exports = {
plugins: [
...postcssConfigs.plugins,
// pxtorem({
//     rootValue: 37.5, propList: ['*'], selectorBlackList: ['html']
// })
require('postcss-pxtorem')({ 
    rootValue: 37.5, 
    propList: ['*'], 
    selectorBlackList: ['html'],
    unitPrecision: 3,
    minPixelValue: 0,
    multiplier: 1,
    transformRuntime: true
}),
 ],
};