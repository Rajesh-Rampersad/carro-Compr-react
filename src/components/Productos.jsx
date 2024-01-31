import { Producto } from "./Producto";


const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 30,
    }
}
export function Productos({ productos, agregarAlCarrito }) {

    return (
        <div style={styles.productos}>
            {productos.map(producto =>
                <Producto
                    agregarAlCarrito={agregarAlCarrito}
                    key={producto.name}
                    producto={producto} />
            )}
        </div>
    )
}