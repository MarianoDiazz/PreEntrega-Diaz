import NavBar from './Components/navBar/NavBar';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Components/cart/Cart';
import ItemDetailContainer from './Components/itemListContainer/ItemDetailContainer';
import { ShoppingCartProvider } from './context/CartContext';
import Form from './Components/views/Form';
import Footer from './Components/Footer/Footer';
function App() {

  return (
    <BrowserRouter>
      <ShoppingCartProvider>

        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categorias/:categoria' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/form' element={<Form />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App
