import React from "react"
import {useParams} from "react-router-dom"

const Productos =() => {
    const {ProductosId}=useParams()
    return(
        <h2>Productos: {ProductosId}</h2>
    )

}

export default Productos