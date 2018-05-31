import React from "react";
import GoodsCard from "./GoodsCard"
export default class Goods extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          value : ''
        };
        this.setValue = e => {
          const inputedValue = e.target.value ;
          this.setState({value : inputedValue});
        }
        this.filter = el => {
          return el['product-name'].toUpperCase().includes(this.state.value.toUpperCase())
        }       
      }

    render(){
       
        return <div  className="goods">

            <div class="search-field">
              <input value={this.state.value} onChange={this.setValue} placeholder="type to search"/>
            </div>
            
            {
                
                this.props.items.filter(this.filter).map((el, i ) => <GoodsCard key = {i} card = {el}/>)

            }
        </div>
    }
}