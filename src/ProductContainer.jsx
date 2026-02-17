import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import SkeletonCard from "./SkeletonCard";

// Closure to track fetch attempts and last fetch time
const createFetchTracker = () => {
    let fetchCount = 0;
    let lastFetchTime = null;

    return () => {
        fetchCount++;
        lastFetchTime = new Date().toLocaleTimeString();

        return {
            count: fetchCount,
            time: lastFetchTime
        };
    };
};

const trackFetch = createFetchTracker();

const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchInfo, setFetchInfo] = useState({ count: 0, time: "" });

    const containerStyle = {
        padding: "20px",
        textAlign: "center"
    };

    const infoStyle = {
        marginBottom: "15px",
        fontSize: "14px",
        color: "#555"
    };

    useEffect(() => {

        const fetchProducts = async () => {

            setLoading(true);

            try {

                // async/await fetch
                const response = await fetch("https://dummyjson.com/products");

                // promise chaining
                response.json().then((data) => {

                    setProducts(data.products);
                    setLoading(false);

                    // closure tracking
                    const info = trackFetch();
                    setFetchInfo(info);

                });

            }
            catch (error) {
                console.log("Error fetching products:", error);
                setLoading(false);
            }

        };

        fetchProducts();

    }, []);

    return (
        <div style={containerStyle}>

            <h2>Product Listing Page</h2>

            <div style={infoStyle}>
                Fetch Attempts: {fetchInfo.count} | Last Fetch Time: {fetchInfo.time}
            </div>

            {
                loading
                    ? <SkeletonCard count={6} />
                    : <ProductList products={products} />
            }

        </div>
    );
};

export default ProductContainer;
