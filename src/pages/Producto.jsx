import React from "react"
import {useParams} from "react-router-dom"

const Producto=()=>{
    const {ProductoId}=useParams()

    return(
        <h2>Producto: {ProductoId}</h2>
    )
}
export default Producto