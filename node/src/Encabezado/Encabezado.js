import React from 'react'
import './Encabezado.css'
import { AppContext } from '../Context'

function Encabezado({completadas, total}){
    return(
        <h1 className="Encabezado">
            Tareas completadas {completadas} de {total}
        </h1>
    )
}
export { Encabezado }