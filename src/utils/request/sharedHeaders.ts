import { isDev } from '@/config';
import { getSessionUserId } from '@/utils/helpers';
import { Encrypt, generateRandom } from '@/utils/cryptoAes';
import { getUUID } from '@/utils/fingerprint';
import { LocalUserToken, LocalGuestToken } from '@/utils/utils_token';
export const _tokenFromURL = new URLSearchParams(window.location.search).get('token');

// 根据后端要求 如果是 /site/api开头的接口 使用写死的 X-API-XXX
const XAPIXXX = {
    tb: {
        dev: '53fceec945c8609becc260c257b1a09121a7a94682a2315ff43fc4498c1c78c7',
        pro: 'e38e659cbef786c78ab6b37415636d45585947ed541fa2441c52f39fc3bf8922',
    },
    bd: {
        dev: '247cdcd17150dab5afd248c27f24fed37269963511385ab1e5aa71451219e9c4',
        pro: '3afdfc6c650b762c492dddc48ea3e9a5684a978ef54f9a7e3dc786f62b29ee7d',
    },
};

/**
 * 支持从服务端客户端读取token
 */
export function token(): any {
    return _tokenFromURL || LocalUserToken.getToken();
}

export function guestToken(): any {
    return LocalGuestToken.getToken();
}

export function sharedHeaders(
    path: string,
    blob: boolean = false,
    needVisitToken: boolean = false,
) {
    const timeStamp = new Date().getTime();
    const randomNum = generateRandom(3);
    const platform = process.env.REACT_APP_PLATFORM;
    let aesStr = Encrypt(`${timeStamp}${randomNum}`);
    let contentType = 'application/json';

    if (path.includes('/site/api')) {
        // @ts-ignore
        aesStr = isDev ? XAPIXXX[platform].dev : XAPIXXX[platform].pro;
    }
    if (blob) {
        contentType = 'application/x-www-form-urlencoded';
    }
    const _shareHeader = {
        'Content-Type': contentType,
        'X-API-XXX': aesStr,
        'X-API-TOKEN': token(),
        'X-API-ID': getSessionUserId(), // 运维要求改成取用户ID
        'X-API-UUID': getUUID(),
        mode: 'cors',
        'client-type': 'h5',
    };

    // api需要临时token
    if (!token()) {
        _shareHeader['X-API-TOKEN'] = needVisitToken ? guestToken() : null;
    }

    return _shareHeader;
}
