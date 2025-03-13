import React from 'react';
import { Facebook, Instagram, Linkedin } from '../../assets/svg';
import styles from './Footer.module.css';

function Footer() {

  // This is static content, so no need to use state or effect.

  return (
    <footer className={styles.footer}>
      <div className='container'>
         <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
          <ul>
            <li>FAQ</li>
            <li>Privacy</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
          </div>
          <ul>
            <li><img src={Facebook} alt="" /></li>
            <li><img src={Instagram} alt="" /></li>
            <li><img src={Linkedin} alt="" /></li>
          </ul>
         </div>
      </div>
     <div className={styles.footerBottom}>
      <p>&copy; 2025 Stantech.ai. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;