
import React, { useState, useEffect, useContext } from 'react'
import {getSingleItem} from '../../services/firebase';
import {Link, useParams} from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount';
import { cartContext } from '../../storage/cartContext';


function ItemDetailContainer() {
    
    const [product,setProduct] = useState([]);
    const [isInCart,setIsInCart] = useState (false);
    let {itemid} = useParams();

    const {cart, addItem,removeItem} = useContext (cartContext);

    function handleAddToCart (count){
        setIsInCart(true);
        
        alert (`Agregaste ${count} de ${product.title} al carrito`)
        product.count = count;
        addItem(product);
        
    }

    useEffect (() => {
        getSingleItem(itemid).then((respuesta) => {
            setProduct(respuesta);
        });
    },[])


    return (
        <>
        <h1>Titulo: {product.title}</h1>
        <img src={product.imgurl}/>
        <ItemCount onAddToCart={handleAddToCart}/>
        <Link to= "/cart">
        <button>Ir al Carrito</button>
        </Link>
        
        </>
    );
}

export default ItemDetailContainer;