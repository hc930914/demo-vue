const BASE_URL = process.env.NODE_ENV === 'prod'
    ? './'
    : './';
module.exports = {
    publicPath: BASE_URL,
    devServer: {
        proxy: {  //配置跨域https://edu-prd.obs.cn-south-1.myhuaweicloud.com/test-sc-aqxx/file/edu/firm/pdf/(分公司)包车旅游分公司驾驶员安全学习记录2020-11-19.pdf
            '/api': {
                target: 'https://edu-prd.obs.cn-south-1.myhuaweicloud.com',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true,  //允许跨域
                pathRewrite: {
                    /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
                      实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
                     */
                    '^/api': ''
                }
            },
        }
    },
};
