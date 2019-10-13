// tslint:disable: object-literal-sort-keys
import INotification from "@interfaces/inotification";
import ActionTypes from "@store/action-types";

export const setNotification = (notification: INotification) => ({
  type: ActionTypes.SET_BASE_NOTIFICATION,
  notification
});

export const setLoader = (loader: boolean) => ({
  type: ActionTypes.SET_BASE_LOADER,
  loader
});

export const clearNotification = () => ({
  type: ActionTypes.CLEAR_BASE_NOTIFICATION
});
