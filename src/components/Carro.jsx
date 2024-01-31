import { BubbleAlert } from "./BubbleAlert "

const styles = {
    carro: {
        backgroundColor: '#359a2c',
        color: '#fff',
        borderRadius: '15px',
        padding: '15px',
        border: 'one',
    },
    bubble: {
        position: 'relative',
        left: '12px',
        top: '20px',

    }
}

export function Carro() {
    return (
        <div>
            <span style={styles.bubble}>
                <BubbleAlert value={10} />
            </span>
            <button style={styles.carro}>
                Carro
            </button>
        </div>
    )
}