import React, { Component } from 'react';
import Basket from './Basket';
import Filter from './Filter';
import Goods from './Goods';
import './global.css';

const goodsEl = [
  {
     "product-name":"Pride Pink",
     "product-url":"https://2wheels.com/velo-26/female-velo/Pride-Pink",
     "product-image-url":"https://veliki.com.ua/files/2018/02_08/16_32/u_files_store_0_1277790.jpg",
     "product-price":"300",
     "product-description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     "product-gender":"female",
     "product-wheel-size":"26"
  },
  {
     "product-name":"Pride Rebel",
     "product-url":"https://2wheels.com/velo-29/male-velo/Pride-Rebel",
     "product-image-url":"https://veliki.com.ua/files/2018/02_08/16_27/u_files_store_0_1269991.jpg",
     "product-price":"500",
     "product-description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     "product-gender":"female",
     "product-wheel-size":"29"
  },
  {
     "product-name":"Pride Rebel",
     "product-url":"https://2wheels.com/velo-29/male-velo/Pride-Rebel",
     "product-image-url":"https://veliki.com.ua/files/2018/02_08/16_30/u_files_store_0_1275311.jpg",
     "product-price":"500",
     "product-description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     "product-gender":"female",
     "product-wheel-size":"29"
  },
  {
     "product-name":"Pride Rebel",
     "product-url":"https://2wheels.com/velo-29/male-velo/Pride-Rebel",
     "product-image-url":"https://veliki.com.ua/files/2018/02_08/16_33/u_files_store_0_1278510.jpg",
     "product-price":"500",
     "product-description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     "product-gender":"female",
     "product-wheel-size":"29"
  }
];
class App extends Component {


  render() {
    return (
      <div>
        <header>
          <Basket/>
        </header>
        <main className="main">
          <Filter />
          <Goods items = {goodsEl}/>
        </main>
      </div>
    );
  }

}

export default App;
