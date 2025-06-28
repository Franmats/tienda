import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { useCart } from "../CartContext/CartContext";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ProductsFilter = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const {name} =useParams()
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("productos").select("*").eq("type", name);
      if (error) {
        console.error("Error al traer productos:", error);
      } else {
        setProducts(data);
      }
    };
    fetchProducts();
  }, [name]);

  const handleAdd = (product) => {
    addToCart({ ...product, quantity: 1 });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container">
      <h2>Productos disponibles</h2>
      <div className="product-list">
        {products.length === 0 ? (
          <p>No hay productos para mostrar.</p>
        ) : (
          products.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleProductClick(product)}
            >
              <h3>{product.name}</h3>
              <p>Precio: ${product.price}</p>
              <p>Stock: {product.stock}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Evita que se dispare el detalle
                  handleAdd(product);
                }}
              >
                Agregar al carrito
              </button>
            </div>
          ))
        )}
      </div>

      {selectedProduct && (
        <div className="overlay" onClick={closeDetail}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <ItemDetail item={selectedProduct} close={closeDetail} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsFilter;