import React from "react";
import FlowerCard from "./FlowerCard";

function Catalog({flowers}) {

    return (
        <div>
            {flowers.map((flower, index) => <FlowerCard key={index} flower={flower} />)}
        </div>
    )
}

export default Catalog;