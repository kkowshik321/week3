import React from "react";

const ProductCard = ({ title, price, thumbnail }) => {

    const cardStyle = {
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "220px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        backgroundColor: "white"
    };

    const imageStyle = {
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "8px"
    };

    const titleStyle = {
        fontSize: "16px",
        fontWeight: "bold",
        margin: "10px 0"
    };

    const priceStyle = {
        color: "green",
        fontWeight: "bold"
    };

    return (
        <div style={cardStyle}>
            <img src={thumbnail} alt={title} style={imageStyle} />
            <div style={titleStyle}>{title}</div>
            <div style={priceStyle}>${price}</div>
        </div>
    );
};

export default ProductCard;
