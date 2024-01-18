import React, { useState } from 'react';
import '../styles/Metas.css';
function Nota({ nota, onDelete, onEdit, funcion }) {
    const [editando, setEditando] = useState(false);
    const [nuevoTexto, setNuevoTexto] = useState(nota.texto);

    const handleGuardar = () => {
        onEdit(nota.id, nuevoTexto);
        setEditando(false);
        funcion(true);
    };

    return (
        <div>

            {editando ? (
                <div className='editar-nota'>
                    <textarea
                        value={nuevoTexto}
                        onChange={(e) => setNuevoTexto(e.target.value)}
                    />
                    <button onClick={handleGuardar}>Guardar</button>
                </div>
            ) : (
                <div className='contenedor-meta'>
                    <div className='meta'>
                    <div className='texto'><p className='nota'>{nota.texto}</p></div>
                    <button className='boton' onClick={() => onDelete(nota.id)}><img className="img" alt="Eliminar" src="../images/trash.svg" /></button>
                    <button className='boton' onClick={() => setEditando(true)}><img className="img" alt="Actulizar" src="../images/trash.svg" /></button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nota;