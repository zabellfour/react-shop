import React from "react";

export default class GoodsCard extends React.Component{
    constructor(props) {
        super(props);
    }

    // addGoods(){
    //     //TODO

    //     console.log(this.props.card);

    //     const card = localStorage.getItem('key');
    //     const cardParse = JSON.parse(card) || {};

    //     console.log(cardParse);

    //     for(let index in cardParse) {
    //         if(Object.keys(cardParse).includes(this.props.card['product-id'])) {
    //             cardParse[this.props.card['product-id']]['product-count'] = Number(cardParse[this.props.card['product-id']]['product-count']) + 1;
    //             return;
    //         }
    //         cardParse[this.props.card['product-id']] = {};
    //         cardParse[this.props.card['product-id']]['product-count'] = 1;
    //     }

    //     if(!Object.keys(cardParse).length) {

    //         cardParse[this.props.card['product-id']] = {};
    //         cardParse[this.props.card['product-id']]['product-count'] = 1;
    //     }

    //     localStorage.setItem('key', JSON.stringify(cardParse));

    // }

    render(){
        
        let cardData = this.props.card;

        return (
            <div  className="card">
                <div className="img-holder">
                    <img src={cardData['product-image-url']} alt="img"/>
                </div>
                <div className="additional-info">
                    <span>{cardData['product-gender']}</span>
                    <span>{cardData['product-wheel-size']}</span>
                </div>
                <h3>{cardData['product-name']}</h3>
                <p>{cardData['product-description']}</p>
                <div className="links-holder">
                    <a href={cardData['product-url']}>See more</a>
                    <span 
                        className="add-to-card"
                        onClick={this.addToBasket}>Add to card
                    </span>
                </div>
            </div>
        )
    }
}