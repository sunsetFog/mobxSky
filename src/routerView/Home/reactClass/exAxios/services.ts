import {get, post} from '@/utils/request';
// 全局弹窗配置信息
export function getDialogConfig(): Promise<any> {
    return get('/fd/api/v1/fast/getfastunpay', {
        noToast: true
    });
}

// 邀请好友(会员裂变)配置
export function getInviteInfoReq(): Promise<any> {
    return post('/api/v3/invite/index');
}
