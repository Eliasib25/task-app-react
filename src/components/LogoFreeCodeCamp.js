import React from 'react';
import '../styles/LogoFreeCodeCamp.css';
import FreeCodeCampLogo from '../images/freecodecamp-logo.png';

function LogoFreeCodeCamp() {
    return (
        <div className='freecodecmap-logo-contenedor'>
        <img 
        src={FreeCodeCampLogo}
        className='freecodecamp-logo'
        alt = 'logo de freecodecamp'
        />
      </div>
    );
}

export default LogoFreeCodeCamp;