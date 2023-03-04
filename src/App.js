import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import Cart from './Components/Cart/Cart.js';
import './App.css'
// import Slider from './Components/Main/Slider';

function App() {

    return <div>
      <Header />
      <Main />
      <Cart/>
      
    </div>
  }

export default App
