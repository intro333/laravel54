import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import axios from 'axios';
import * as modelActions from './actions';


export const makeRequest = (dispatcher, params, then, error) => {
  axios(params).then((result) => {
    if (then) then(result);
  }).catch(r => {
    if (error) error(r);
  });
};

//Примерс параметрами
export const fetch = (dispatcher, options, then, error) => {
  makeRequest(
    dispatcher,
    options,
    r => {
      if (then) then(r.data);
    },
    error
  );
};

//Получить токен
export const setUserToken = dispatcher => {
  const params = {
    method:'post',
    url:'/api/getUserToken',
  };

  const then = response => {
    dispatcher(modelActions.setUserToken(response.data))
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Выход, разлогиниться.
export const logOut = token => {
  const params = {
    method:'post',
    url:'/logout',
    data: token
  };

  const then = response => {
    window.location.href = '/';
  };

  const error = (error) => {
    console.log("error", error);
  };

  makeRequest('', params, then, error);
};

//Получить все категории продуктов.
export const setCategories = dispatcher => {
  const params = {
    method:'post',
    url:'/api/get-categories',
  };

  const then = response => {
    dispatcher(modelActions.setCategories(response.data))
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};