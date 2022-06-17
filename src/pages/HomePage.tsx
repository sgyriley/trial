import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';




export const HomePage = () => {
  const redirect = setTimeout(function() {
    document.location.href = '/main'
  }, 3000);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Router} />
      </Switch>
      <h1 className="flex text-5xl font-bold center italic" style={{
        margin: "auto",
      }}>
        rentrain
      </h1>
    </BrowserRouter>
  );
};
