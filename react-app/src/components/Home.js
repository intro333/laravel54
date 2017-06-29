import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import MenuMobile from './Popups/MenuMobile';

export default function Home () {
  return (
    <div className="container">
      <Navigation />
      <MenuMobile />
      <h1>Главная страница.</h1>
    </div>
  );
}