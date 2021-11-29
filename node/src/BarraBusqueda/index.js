import React from 'react'
import './BarraBusqueda.css'
import { AppContext } from '../Context/'

function BarraBusqueda({valorBusqueda, funcionBuscar}){
    const buscar=(event)=>{
        funcionBuscar(event.target.value)
    }
    return (
        <input 
            className="BarraBusqueda"
            placeholder="Tarea a buscar"
            onChange={buscar}
            value={valorBusqueda}
        />
    )
}
export { BarraBusqueda }