import React from 'react';
import Logo from '../../assets/img/Logo.png';
import {LogoImage, MenuWrapper} from './style.js';
import Button from '../Button';

function Menu() {
  return (
    <MenuWrapper className='Menu' >
      <a href="/">
        <LogoImage className='Logo' src={Logo} alt='Lekaoflix' />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Video
      </Button>
    </MenuWrapper>  
  );
}

export default Menu;