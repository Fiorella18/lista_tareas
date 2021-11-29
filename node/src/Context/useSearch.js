import React from 'react'

function useSearch(tareas)
 {
  const [valorBuscado, buscarTarea] = React.useState('')

  let tareasBuscadas = []
  if (valorBuscado.length<=0){
    tareasBuscadas = tareas
  }else{
    tareasBuscadas = tareas.filter(
    tarea =>{
      const textoTarea = tarea.texto.toLowerCase()
      const textoBuscado = valorBuscado.toLowerCase()
      return textoTarea.includes(textoBuscado)
    }
    ) 
  }

  return [valorBuscado, tareasBuscadas,buscarTarea]
  }

  export { useSearch}
