import React from "react";

export default class GoodsCard extends React.Component{
    render(){
        
        let cardData = this.props.card ;
        return (
            <div  className="card">
                <h1>{cardData['product-name']}</h1>
                <div className="img-holder">
                    <img src={cardData['product-image-url']} alt="img"/>
                </div>
                <div className="additional-info">
                    <span>Gender</span>
                    <strong>{cardData['product-gender']}</strong>
                </div>
                <div className="additional-info">
                    <span>Wheel Size</span>
                    <strong>{cardData['product-wheel-size']}</strong>
                </div>
                <div className="additional-info">
                    <span>Color</span>
                    <strong>{cardData['product-color']}</strong>
                </div>
                <p>{cardData['product-description']}</p>
                <h2>{cardData['product-price']}$</h2>
                <a href={cardData['product-url']}>See more</a>
            </div>
        )
    }
}