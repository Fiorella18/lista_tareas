import React from 'react'
import './BotonCrear.css'

function BotonCrear(props){ 
    const onClickButton = () =>{ 
        props.setOpenModal(prevState => !prevState)
            console(mensaje)
    }
    return(
        <button 
            className="BotonCrear"
            onClick={() => onClickButton(
                "Clickado!"
            )}
        >+
                
            </button>
    )

}

export{ BotonCrear}