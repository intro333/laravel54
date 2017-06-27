import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation/Navigation'

export default function Home () {
  return (
    <div className="container">
      <Navigation />
      <h1>Главная страница.</h1>
    </div>
  );
}