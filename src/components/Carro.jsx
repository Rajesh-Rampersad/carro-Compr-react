import { BubbleAlert } from "./BubbleAlert "
import { DetallesCarro } from './DetallesCarro'


const styles = {
    carro: {
        backgroundColor: '#359a2c',
        color: '#fff',
        borderRadius: '15px',
        padding: '15px',
        border: 'none',
    },
    bubble: {
        position: 'relative',
        left: '12px',
        top: '20px',

    },

}

export function Carro({ carro, esCarroVisible, mostrarCarro }) {

    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
        <div>
            <span style={styles.bubble}>
                {cantidad !== 0 ?
                    <BubbleAlert value={cantidad}></BubbleAlert> :
                    null
                }
            </span>
            <button onClick={mostrarCarro} style={styles.carro}>Carro</button>
            {esCarroVisible ? <DetallesCarro carro={carro} /> : null}

        </div>
    )
}
