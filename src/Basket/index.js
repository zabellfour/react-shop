import React from "react";
import PropTypes from "prop-types";

export default class Basket extends React.Component {

	 constructor( props ) {
        super( props );

       this.state = {
           isHidden: true
       }
        
        this.removeHandler = e => {
            const elementIndex = +e.target.getAttribute( "data-element-index" );
            this.props.removeFromBasket( elementIndex );
        }
        
        this.itemsMapper = ( el, i ) => (
            <li key={i}>
                <span>{el}</span>
                <button onClick={this.removeHandler} data-element-index={i}>Remove</button>
            </li>
        )
    }

    toggleHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    
    render() {
        return (
			<div className="basket">
          <a href="#" onClick={this.toggleHidden.bind(this)}>Basket</a>
          {!this.state.isHidden && <ul className="goods-list">{this.props.basketItems.map( this.itemsMapper )}</ul>}
			</div>
        )
    }
}
const BasketList = () => (
    <ul className="goods-list">{this.props.basketItems.map( this.itemsMapper )}</ul>
)


Basket.propTypes = {
    removeFromBasket: PropTypes.func.isRequired,
    basketItems: PropTypes.array.isRequired
}