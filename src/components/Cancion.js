import React, {Fragment} from 'react';

const Cancion = ({letra}) => {

    if(letra.length === 0) return null;

    return (  
        <Fragment>
            <h2 className="text-white">Letra Cancion</h2>
            <p className="letra text-white">{letra}</p>
        </Fragment>
    );
}

export default Cancion;