import {useState, useEffect, useRef} from 'react';
import {API_KEY, API_URL} from '../config';
import Good from './Good';
import Card from './Card';
import BasketList from './BasketList';
import { Alert } from './Alert';



function Content() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [basketShow, setBasketShow] = useState(false);
    const [name, setName] = useState('');

    const refTimer = useRef(null);

    const handleBasket = () => {
        setBasketShow(!basketShow);
    }

    const addOrder = ( id ) => {
        const tempOrder = [ ...order ];
        let isInBasket = false;
        const filterOrder = tempOrder.map( (item) => {
             if( item.id === id ) {item.quantity = item.quantity + 1; isInBasket = true; }
             return item;
            } );
        if( !isInBasket ) {
            const index = goods.findIndex( (el) => el.id === id );
            filterOrder.push( { ...goods[index], quantity: 1} );
            //
            setName( goods[index].name);
        }
        setOrder( filterOrder );
    }

    const deleteOrder = ( id ) => {
        setOrder( order.filter( (el) => el.id !== id ) );
    }

    const increment_quantity = ( id ) => {

        const filterOrder = order.map( (item) => {
            if( item.id === id ) item.quantity = item.quantity + 1; 
            return item;
           } );
        setOrder( filterOrder );
    }

    const decrement_quantity = ( id ) => {

        const filterOrder = order.map( (item) => {
            if( item.id === id && item.quantity > 1 ) item.quantity = item.quantity - 1; 
            return item;
           } );
        setOrder( filterOrder );
    }



    useEffect( () => {
        fetch( API_URL, {headers: {Authorization: API_KEY}})
        .then( (response) => response.json())
        .then( (data) => {
            if(data.featured) setGoods(data.featured);
            setLoading(false);            
            });
    }, []);

    useEffect( () => {
        if( refTimer.current ) clearTimeout(refTimer.current);
        refTimer.current = setTimeout( () => {setName('')}, 3000);
    }, [name])


    return (
        <div className='container'>
            <Card quantity={order.length} handleBasket={handleBasket} />
            <div className="content goods">
                {loading ? <h3>Loading</h3> : goods.map( (obj) => <Good key={obj.id} {...obj} funcAddOrder={addOrder} /> )}
            </div>
            { basketShow && <BasketList order={order}
                handleBasket={handleBasket}
                deleteOrder={deleteOrder}
                increment_quantity={increment_quantity}
                decrement_quantity={decrement_quantity}              
                /> }
            { name ? <Alert name={name}/> : null}
        </div>
    );
}

export default Content;