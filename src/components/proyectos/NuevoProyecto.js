import React, {Fragment, useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // obtener state formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext

    // state para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    // extraer nombre de proyecto
    const {nombre} = proyecto;


    // lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto, // tomamos una copia del proyecto
            [e.target.name]: e.target.value // y le asignamos el nuevo valor
        })
    }

    // cuando el usuario en via un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar el proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }

        // Agregar al state
        agregarProyecto(proyecto);

        // Reiniciar el form
        guardarProyecto({
            nombre: ''
        })
    }

    // mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }


    return (  
        <Fragment>
            <button 
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >Nuevo Proyecto</button>
            {formulario ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />
                    </form>
                ) : null }
            {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
        </Fragment>
       
        
    );
}
 
export default NuevoProyecto;