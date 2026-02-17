import React from "react";

const SkeletonCard = ({ count }) => {

    const containerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    };

    const skeletonStyle = {
        width: "220px",
        height: "250px",
        margin: "10px",
        borderRadius: "10px",
        backgroundColor: "#e0e0e0"
    };

    const skeletons = Array.from({ length: count });

    return (
        <div style={containerStyle}>
            {
                skeletons.map((_, index) => (
                    <div key={index} style={skeletonStyle}></div>
                ))
            }
        </div>
    );
};

export default SkeletonCard;

