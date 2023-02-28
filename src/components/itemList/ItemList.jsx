import React from 'react'
import FlexWrapper from '../flexwrapper/FlexWrapper'
import Item from '../item/Item'

function ItemList(props) {
    return (
        <FlexWrapper>
            {props.products.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    detail={item.detail}
                    imgurl={item.imgurl}
                    discount={item.discount}
                />
            ))}
        </FlexWrapper>
    )
}

export default ItemList