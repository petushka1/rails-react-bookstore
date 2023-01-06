import React, { useEffect, useState } from 'react';

import styles from '../../css/Navbar.module.css';
import Burger from './Burger';

const NavBar = () => {
   
    return (
    <nav className={styles.nav}>
        <div className={styles.logo}>BookManager</div>
        <Burger />
    </nav>
    )
} 

export default NavBar;