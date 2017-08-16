import React, {Component} from 'react';
import axios from 'axios';
import * as modelActions from './actions';

export const makeRequest = (dispatcher, params, then, error) => {
  axios(params).then((result) => {
    if (then) then(result);
  }).catch(r => {
    if (error) error(r);
  });
};

//Пример с параметрами
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

//Получить все категории.
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

//Получить продукты нужной категории.
export const setProducts = (dispatcher, productId) => {
  const params = {
    method:'post',
    url:'/api/get-products/' + productId,
  };

  const then = response => {
    dispatcher(modelActions.setProducts(response.data))
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Получить количество товаров, которые уже в заказе.
export const getProductCounts = (dispatcher) => {
  const params = {
    method:'post',
    url:'/api/get-product-counts'
  };

  const then = response => {
    dispatcher(modelActions.setProductCounts(response.data))
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Добавить товар в корзину.
export const addProductToCart = (dispatcher, data) => {
  const params = {
    method:'post',
    url:'/api/add-product-to-cart',
    data: data
  };

  const then = response => {
    dispatcher(modelActions.setProductsForCart(response.data))
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Показать товар в корзине.
export const showProductsInCart = (dispatcher) => {
  const params = {
    method:'post',
    url:'/api/get-products-in-cart'
  };

  const then = response => {
    dispatcher(modelActions.setProductsForCart(response.data))
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Удалить товар из корзины.
export const deleteProductFromCart = (dispatcher, data) => {
  const params = {
    method:'post',
    url:'/api/delete-product-from-cart',
    data: data
  };

  const then = response => {
    dispatcher(modelActions.setProductsForCart(response.data))
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Отправить заказ.
export const sendOrder = (dispatcher, data) => {
  const params = {
    method:'post',
    url:'/api/send-order',
    data: data
  };

  const then = response => {
    dispatcher(modelActions.setProductsForCart(response.data));
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Получить данные для личного кабинета
export const setUserInfo = dispatcher => {
  const params = {
    method:'post',
    url:'/api/getUserInfo',
  };

  const then = response => {
    dispatcher(modelActions.setUserInfo(response.data));
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Сохранить данные личного кабинета
export const updatePersonalData = (dispatcher, data) => {
  const params = {
    method:'post',
    url:'/api/update-data-of-personal-account',
    data: data
  };

  const then = response => {
    dispatcher(modelActions.setUserInfo(response.data))
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Изменить фото в личном аккаунте
export const changePhotoPersonalData = (dispatcher, data) => {
  console.log("dataOfFile", data)
  let form = new FormData();
  form.append('image', data['image']);
  // form.append('name', name);
  const params = {
    method:'post',
    url:'/api/change-photo-in-personal-account',
    data: form
  };

  const then = response => {
    console.log('image data', response.data)
    dispatcher(modelActions.setUserImage(response.data))
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Получить все заказы пользователя
export const ordersGetAll = dispatcher => {
  const params = {
    method:'post',
    url:'/api/orders-get-all',
  };

  const then = response => {
    dispatcher(modelActions.setOrders(response.data));
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};