import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { SignupPage } from './SignupPage';
import { PartnerPage } from './PartnerPage';


export const Router = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} exact />
      <Route path="/partner" component={PartnerPage} />
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
