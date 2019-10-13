// tslint:disable:object-literal-sort-keys
import { IResponseNotif } from '@interfaces/iresponse-notif';
import { IRule } from '@interfaces/iuser-group';
import { notification } from 'antd';
import axios from 'axios';

interface IHeaders {
  Accept: string;
  Authorization: string;
}

export const FetchData = ({
  method,
  uri,
  params,
  body,
  customBaseUrl,
  isReturnCallback,
  callback,
  additionalHeader,
}: {
  method: string;
  uri: string;
  params?: any;
  body?: any;
  customBaseUrl?: string;
  isReturnCallback: boolean;
  callback?: any;
  additionalHeader?: any;
}) => {
  const url: string = `${customBaseUrl ? customBaseUrl : process.env.REACT_APP_API}/${uri}`;
  const accessToken: string = getAccesshToken();
  const headers: IHeaders = {
    ...additionalHeader,
    Accept: 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  let action: any = null;
  let config: object = { method, headers, url };

  if (method === 'get') {
    config = { ...config, params };
  } else {
    config = { ...config, data: body };
  }

  action = axios(config);

  if (isReturnCallback) {
    action = action
      .then((response: any) => {
        const json = response.data;
        callback({ status: response.status, data: json, meta: response.data.meta });
        return { status: response.status, data: json, meta: response.data.meta };
      })
      .catch((error: any) => {
        if (error.response) {
          if (error.response.status === 401) {
            actionRefreshToken();
          } else {
            let jsonError: string = error.toString();
            if (error.response) {
              jsonError = error.response.data.message;
            }
            callback(jsonError);
          }
        }
      });
  }

  return action;
};

export const keyAccessToken =
  process.env.REACT_APP_CREDENTIAL_ACCESS_TOKEN || 'BlueWhale@Credential@accessToken';
export const keyRefreshToken =
  process.env.REACT_APP_CREDENTIAL_REFRESH_TOKEN || 'BlueWhale@Credential@refreshToken';
export const keyProfile =
  process.env.REACT_APP_CREDENTIAL_PROFILE || 'BlueWhale@Credential@profile';
export const keyMode = process.env.REACT_APP_MODE || 'localhost';
export const keyUserGroup =
  process.env.REACT_APP_CREDENTIAL_USER_GROUP || 'BlueWhale@Credential@userGroup';

export const getAccesshToken = (): string => {
  const accessToken = localStorage.getItem(keyAccessToken);
  return accessToken ? accessToken : '';
};

export const getRefreshToken = (): string => {
  const refreshToken = localStorage.getItem(keyRefreshToken);
  return refreshToken ? refreshToken : '';
};

export const getUserGroup = (): any => {
  const userGroup = localStorage.getItem(keyUserGroup);
  if (userGroup) {
    return JSON.parse(userGroup);
  }
  return {};
};

export const getRules = () => {
  const group = getUserGroup();
  return group.userGroupRules;
};

export const getProfile = (): any => {
  const profile = localStorage.getItem(keyProfile);
  if (profile) {
    return JSON.parse(profile);
  }
  return {};
};

export const getModule = (moduleName: string): IRule | undefined => {
  const rules: IRule[] = getRules();
  if (rules === undefined) {
    return undefined;
  }
  return rules.find((item: IRule) => item.moduleName === moduleName);
};

export const getAccessRule = (module: IRule, ruleName: string) => {
  return module ? module.access[ruleName] : false;
};

export const menuAllowed = (moduleName: string, ruleName: string) => {
  const module: IRule | undefined = getModule(moduleName);
  if (module) {
    const accessRule = getAccessRule(module, ruleName);
    return accessRule;
  }
  return false;
};

export const actionRefreshToken = () => {
  const refreshToken = getRefreshToken();
  return FetchData({
    uri: `v1/authorize`,
    method: 'post',
    body: {
      code: refreshToken,
      action: 'REFRESH_TOKEN',
    },
    isReturnCallback: true,
    callback: (response: any) => {
      if (response.status === 200) {
        const credential = response.data.data;
        localStorage.setItem(keyAccessToken, credential.accessToken);
        localStorage.setItem(keyRefreshToken, credential.refreshToken);
        const currentUrl = window.location.href;
        window.location.href = currentUrl;
      } else {
        localStorage.clear();
        window.location.href = '/login';
      }
    },
  });
};

export const errorNotif = (response: IResponseNotif) => {
  const notif: any = {
    type: 'error',
    message: response.title ? response.title : 'Error',
    description: response.message ? response.message : 'Server Error!',
  };
  notification.open(notif);
};

export const successNotif = (response: IResponseNotif) => {
  const notif: any = {
    type: 'success',
    message: response.title ? response.title : 'Success',
    description: response.message ? response.message : 'Success',
  };
  notification.open(notif);
};

export default FetchData;
