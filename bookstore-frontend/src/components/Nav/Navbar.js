import React, { useEffect, useState } from 'react';
import Logo from '../../img/bookstoreLogo.svg';
import styles from '../../css/Navbar.module.css';
import Burger from './Burger';

const NavBar = () => {
   
    return (
    <nav className={styles.nav}>
        <img src={Logo} className={styles.logo} style={{ height: '50px', width: 'auto' }}></img>
        <Burger />
    </nav>
    )
} 

export default NavBar;