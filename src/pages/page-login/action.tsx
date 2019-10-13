// tslint:disable:object-literal-sort-keys
// import { setNotification } from '@pages/base/action';
import ActionTypes from '@store/action-types';
// import FetchData, {
//   keyAccessToken,
//   keyMode,
//   keyProfile,
//   keyRefreshToken,
//   keyUserGroup,
// } from '@utils/fetch-data';
// import history from '@utils/history';

export const setLoader = (loader: boolean) => ({
  loader,
  type: ActionTypes.PAGE_LOGIN_SET_LOADING,
});

export interface ILoginParams {
  email: string;
  password: string;
}

export const login = (params: ILoginParams) => (dispatch: any) => {
  dispatch(setLoader(true));

  localStorage.setItem('isLoggedIn', 'true');
  window.location.href = '/';
  // return FetchData({
  //   uri: `v1/authorize`,
  //   method: 'post',
  //   params,
  //   // body: {
  //   //   params.email,
  //   //   action: 'GET_TOKEN',
  //   // },
  //   isReturnCallback: true,
  //   callback: (response: any) => {
  //     if (response.status === 200) {
  //       const credential = response.data.data;
  //       localStorage.setItem('isLoggedIn', 'true');
  //       localStorage.setItem(keyAccessToken, credential.accessToken);
  //       localStorage.setItem(keyRefreshToken, credential.refreshToken);
  //       localStorage.setItem(keyProfile, JSON.stringify(credential.profiles));
  //       localStorage.setItem(keyUserGroup, JSON.stringify(credential.userGroup));
  //       window.location.href = '/';
  //     } else {
  //       dispatch(setErrorMessage(response));
  //       const notif: any = {
  //         status: 'error',
  //         title: 'Login Failed',
  //         message: 'Login Failed!',
  //       };
  //       dispatch(setNotification(notif));
  //       history.push('/login');
  //     }
  //     dispatch(setLoader(false));
  //   },
  //   additionalHeader: {
  //     'x-api-key': keyMode,
  //   },
  // });
};
