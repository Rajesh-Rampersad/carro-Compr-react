import React from 'react';

const styles = {
    DetallesCarro: {
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow: '1px 5px 5px rgba(174,173,173,.6)',
        marginTop: '30px',
        position: 'absolute',
        width: '300px',

    },
    ul: {
        padding: '0',
        margin: '0'
    },
    producto: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyleType: 'none',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
};

export function DetallesCarro({ carro }) {
    if (!carro || carro.length === 0) {
        return (
            null
        );
    }

    const sumaTotal = carro.reduce((total, producto) => total + producto.price * producto.cantidad, 0);

    return (
        <div style={styles.DetallesCarro}>
            <h3>Detalles del Carrito</h3>
            <ul style={styles.ul}>
                {carro.map((producto, index) => (
                    <li style={styles.producto} key={index}>
                        <img src={producto.img} alt={producto.name} width="40" height="32" />
                        {producto.name} - Cantidad: {producto.cantidad} - Precio: ${producto.price}
                    </li>
                ))}
            </ul>
            <p>Suma total: ${sumaTotal.toFixed(2)}</p>
        </div>
    );
}