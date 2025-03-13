import React from 'react';
import { BannerImg } from '../../assets/images';
import styles from './LandingSection.module.css';
import Button from '../common/Button';

function LandingSection() {
  
  // This is landing section, we are not using state or effect here.

  return (
    <section className={styles.landSection}>
        <div className={`${styles.landInner} container`}>
      <div className={styles.landText}>
      <h2>Connect <br /> with Stantech</h2>
        <p>The Smarter Way of Digitalising Organisations.</p>
        <Button className='mainBtn'>Join Now</Button>
      </div>
      <div className={styles.landImg}>
        <img src={BannerImg} alt="Social Media Scene"  />
      </div>
      </div>
    </section>
  );
}

export default LandingSection;