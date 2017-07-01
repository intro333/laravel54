import axios from 'axios';
import * as modelActions from './actions';

export const makeRequest = (dispatcher, params, then, error) => {
  axios(params).then((result) => {
    if (then) then(result);
  }).catch(r => {
    if (error) error(r);
  });
};

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

export const getUserToken = dispatcher => {
  const params = {
    method:'post',
    url:'/api/getUserToken',
  };

  const then = response => {
    dispatcher(modelActions.getUserToken(response.data))
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};
