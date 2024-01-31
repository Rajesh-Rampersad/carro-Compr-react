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
        boxShadow: '0 4px 10px rgb(0,0,0,0.4)'

    }
}
export function Navbar() {
    return (
        <nav style={styles.navbar}>
            <Logo />
            <Carro />
        </nav>
    )
}