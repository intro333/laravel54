import React, {Component} from 'react';
import axios from 'axios';
import * as modelActions from './actions';
import { changeSuccessModalDisplay, setScrollTop } from './components/Products/actions';

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
export const showProductsInCart = (dispatcher, data=[]) => {
  const params = {
    method:'post',
    url:'/api/get-products-in-cart',
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
export const sendOrder = (dispatcher, data, history) => {
  const params = {
    method:'post',
    url:'/api/send-order',
    data: data
  };

  const then = response => {
    if (response.data.successTime) {
      history.push('/sussess-page');//TODO редирект на страницу успешного завершения отправления заказа
    } else if (response.data.errorTime) {
      dispatcher(modelActions.setErrors(response.data));
      showOrdersQuotaInCart(dispatcher);
    }
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Очистить корзину.
export const clearCart = (dispatcher, history) => {
  const params = {
    method:'post',
    url:'/api/clear-cart'
  };

  const then = response => {
    if (response.status === 200) {
      history.push('/');
    }
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Показать квоты в корзине.
export const showOrdersQuotaInCart = (dispatcher) => {
  const params = {
    method:'post',
    url:'/api/get-orders-quota-in-cart'
  };

  const then = response => {
    dispatcher(modelActions.setOrdersQuotaForCart(response.data))
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Прочекать квоты в корзине на наличие 0.
export const checkTimeQuota = (dispatcher, data) => {
  const params = {
    method:'post',
    url:'/api/check-time-quota-in-cart',
    data: data
  };

  const then = response => {
    dispatcher(modelActions.setCheckTimeQuotaForCart(response.data))
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
    if(response.status === 200) {
      dispatcher(changeSuccessModalDisplay(true));
      dispatcher(modelActions.setUserInfo(response.data));
      setTimeout(function(){ dispatcher(changeSuccessModalDisplay(false)); }, 2000);
    }
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
export const ordersGetAll = (dispatcher, data) => {
  const params = {
    method:'post',
    url:'/api/orders-get-all',
    data: data
  };

  const then = response => {
    dispatcher(modelActions.setOrders(response.data));
    // console.log('ordersGetAll response.data', response.data);
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Отменить или удалить заказ
export const cancelOrDeleteOrder = (dispatcher, data, history) => {
  const params = {
    method:'post',
    url:'/api/order-cancel-or-delete',
    data: data
  };

  const then = response => {
    // history.push('/orders');
    if(response.data === 1)
      dispatcher(modelActions.componentWillReceivePropsChange(true));
    // console.log('ordersGetAll response.data', response.data);
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};

//Повторить заказ
export const repeatOrChangeOrder = (dispatcher, data, history) => {
  const params = {
    method:'post',
    url:'/api/order-repeat-or-change',
    data: data
  };

  const then = response => {
    dispatcher(modelActions.setProductsForCart(response.data));
    history.push('/cart');
  };

  const error = (error) => {
    console.log(error);
  };

  makeRequest(dispatcher, params, then, error);
};