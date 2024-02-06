import { Logo } from './Logo';
import { Carro } from './Carro';
const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        height: '100px',
        padding: '0 50px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.4)'

    }
}
export function Navbar({ carro, esCarroVisible, mostrarCarro }) {
    return (
        <nav style={styles.navbar}>
            <Logo />
            <Carro
                carro={carro}
                esCarroVisible={esCarroVisible}
                mostrarCarro={mostrarCarro}
            />
        </nav>
    )
}
