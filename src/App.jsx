import React from 'react';
import NavBar from './Components/navBar/NavBar';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Components/cart/Cart';
import ItemDetailContainer from './Components/itemListContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categorias/:categoria' element={<ItemListContainer/>} />
        <Route path='/product/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>



    </BrowserRouter>
  )
}

export default App
