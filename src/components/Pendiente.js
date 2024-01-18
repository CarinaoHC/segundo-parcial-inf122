import React from 'react';

function Pendiente({ nro, mostrar }) {
    return (
        mostrar ? <div className='pendiente'>{nro}</div> : null
    );
}

export default Pendiente;