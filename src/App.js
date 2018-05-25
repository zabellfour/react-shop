import React, { Component } from 'react';
import Basket from './Basket';
import Filter from './Filter';
import Goods from './Goods';
import './global.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Basket className="basket"/>
        </header>
        <main className="main">
          <Filter className="filter"/>
          <Goods className="goods"/>
        </main>
      </div>
    );
  }
}

export default App;
