// Layout.jsx

const styles = {
    layout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        color: '#0a283e'
    },
    container: {
        width: '1200px',
    }
}

export function Layout({ children }) {
    return (
        <div style={styles.layout}>
            <div style={styles.container}>
                {children}
            </div>
        </div>
    );
};

