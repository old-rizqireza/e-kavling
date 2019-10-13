import { connect } from 'react-redux';
import { clearNotification, setLoader } from './action';
import { Base } from './component';

export const mapStateToProps = (state: any) => state.DefaultReducer;
export const mapDispatchToProps = (dispatch: any) => ({
  clearNotification: () => dispatch(clearNotification()),
  setLoader: (val: boolean) => dispatch(setLoader(val)),
});

export const BaseContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Base);

export default BaseContainer;
