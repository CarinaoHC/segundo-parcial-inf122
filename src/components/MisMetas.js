import React, { useState } from "react";
import Metas from './Metas';
import '../styles/MisMetas.css';
import Pendiente from "./Pendiente";

function MisMetas() {
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');
    const [nro, setNum] = useState(0);
  const [show, setShow] = useState(true);
  const click = () => {
    setNum(nro + 1);
  }
  
  const mostrar = () => {
    setShow(!show);
  }
    const agregarNota = () => {
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
    };

    const eliminarNota = (id) => {
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));
    };

    const editarNota = (id, nuevoTexto) => {
        setNotas((prevNotas) =>
            prevNotas.map((nota) => (nota.id === id ? { ...nota, texto: nuevoTexto } : nota))
        );
    };
    return (
        <div className='container'>
            <div>
                <div className="texto"><h1>Mis metas</h1>
                <img className="image" src={require("../images/check.svg")} alt="" /></div>
                <div className="cuadro">
                    <div className="posicion1">
                        <input
                            className="input"
                            type="text"
                            value={nuevaNota}
                            onChange={(e) => setNuevaNota(e.target.value)}
                        />
                    </div>
                    <div className="posicion2">
                        <button className='boton' onClick={agregarNota}>Agregar</button>
                        {notas.map((nota) => (
                            <Metas
                                key={nota.id}
                                nota={nota}
                                onDelete={eliminarNota}
                                onEdit={editarNota}
                                funcion={click}
                            />
                        ))}
                    </div>
                </div>
                <div className="espacio-caja">
                    <div className="caja">
                        <div className="caja-text">
                            <div className="text1">Completadas : 0</div>
                        </div>
                        <div className="caja-text">
                            <div className="text2">Pendientes : <Pendiente nro={nro} mostrar={show}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MisMetas;