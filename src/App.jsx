import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import ItemListContainer from './Components/ItemListContainer';
function App() {
  const greetingMessage = '¡Bienvenido a nuestra tienda en línea!';
  return (
    <>
      <Navigation />
      <ItemListContainer greeting={greetingMessage} />    </>
  )
}

export default App
