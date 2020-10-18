import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {
    REGISTRO_EXISTOSO, 
    REGISTRO_ERROR, 
    OBTENER_USUARIO, 
    LOGIN_EXISTOSO, 
    LOGIN_ERROR, 
    CERRAR_SESION
} from '../../types/index';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

const AuthState = props => {

    const initialState = {
        token : localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state,dispatch] = useReducer(AuthReducer, initialState);

    // funciones
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            dispatch({
                type: REGISTRO_EXISTOSO,
                payload: respuesta.data
            })
            
            // obtener usuario
            usuarioAutenticado();
        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }

    }

    // devuelve el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if(token){
            // Funcion para enviar el token por headers
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });

        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario
            }}
        >{props.children}

        </AuthContext.Provider>
    )
}

export default AuthState;