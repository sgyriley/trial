import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { SignupPage } from './SignupPage';
import { PartnerPage } from './PartnerPage';
import { MainPage } from './MainPage';
import { CategoryPage } from './CategoryPage';
import { GymBallPage } from './GymBallPage'
import { ChattingPage } from './ChattingPage';

export const Router = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto bg-white-200 flex justify-center px-5 py-5 pb-24">
      <Switch>
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} exact />
        <Route path="/partner" component={PartnerPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/category" component={CategoryPage} />
        <Route path="/gymball" component={GymBallPage} />
        <Route path='/chat' component={ChattingPage} />
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};
