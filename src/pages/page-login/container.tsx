// tslint:disable:object-literal-sort-keys

import { connect } from 'react-redux';
import { ILoginParams, login } from './action';
import { PageLoginComponent } from './component';

export const mapStateToProps = (state: any) => ({
  errorMessage: state.PageLoginReducer.errorMessage,
  loader: state.PageLoginReducer.loader,
});

export const mapDispatchToProps = (dispatch: any) => ({
  login: (params: ILoginParams) => dispatch(login(params)),
});

export const PageLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageLoginComponent);

export default PageLoginContainer;
