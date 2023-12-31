/*
lws.config.js 是适用于 React 项目的轻量级打包和开发服务器工具 Parcel 的配置文件。
*/
const baseURL = process.env.REACT_APP_PLATFORM;
/**
 * Configuration Management
 * https://github.com/lwsjs/local-web-server/wiki/Configuration-Management
 */
module.exports = {
    /**
     * How to serve a Single Page Application (SPA)
     * https://github.com/lwsjs/local-web-server/wiki/How-to-serve-a-Single-Page-Application-(SPA)
     * SPA首页，/path/to/somewhere 此类路径全部交给index.html来处理
     * 下方的rewrite规则例外
     */
    port: 8891,
    spa: 'index.html',
    directory: 'dist', // SPA首页相对位置的目录，dist/index.html
    compress: true, // 启用gzip
    // http2: true, // 启用http2
    rewrite: [
        // 路由规则
        // {
        //   from: '/lib/(.*)',
        //   to: '../resource/lib/$1'
        // },
        // 静态资源访问路径转向规则
        // {
        //   from: '/static/(.*)',
        //   to: `${baseURL}/static/$1`,
        // },
        // 后端接口访问路径转向规则
        {
            from: '/agent/(.*)',
            to: `${baseURL}/agent/$1`
        }
        // websocket访问路径转向规则
        // {
        //   from: '/stream/(.*)',
        //   to: `${baseURL}/stream/$1`
        // }
    ]
};
