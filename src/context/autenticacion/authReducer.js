import {REGISTRO_EXISTOSO, REGISTRO_ERROR, OBTENER_USUARIO, LOGIN_EXISTOSO, LOGIN_ERROR, CERRAR_SESION} from '../../types/index';

export default (state, action) => {
    switch(action.type){
        case REGISTRO_EXISTOSO:
        case LOGIN_EXISTOSO:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                autenticado: true,
                mensaje: null
            }
        case OBTENER_USUARIO:
            return{
                ...state,
                autenticado: true,
                usuario: action.payload
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                mensaje: action.payload
            }
        default:
            return state;
    }
}