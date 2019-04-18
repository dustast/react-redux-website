import React from 'react';
import loadgif from './loading.gif';


const loading =  () => {
    return(
        <div>
            <img src={loadgif} alt = "Loading Now..." 
        style = {{width:'200px', margin:'auto', display: 'block'}}/>
        </div>
    )
}

export default loading;