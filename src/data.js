import { useEffect, useState } from "react";
import productos from "./productos.json"
import { Divide } from "lucide-react";

const ItemListContainer=()=>{
    const [productos, setProductos]=useState([])
    useEffect(()=>{
        setProductos(productos)
    },[])

    return (
        <div>
            <h1>Productos</h1>
            <ul>
                {productos.map(producto=>(
                    <li key={producto.id}>
                        <p>{producto.descripcion}</p>
                        <p>{producto.precio}</p>
                        <p>{producto.categoria}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default ItemListContainer