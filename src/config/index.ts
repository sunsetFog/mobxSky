import {decrypt} from '@/utils/cryptoAes';
// 是否为测试环境
export const isDev = process.env.NODE_ENV !== 'production';

// 访客信息
// console.log('process.env', process.env);

export const guest_form_username = decrypt(process.env.REACT_APP_GUEST_FORM_USERNAME as any);
export const guest_form_password = decrypt(process.env.REACT_APP_GUEST_FORM_PASSWORD as any);

// 拆解process.env，可以做到按需使用。DefinePlugin也不会把process.env内部属性全部提取生成object
export const SERVER_URL = process.env.REACT_APP_SERVER_VIDEO_URL;
export const NODE_ENV = process.env.NODE_ENV;
// 是否为bob
export const isBob = process.env.REACT_APP_PLATFORM === 'bob';
// export const config = require(`@/theme/${process.env.REACT_APP_PLATFORM}/config`).default;

export default {
    // eEet 移动端下载链接
    eBetIosDownloadUrl: 'https://upload.ebetapp.com/',
    eBetAndroidDownloadUrl: 'https://www.ebetapp.com/'
};
