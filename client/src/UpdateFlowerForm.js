import React from "react";

function UpdateFlowerForm({flowerNeedToUpdate}) {

    return (
        <div>
            <h1>{flowerNeedToUpdate.name}</h1>
        </div>
    )
}

/*UpdateFlowerForm.defaultProps =  {
    flowerNeedToUpdate: {
        name: "",
        type_species: "",
        season: "",
        subseason: "",
        color: "",
        height: "",
        description: "",
        image_url: ""
    }
}*/

export default UpdateFlowerForm;