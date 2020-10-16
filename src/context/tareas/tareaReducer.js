import {TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA} from '../../types';

export default (state, action) => {
    switch(action.type){
        case TAREAS_PROYECTO:
            return{
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREA: 
            return {
                ...state,
                tareas: [...state.tareas, action.payload], // crear un array nuevo de tareas con las q tenemos mas la nueva
                errortarea: false
            }
        case VALIDAR_TAREA:
            return{
                ...state,
                errortarea: true
            }

        default:
            return state;
    }
}