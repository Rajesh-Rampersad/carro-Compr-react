import React, { useState } from 'react';
import { Productos } from './components/Productos';
import { Layout } from './components/layout';
import { Title } from './components/title';
import { Navbar } from './components/Navbar';

import './index.css'
import './App.css'

export function App() {
  const [state, setState] = useState({
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbeja', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' },
    ],
    carro: [],
    esCarroVisible: false,
  });

  // Agregar a la cesta de compras

  const agregarAlCarrito = (producto) => {
    setState((prevState) => {
      const { carro } = prevState;


      // Verificar si el producto ya está en el carro
      const productoExistente = carro.find((x) => x.name === producto.name);

      if (productoExistente) {
        // Si el producto ya está en el carro, actualizar la cantidad
        const newCarro = carro.map((x) =>
          x.name === producto.name
            ? { ...x, cantidad: x.cantidad + 1 }
            : x
        );
        console.log(productoExistente);

        //alert('Se agregó una unidad más');
        return { ...prevState, carro: newCarro };

      } else {
        // Si el producto no está en el carro, agregarlo con cantidad 1
        //alert(`Agregaste 1 unidad de ${producto.name}`);
        return {
          ...prevState,
          carro: [...carro, { ...producto, cantidad: 1 }],
        };
      }
    });
  };
  // mostrar carro
  const mostrarCarro = (producto) => {
    if (!state.carro.length) {
      alert("No hay productos en tu carrito");
      return;
    }
    setState((prevState) => ({ ...prevState, esCarroVisible: !prevState.esCarroVisible }));
  };


  return (
    <div className="App">
      < div >
        <Navbar
          carro={state.carro}
          esCarroVisible={state.esCarroVisible}
          mostrarCarro={mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarrito={agregarAlCarrito}
            productos={state.productos}
            esCarroVisible={state.esCarroVisible}
          />

        </Layout>
      </div >
    </div>
  )
}