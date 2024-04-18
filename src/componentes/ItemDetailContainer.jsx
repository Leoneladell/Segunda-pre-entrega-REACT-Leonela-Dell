import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../Productos.json";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foundProduct = productos.find(
          (item) => item.id === parseInt(productId)
        );
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError(`No se encontró el producto con ID ${productId}`);
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [productId]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return null;

  return (
    <div>
      <h1>{product.nombre}</h1>
      <p>{product.descripcion}</p>
      <p>{product.precio}</p>
    </div>
  );
};

export default ItemDetailContainer;