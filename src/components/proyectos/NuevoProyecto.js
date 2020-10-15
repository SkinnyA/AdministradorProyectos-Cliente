import React, {Fragment, useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // obtener state formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario} = proyectosContext

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

        // Agregar al state

        // Reiniciar el form
    }


    return (  
        <Fragment>
            <button 
                type="button"
                className="btn btn-block btn-primario"
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
                ) : null
            }
        </Fragment>
       
        
    );
}
 
export default NuevoProyecto;