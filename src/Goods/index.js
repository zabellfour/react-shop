import React from "react";
import GoodsCard from "./GoodsCard"
export default class Goods extends React.Component{

    constructor(props){
        super(props);
      }

    render(){
        return <div  className="goods">
            {
                this.props.items.map((el, i ) => <GoodsCard key = {i} card = {el}/>)
            }
        </div>
    }
}