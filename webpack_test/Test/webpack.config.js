/**
 * Created by ligang on 17/7/29.
 */
module.exports = function(env) {
    return require(`./build/webpack.${env}.config.js`);
};