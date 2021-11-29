import React from 'react'

import { useCookies } from './useCookies'
import { useGetBtc } from './useGetBtc'
import { useSearch } from './useSearch'

const contenidoLista = [
    {texto: "Tareaa 1 XX", completada: false},
    {texto: "Tareaa 2 XX", completada: false},
    {texto: "Tareaa 3", completada: true}
  ]
const nombreLista = 'MI_LISTA_TAREAS'

const [tareas, guardar] = useCookies (nombreLista, contenidoLista)
const [valorBuscado, tareasBuscadas, buscarTarea] = useSearch (tareas)

const {btc, error} = useGetBtc()

const tareasCompletadas = tareas.filter (tarea => tareaCompletada).length
const totalTareas = tareas.length

const completar = (texto)=>{
    const indice = tareas.findIndex(tarea => tarea.texto===texto)
    const nuevaLista = [...tareas]
    nuevaLista[indice].completada = !nuevaLista[indice].completada
    guardar(nuevaLista)
}

const borrar = (texto) =>{
    const indice = tareas.findIndex(tarea => tarea.texto===texto)
    const nuevaLista = [...tareas]
    nuevaLista.slice(indice,1)
    guardar(nuevaLista)
}

const nombreAutorCookie = 'NOMBRE_AUTOR'
const nombreAutorValor = 'JANE DONE'
const [nombreDelAutor] = useCookies(nombreAutorCookie, nombreAutorValor)

return (
    <AppContext.Provider value ={{
    btc,
    error,
    tareasCompletadas,
    totalTareas,
    valorBuscado,
    buscarTarea,
    tareasBuscadas,
    completar,
    borrar,
    nombreDelAutor,
    openModal,
    setOpenModal,
    agregarNueva,
    }}>
        {props.children}
    </AppContext.Provider>
  )
