import React from "react";

export default class GoodsCard extends React.Component{
    render(){
        
        let cardData = this.props.card ;
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
                <a href={cardData['product-url']}>See more</a>
                
            </div>
        )
    }
}