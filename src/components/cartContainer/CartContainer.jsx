import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createBuyOrder } from "../../services/firebase";
import { cartContext } from "../../storage/cartContext";
import { ButtonChild } from "../button/Button";



function CartContainer() {
    
    const { cart, removeItem, getTotalPriceInCart, clearCart } = useContext(cartContext)
    const [product, setProduct] = useState([]);
    const navigateTo = useNavigate();

    async function handleCheckout(userData) {
        const items = cart.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            count: product.count,
        }));
        //1. modelo de orden de compra
        const order = {
            items: items,
            date: new Date(),
            total: 1000,
        };
        
        //enviar a firebase . js 
        let id = await createBuyOrder(order);

       navigateTo(`/thanks/${id}`);
    }



        return (
            <div>
                <h2>Carrito</h2>
                <div>
                    {
                        cart.map(item => (
                            <div>
                                <h3>{item.title}</h3>
                                <img width="260" src={item.imgurl} />
                                <p>${item.price}</p>
                                <p>{item.count}</p>
                                <button onClick={() => removeItem(item.id)}>Eliminar item</button>

                                <button onClick={() => clearCart()}>Vaciar carrito</button>
                            </div>
                        ))}
                </div>
                <br />
                <small>Total de tu compra: $ {getTotalPriceInCart()}</small>
                <br />
                <br />
                <ButtonChild onTouch={handleCheckout}>Finalizar Compra</ButtonChild>
            </div>
        )
    }

    export default CartContainer;