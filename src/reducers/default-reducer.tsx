import INotification from '@interfaces/inotification';
import ActionTypes from '@store/action-types';

interface IState {
  notification: INotification;
  loader: boolean;
}

const initialState: IState = {
  loader: false,
  notification: {
    message: '',
    status: '',
    title: '',
  },
};

export const DefaultReducer = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_BASE_NOTIFICATION: {
      return { ...state, notification: action.notification };
    }
    case ActionTypes.SET_BASE_LOADER: {
      return { ...state, loader: action.loader };
    }
    case ActionTypes.CLEAR_BASE_NOTIFICATION: {
      return { ...state, notification: { status: '', message: '', title: '' } };
    }
    default:
      return state;
  }
};

export default DefaultReducer;
