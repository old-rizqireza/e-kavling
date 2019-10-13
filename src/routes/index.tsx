// tslint:disable:jsx-no-lambda
// tslint:disable:no-console
import { BaseWrapper } from '@pages/base';
import { PageHome } from '@pages/page-home';
import { PageLogin } from '@pages/page-login';
import { PageNotFound } from '@pages/page-not-found';
import { PageUnAuthorized } from '@pages/page-unauthorized';
import store from '@store/store';
import { getModule, keyAccessToken } from '@utils/fetch-data';
import history from '@utils/history';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router';

export const isLoggedIn = localStorage.getItem('isLoggedIn');
export const accessToken = localStorage.getItem(keyAccessToken);

export const requireAuth = (
  PrivateComponent: any,
  props: any = {},
  moduleName: string,
  actionName: string,
) => {
  const module = getModule(moduleName);
  if (module === undefined) {
    return <Redirect to="/unauthorized" />;
  } else if (isLoggedIn && module && module.access[actionName] === true) {
    return <PrivateComponent {...props} />;
  } else {
    return <Redirect to="/unauthorized/islogin" />;
  }
};

export const requireAuthCommon = (PrivateComponent: any, props: any = {}) => {
  return isLoggedIn === 'true' ? <PrivateComponent {...props} /> : <Redirect to="/login" />;
};

export class AppRouter extends Component<any, any> {
  public render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact={true} path="/" component={PageLogin} />
            <Route exact={true} path="/login" component={PageLogin} />
            <Route exact={true} path="/auth/callback" component={PageLogin} />
            <Route exact={true} path="/unauthorized" component={PageUnAuthorized} />
            <Route exact={true} path="/unauthorized/:islogin" component={PageUnAuthorized} />
            <BaseWrapper>
              <Switch>
                <Route
                  exact={true}
                  path="/home"
                  component={(props: any) => requireAuthCommon(PageHome, props)}
                />
                <Route component={PageNotFound} />
              </Switch>
            </BaseWrapper>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default AppRouter;
