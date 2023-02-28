import {UserContextProvider} from "./storage/userContext";

import './App.css';

import ItemlistContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';

import Appe from './apirick/test';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainter/ItemDetailContainer';
import { CartContextProvider } from "./storage/cartContext";
import CartContainer from "./components/cartContainer/CartContainer";
import OrderDetails from "./components/orderDetails/OrderDetails";
import { exportDataWithBatch } from "./services/firebase";





function App() {
  
  return (
    <>
    <CartContextProvider>

      <BrowserRouter>
        <br />
        <br />
        <br />
        <NavBar />
        <br />
        <button onClick={exportDataWithBatch}>Exportar Data</button>
        
        <Routes>
          <Route path='/' element={<ItemlistContainer />} />
          <Route path='/home' element={<ItemlistContainer />} />
          <Route path='/item/:itemid' element={<ItemDetailContainer />} />
          <Route path='/category/:categoryid' element={<ItemlistContainer />} />
          <Route path='/merchandice' element={<Appe />} />
          <Route path='/cart' element={<CartContainer/>} />
          <Route path='/thanks/:orderid' element={<OrderDetails/>} />
        </Routes>
        <br />
        <br />
        <br />
        <br />
        <br />
      </BrowserRouter>
      </CartContextProvider>



    </>
  );
}

export default App;
