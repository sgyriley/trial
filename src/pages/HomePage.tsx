import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Axios from 'axios';

const API_KEY =
  '4b0d9aa8ef0225d2a713af66f658a37f045d010b6bc264e80abe1183c0ee309d36cc5b0927fa5ccb5801b77d708bbd206acaab2b6586f5f1111ceb0c7f5c30da4a849ac61cf183e9d510b0dfea30ed9783e9dac2f68279ea6bc35ec0e7fa74343e5300e55106bb49dd80dc7881363a6e24c4d1b8b82d258f3ce246c5013229db';
const config = {
  headers: { Authorization: `Bearer ${API_KEY}` },
};

Axios.get('http://localhost:1337/api/categories/2/lists', config)
  .then(console.log)
  .catch(console.log);

export const HomePage = () => {
  const redirect = setTimeout(function () {
    document.location.href = '/main';
  }, 3000);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Router} />
      </Switch>
      <h1
        className="flex text-5xl font-bold center italic"
        style={{
          margin: 'auto',
        }}
      >
        rentrain
      </h1>
    </BrowserRouter>
  );
};
