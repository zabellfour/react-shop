import React from "react";
import PropTypes from "prop-types";

export default class Basket extends React.Component {

	 constructor( props ) {
        super( props );
        
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
    
    render() {
        return (
			<div className="basket">
				Basket component
				<ul>{this.props.basketItems.map( this.itemsMapper )}</ul>
			</div>
        )
    }
}


Basket.propTypes = {
    removeFromBasket: PropTypes.func.isRequired,
    basketItems: PropTypes.array.isRequired
}