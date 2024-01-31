
const styles = {
    img: {
        width: '35%',
        height: '45%',
        padding: '10px 15px',
        borderRadius: '50%',
        border: 'solid 1px #eee',
        float: 'left',
        boxShadow: 'rgb(0, 0, 0, 0.5) 0px 2px 5px)',
        marginTop: '12px',
    },
    producto: {
        padding: '10px 15px',
        borderRadius: '5px',
        border: 'solid 1px #eee',
        boxShadow: 'rgb(0, 0, 0, 0.5) 0px 2px 5px)',
        backgroundColor: '#fff',
        color: '#000000',
        fontSize: '.9em'
    }
}

export function Producto({ producto, agregarAlCarrito }) {
    return (
        <div>

            <img style={styles.img} src={producto.img} alt={producto.name} /><br />
            <h3 style={styles.poducto}>{producto.name}</h3>
            <p style={styles.producto}>price: ${producto.price}</p>

            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button><br />


        </div >)

}
