import React from 'react';
import MiniCard from './MiniCard';
import CatalogOfLocations from './CatalogOfLocations';

function ChooseLocation({finalCheckedFlowers}) {
    let arrayOfCheckedFlowers = finalCheckedFlowers.map(flower => <MiniCard key={flower.name} flower={flower}/>)
    return(
        <>
            <div>
                <h1>Plant these flower(-s) here: </h1>
                {arrayOfCheckedFlowers}
            </div>
            <div>
                <CatalogOfLocations />
            </div>
        </>
    )
}

export default ChooseLocation;