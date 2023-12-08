import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import ItemListContainer from './Components/ItemListContainer';
function App() {
  const greeting = '¡Bienvenido a nuestra tienda en línea!';
  return (
    <>
      <Navigation />
      <ItemListContainer greeting={greeting} />    </>
  )
}

export default App
