import React from 'react'

function useCookies(nombreCookie, contenidoCookie){

    constalmacenamientoLocal = localStorage.getItem(nombreCookie)
    let elementoGuardado

    if (!almacenamientoLocal) {
        // no hay una cookie guardada con el nombre dado
     const elementoSerializado = JSON.stringify(contenidoCookie)//serializacion
     localStorage.setItem(nombreCookie, elementoSerializado)
     elementoGuardado = contenidoCookie
    }else{
     elementoGuardado = JSON.parse(almacenamientoLocal)
    }
    const [elemento, setElemento] = React.useState(elementoGuardado)
    const guardar = (elementos) =>{
        if(elemento.legth <=0){
            localStorage.removeItem(nombreCookie)
        }else{
            const elementosSerializados = JSON.stringify(elementos)
            localStorage.setItem(nombreCookie, elementosSerializados)
        }
        setElemento(elementos)
        } 
      return[elemento, guardar]  
    }
export { useCookies}
