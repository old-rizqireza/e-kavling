import ActionTypes from '@store/action-types';

interface IState {
  errorMessage: string;
  loader: boolean;
}

const initialState: IState = {
  errorMessage: '',
  loader: false,
};

export const PageLoginReducer = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.PAGE_LOGIN_SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case ActionTypes.PAGE_LOGIN_SET_LOADING:
      return { ...state, loader: action.loader };
    default:
      return state;
  }
};

export default PageLoginReducer;
