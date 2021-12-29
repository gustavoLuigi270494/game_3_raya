import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';





function App() {

    const [productos,setProductos]=useState([]);

    const obtenerProductos=async()=>{
    const datos = await fetch('https://fakestoreapi.com/products');
    const listaProductos =await datos.json();
    setProductos(listaProductos);
    //console.log(listaProductos);
  }
  
  useEffect(() => {
    obtenerProductos();
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h2>Mis productos</h2>
          <table border="1">
            <thead>
                <th>ID</th>
                <th>TITLE</th>
                <th>PRICE</th>
            </thead>
            <tbody>
              {
                productos.map(producto =>(<tr><td>{producto.id}</td><td>{producto.title}</td><td>{producto.price}'💲'</td></tr>))
              }
            </tbody>
          </table>
        </div>
      </header>
     
    </div>
  );
}

export default App;
