const styles = {
    bubbleAlert: {
        backgroundColor: '#e9725a',
        borderRadius: '15px',
        padding: '2px 10px',
        color: '#fff',
        fontSize: '0.9rem',
        width: '20px',

    }

}

export function BubbleAlert({ value }) {
    const getNumber = (n) => {
        if (!n) { return ' '; }
        return n > 9 ? '9+' : n;
    }

    return (

        <span style={styles.bubbleAlert}>
            {getNumber(value)}
        </span>
    )
}
