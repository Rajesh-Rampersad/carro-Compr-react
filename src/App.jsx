import React, { useState } from 'react';
import { Productos } from './components/Productos';
import { Layout } from './components/layout';
import { Title } from './components/title';
import { Navbar } from './components/Navbar';
import './index.css'
import './App.css'
import { Carro } from './components/Carro';

export function App() {
  const [state, setState] = useState({
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbeja', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' },
    ],
    carro: [],
  });

  const agregarAlCarrito = (producto) => {
    setState((prevState) => ({
      ...prevState,
      carro: [...prevState.carro, { ...producto, cantidad: 1 }],
    }));
    console.log(state.carro);
  };
  return (

    < div >
      <Navbar />
      <Layout>
        <Title />
        <Productos agregarAlCarrito={agregarAlCarrito}
          productos={state.productos} />

      </Layout>
    </div >
  )
}