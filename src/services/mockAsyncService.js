const databaseItems = [
    {
        id: 1,
        category: "mortys",
        stock: 6,
        title: "Seed Boy",
        discount: 25,
        price: 649,
        imgurl: "https://http2.mlstatic.com/D_NQ_NP_648349-MLA31143891628_062019-O.webp",
        detail: "Big Mutant Arm",
        discount: 25,
    },
    {
        id: 2,
        category: "ricks",
        stock: 2,
        title: "Mad Rick",
        newProduct: true,
        price: 899,
        imgurl: "https://http2.mlstatic.com/D_NQ_NP_811416-MLB48897495491_012022-W.jpg",
        detail:"Rick with snake",
    },

];

function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(databaseItems);
        }, 1000);
    });
}

export function getSingleItem(itemid) {

    let itemReq = databaseItems.find ((item) => {
        return item.id === Number (itemid);
    });

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve( itemReq );
        }, 100)
    });
}


export function getItemsByCategory(categoryid) {
    let itemsCat = databaseItems.filter((item) => item.category === categoryid);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve( itemsCat );
        }, 100)
    });
}


export default getItems;