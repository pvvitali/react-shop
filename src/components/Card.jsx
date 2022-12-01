function Card( props ) {
    const { quantity = 0, handleBasket = Function.prototype} = props;

    return ( 
        <div className="shopping-cart indigo lighten-3 white-text" onClick={handleBasket}>
            <i className="material-icons">shopping_cart</i>
            { quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    )
}

export default Card;