import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { SignupPage } from './SignupPage';
import { PartnerPage } from './PartnerPage';
import { MainPage } from './MainPage';
import { CategoryPage } from './CategoryPage';
import { ChattingPage } from './ChattingPage';
import { SearchPage } from './SearchPage';
import { CategoryDetailPage } from './CategoryDetailPage';
import { MyPage } from './MyPage';
import { Navigation } from '../components/Navigation'

export const Router = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto bg-white-200 flex justify-center px-5 py-5 pb-20">
      <Switch>
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} exact />
        <Route path="/partner" component={PartnerPage} />
        <Route path="/chat" component={ChattingPage} />
        <Navigation>
          <Route path="/main" component={MainPage} />
          <Route path="/category" component={CategoryPage} />
          <Route path="/categories/:id" component={CategoryDetailPage} />
        </Navigation>
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};
