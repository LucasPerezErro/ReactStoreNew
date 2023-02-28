import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    getDoc,
    collection,
    getDocs,
    where,
    query,
    addDoc,
    writeBatch,
} from "firebase/firestore";
//1. Iniciar la conexión a Firestore

const firebaseConfig = {
    apiKey: "AIzaSyB6h0GkR704iAhkNlLGn27ooUunJjJDoQg",
    authDomain: "tiendareact-a2e07.firebaseapp.com",
    projectId: "tiendareact-a2e07",
    storageBucket: "tiendareact-a2e07.appspot.com",
    messagingSenderId: "661521498486",
    appId: "1:661521498486:web:d19ba18168efe087da7a57"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function testApp() {
    console.log("Conectandonos a firestore", db);
}

//1. Obtener un producto
export async function getSingleItem(itemid) {
    const docRef = doc(db, "products", itemid);
    const snapshot = await getDoc(docRef);

    const docData = snapshot.data();
    docData.id = snapshot.id;
    return docData;
}

//2. Obtener todos los productos para el ILC
export async function getItems() {
    const productsCollection = collection(db, "products");

    const querySnapshot = await getDocs(productsCollection);

    const dataDocs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));

    return dataDocs;
}



//3. Obtener los productos según su category
export async function getItemsByCategory(categoryid) {
    const productsCollectionRef = collection(db, "products");

    const q = query(productsCollectionRef, where("category", "==", categoryid));

    const querySnapshot = await getDocs(q);

    const dataDocs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    console.log(dataDocs);
}

//////////////////////////////////////////////////////////////

export async function createBuyOrder(order) {
    const ordersCollection = collection(db, "orders");

    const orderDoc = await addDoc(ordersCollection, order);
    return orderDoc.id;
}

//////////////////////////////////////////////////////////

export async function exportDataWithBatch() {
    const productsCollectionRef = collection(db, "products");
    const batch = writeBatch(db);

    const products = [
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
            detail: "Rick with snake",
        },

    ];

    for (let item of products) {
        item.index = item.id;
        delete item.id;

        const newDoc = doc(productsCollectionRef);
        batch.set(newDoc, item);
    }

    const commitDone = await batch.commit();
    console.log("--->", commitDone);
}