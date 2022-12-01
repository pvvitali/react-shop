import BasketItem from "./BasketItem";

function BasketList(props) {
    const { order = [], handleBasket = Function.prototype,
        deleteOrder = Function.prototype,
        increment_quantity= Function.prototype,
        decrement_quantity= Function.prototype  } = props;
    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            { order.length ? order.map( el => <BasketItem key={el.id} oneOrder={el}
                deleteOrder={deleteOrder}
                increment_quantity={increment_quantity}
                decrement_quantity={decrement_quantity} 
            /> ) : <li className="collection-item">Корзина пуста</li>}
            <li className="collection-item active">Общая сумма: &emsp;{order.reduce(
                (accumulator, curentValue) => {return parseInt(curentValue.price * curentValue.quantity) + accumulator},
                0
            )}</li>
            <i className="material-icons button-close" onClick={handleBasket}>clear</i>
        </ul>
    );
}

export default BasketList;
