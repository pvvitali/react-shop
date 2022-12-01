function BasketItem(props) {
    const {oneOrder, deleteOrder = Function.prototype,
        increment_quantity= Function.prototype,
        decrement_quantity= Function.prototype } = props;
    return (
        <li className="collection-item">
            <div>
                <span>Товар: {oneOrder.name} &emsp; Цена: {oneOrder.price} &emsp; Количество: {oneOrder.quantity}
                </span>
                <span className="secondary-content">
                    <button className="btn-small teal lighten-4 button-quantity" onClick={ () => increment_quantity(oneOrder.id)}>+</button>                
                    <button className="btn-small teal lighten-4 button-quantity" onClick={ () => decrement_quantity(oneOrder.id)}>-</button>
                    <i className="material-icons clear-icon" onClick={ () => deleteOrder(oneOrder.id) }>clear</i>
                
                
                </span>
            </div>
        </li>
    );
}

export default BasketItem;