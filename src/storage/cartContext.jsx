import useCopy from "../hooks/useCopy";
const { createContext, useState } = require("react");

export const cartContext = createContext();

export function CartContextProvider(props) {
    let [cart, setCart] = useState([]);



    const newCart = useCopy(cart);

    function addItem(item) {
        const isInCart = cart.some((itemInCart) => itemInCart.id === item.id);

        if (isInCart) {
            let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
        } else {
            setCart([...cart, item]);
        }
    }

    function removeItem(id) {

        const isInCart = cart.some((itemInCart) => itemInCart.id === id);

        if (isInCart) {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].count > 1) {
                    cart[i].count--;
                } else {
                    cart.splice(i, 1);
                }
            }
        }

        setCart([...cart]);

    }

    function clearCart() {
        setCart([]);
    }

    function getTotalItems() {
        let total = 0;

        cart.forEach((item) => (total) += 1);

        return total;
    }

    function getTotalPriceInCart() {
        let total = 0;
        cart.forEach((item) => {
            if (item.count > 1) {
                total = item.price * item.count;
            } else {
                total += item.price;
            }
        })

        return total;
    }

    function updateQty(id, count) {
        let index = newCart.findIndex((item) => item.id === id);
        newCart[index].count += count;
        setCart(newCart);
    }

    const value = {
        cart,
        addItem,
        getTotalItems,
        getTotalPriceInCart,
        removeItem,
        updateQty,
        clearCart,
    };

    return (
        <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
    );
}
