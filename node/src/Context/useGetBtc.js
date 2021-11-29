import React from 'react'

function useGetBtc(){
    const [data, obtenerData]= React.useState(true)
    const [error, setError] = React.useState(null)
    const [btc, setBtc] = React.useState(null)

    const consultar = async()=> {
      const peticion = await fetch('https://api.coindesk.com/v/bpi/currentprice.json')
      const respuesta = await peticion.json()
      obtenerData(respuesta)
    }

    React.useEffect(()=>{
      try{
        consultar()
        setBtc(data.bpi.USD.rate)
        setError(null)
      }catch (error){
        setError("Por favor recargue la pagina para ver el precio del BTC")
        setBtc(null)
      }
    }
    )
    return {
      btc,
      error
    }
}

export {useGetBtc}