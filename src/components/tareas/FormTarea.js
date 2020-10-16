import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    // extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext

    if(!proyecto) return null;

    // array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;


    return (  
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>
        </div>
    );
}
 
export default FormTarea;