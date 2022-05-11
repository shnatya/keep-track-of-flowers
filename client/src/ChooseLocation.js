import React from 'react';
import MiniCard from './MiniCard';

function ChooseLocation({finalCheckedFlowers}) {
    let arrayOfCheckedFlowers = finalCheckedFlowers.map(flower => <MiniCard key={flower.name} flower={flower}/>)
    return(
        <div>
            <h1>Plant these flowers here: </h1>
            {arrayOfCheckedFlowers}
        </div>
    )
}

export default ChooseLocation;