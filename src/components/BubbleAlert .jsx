import React from 'react';
const styles = {
    bubbleAlert: {
        backgroundColor: '#e9725a',
        borderRadius: '14px',
        padding: '2px 10px',
        color: '#fff',
        fontSize: '0.9rem',
        width: '25px'

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
export { BubbleAlert as default };