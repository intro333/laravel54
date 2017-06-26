import React from 'react';
import { Link } from 'react-router-dom';

export default function Home () {
  return (
    <div>
      <h1>Здесь будет панель навигации!</h1>
      <Link to={'/categories'}>Категории</Link><br/>
      <Link to={'/products'}>Продукты</Link>
    </div>
  );
}