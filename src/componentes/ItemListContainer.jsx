import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../Productos.json"; 
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const filteredItems = productos.filter(
          (item) => item.categoria === categoryId
        );
        setItems(filteredItems);
        setLoading(false);
      } catch (error) {
        setError("Ocurrió un error al cargar los productos.");
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryId]);

  
  if (loading) return <div>Cargando productos...</div>;

  
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/productos/${item.id}`}>{item.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;