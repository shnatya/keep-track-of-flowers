import React from "react";

function InfoFlower({flower}) {
    return (
            <li className="between">
                {flower.summary}
            </li>
    )
}

export default InfoFlower;