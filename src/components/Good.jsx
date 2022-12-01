import {useRef} from 'react';

function Good( props ) {
    const {image, name, price, releaseDate, id, funcAddOrder } = props;
    //const refId = useRef(id);
    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={image} alt="img" />
                
            </div>
            <div className="card-content">
            <span className="card-title">{name}</span>
            <p>Release date: {releaseDate}</p>
            </div>
            <div className="card-action">
                <span className="right" style={ {fontSize: '1.4rem'}}>Price: {price}</span>
                <button className="btn" onClick={ () => { funcAddOrder(id) }}>Купить</button>
            </div>
        </div>
    );
}

export default Good;