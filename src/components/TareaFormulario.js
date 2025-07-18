import React, { useState } from 'react';
import '../styles/TareaFormulario.css';
import { v4 as uuidv4} from 'uuid';

function TareaFormulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
       setInput(e.target.value);
    };

    const manejarEnvio = e => {
        e.preventDefault();
        
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false,
        }
        if (input === '') {
            alert('Por favor, escribe una tarea');
            return;
        } else {
            props.onSubmit(tareaNueva);
        }
        setInput('');
    };

    return(
        <form 
            className='tarea-formulario'
            onSubmit={manejarEnvio}>
            <input 
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                value={input} // Vincula el valor del input al estado
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                Agregar tarea
            </button>
        </form>
    );
}

export default TareaFormulario;