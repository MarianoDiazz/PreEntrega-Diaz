import React from 'react';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart';
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {

  const greeting = '¡Bienvenido a nuestra tienda en línea!';
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categorias/:categoria' element={<ItemListContainer/>} />
        <Route path='/product/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      {/* <ItemListContainer greeting={greeting} /> */}
      {/* <ItemDetailContainer itemId={2} /> */}


    </BrowserRouter>
  )
}

export default App
