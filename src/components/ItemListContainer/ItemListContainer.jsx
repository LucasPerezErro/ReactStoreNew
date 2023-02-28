import React, { useState, useEffect } from 'react'
import { getItemsByCategory} from '../../services/firebase';
import  {getItems} from '../../services/firebase';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router';
import Loader from '../Loader/Loader';



function ItemlistContainer() {
    const [products, setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const { categoryid } = useParams();

    useEffect(() => {

        if (categoryid) {
            getItemsByCategory(categoryid).then((respuesta) => {
                setProducts(respuesta);
            });

        } else {
            getItems().then((respuesta) => {
                setProducts(respuesta);
                setIsLoading(false);
            });
        };
    }, [categoryid]);

    if (isLoading)
    return <Loader/>;


    return (
        <>
        <ItemList products={products} />
        </>
    );
}

export default ItemlistContainer;