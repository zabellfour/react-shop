import React, { Component } from 'react';
import Basket from './Basket';
import Filter from './Filter';
import Goods from './Goods';
import './global.css';

const goodsArray = [{
        "product-name": "Pride Pink",
        "product-url": "https://2wheels.com/velo-26/female-velo/Pride-Pink",
        "product-image-url": "https://veliki.com.ua/files/2018/02_08/16_32/u_files_store_0_1277790.jpg",
        "product-price": 300,
        "product-color": "gray",
        "product-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "product-gender": "female",
        "product-wheel-size": 12
    },
    {
        "product-name": "Pride Rebel",
        "product-url": "https://2wheels.com/velo-29/male-velo/Pride-Rebel",
        "product-image-url": "https://veliki.com.ua/files/2018/02_08/16_27/u_files_store_0_1269991.jpg",
        "product-price": 500,
        "product-color": "red",
        "product-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "product-gender": "female",
        "product-wheel-size": 29
    },
    {
        "product-name": "Pride Rebel",
        "product-url": "https://2wheels.com/velo-29/male-velo/Pride-Rebel",
        "product-image-url": "https://veliki.com.ua/files/2018/02_08/16_30/u_files_store_0_1275311.jpg",
        "product-price": 500,
        "product-color": "blue",
        "product-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "product-gender": "female",
        "product-wheel-size": 29
    },
    {
        "product-name": "Pride Rebel",
        "product-url": "https://2wheels.com/velo-29/male-velo/Pride-Rebel",
        "product-image-url": "https://veliki.com.ua/files/2018/02_08/16_33/u_files_store_0_1278510.jpg",
        "product-price": 200,
        "product-color": "red",
        "product-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "product-gender": "female",
        "product-wheel-size": 29,
    },
    {
        "product-name": "Pride Rebel",
        "product-url": "https://2wheels.com/velo-29/male-velo/Pride-Rebel",
        "product-image-url": "https://veliki.com.ua/files/2018/02_08/16_33/u_files_store_0_1278510.jpg",
        "product-price": 300,
        "product-color": "green",
        "product-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "product-gender": "male",
        "product-wheel-size": 15
    },
    {
        "product-name": "Pride Rebel",
        "product-url": "https://2wheels.com/velo-29/male-velo/Pride-Rebel",
        "product-image-url": "https://veliki.com.ua/files/2018/02_08/16_33/u_files_store_0_1278510.jpg",
        "product-price": 500,
        "product-color": "purple",
        "product-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "product-gender": "female",
        "product-wheel-size": 32
    },
    {
        "product-name": "Pride Rebel",
        "product-url": "https://2wheels.com/velo-29/male-velo/Pride-Rebel",
        "product-image-url": "https://veliki.com.ua/files/2018/02_08/16_33/u_files_store_0_1278510.jpg",
        "product-price": 500,
        "product-color": "blue",
        "product-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "product-gender": "female",
        "product-wheel-size": 20
    }

];


class App extends Component {

  
    constructor(props) {
        super(props);
        this.state = {
          filter : {
              'gender' : {
                objKey : 'product-gender',
                enabled : false,
                type : 'simple',
                value : 'female'
              },
              'color' : {
                objKey : 'product-color',
                enabled : false,
                type : 'simple',
                value : 'red'
              },
              'sizes' : {
                objKey : 'product-wheel-size',
                enabled : false,
                type : 'set',
                value : [12,15,32]
              },
              'priceRange' : {
                objKey : 'product-price',
                enabled : false,
                type : 'range',
                value : {
                  minValue : 200,
                  maxValue : 300
              }
            }
          }
        }
      }
      

      changeFilterState = () => {
        this.setState({
          filter : {
            'gender' : {
              objKey : 'product-gender',
              enabled : true,
              type : 'simple',
              value : 'male'
            },
            'color' : {
              objKey : 'product-color',
              enabled : false,
              type : 'simple',
              value : 'red'
            },
            'sizes' : {
              objKey : 'product-wheel-size',
              enabled : false,
              type : 'set',
              value : [12,15,32]
            },
            'priceRange' : {
              objKey : 'product-price',
              enabled : false,
              type : 'range',
              value : {
                minValue : 200,
                maxValue : 300
            }
          }
        }
        })
      }
         

      
    filterGoods = function(goodsArray, filtersObject) {
      return goodsArray.filter((el)=>{
        let filter;
        for (let filterType in filtersObject){
          filter = filtersObject[filterType];
          let filterKey = el[filter.objKey];
          if (!filter.enabled) { continue }
          switch(filter.type){
            case 'simple':
              if (filterKey !== filter.value) {
                return false;
              }
              break
            case 'range':
              if ((filterKey > filter.value.maxValue)||
                  (filterKey < filter.value.minValue) ) {
                    return false;
                  }
              break
            case 'set':
              if (!filter.value.includes(filterKey)) {
                return false;
              }
              break
            default : 
              console.error('Wrong filter type');
          }
        }
        return true;
      })
    }
    render() {
        return (
                <div>
                  <header>
                    <Basket />
                  </header> 
                  <main className = "main" >
                    <Filter handler = { this.handler } changeFilterState = {this.changeFilterState} />
                    <Goods items = {this.filterGoods(goodsArray, this.state.filter) }/> 
                  </main>
                </div>
        );
    }

}

export default App;