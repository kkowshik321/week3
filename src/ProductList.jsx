import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {

    const listStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    };

    return (
        <div style={listStyle}>
            {
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        thumbnail={product.thumbnail}
                    />
                ))
            }
        </div>
    );
};

export default ProductList;
