import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import  styles  from './AWR.module.css';

import AWRA from "../Photos/awradult.png"
import AWRC from "../Photos/awrchild.png"
import AWRI from "../Photos/awrimpulance.png"
import AWRM from "../Photos/awrmooth.png"
import AWRV from "../Photos/awrvirus.png"
import AWRW from "../Photos/awrwoman.png"
import { Link } from 'react-router-dom';

const HealthAWR = () => {


const Pstyle={
  fontWeight: 300,
  color: '#000',
  fontSize: 30,
  margin: '2%',
  textAlign: 'center',
}

  return (
    <div>
    <Header/>
    <container>
  <div className={ styles.landing }>
    <div className={styles.introtext}>
      <h1><b> التوعيه الصحيه</b></h1>
      <p style={Pstyle}>
        .....للتوعيه الصحيه ونشر الوعي بين افراد المجتمع من صحة المرأه و
        اطفال ومسنين 
      </p>
    </div>
  </div>
  <main id={styles.slider}>
    <section className={styles.slidercontainer}>
      <div className={styles.slider}>
      <div className={styles.slideritem}>
      <Link to ="/adult" >
        <div className={styles.slide}>
          <figure className={styles.slideimage}>
            <img src={AWRA} alt="" />
          </figure>
          <h4 className={styles.slidename}>صحة المسنين</h4>
        </div>
        </Link>
      </div>
      <div className={styles.slideritem}>
      <Link to ="/healthawr">
          <div className={styles.slide}>
            <figure className={styles.slideimage}>
              <img src={AWRW} alt="" />
            </figure>
            <h4 className={styles.slidename}>صحة المرأه</h4>
          </div>
          </Link>
        </div>
        <div className={styles.slideritem}>
        <Link to ="/healthawr">
          <div className={styles.slide}>
            <figure className={styles.slideimage}>
            <img src={AWRC} alt="" />
            </figure>
            <h4 className={styles.slidename}>صحة الطفل</h4>
          </div>
          </Link>
        </div>
      </div>
    </section>
    <section className={styles.slidercontainer}>
      <div className={styles.slider}>
      <div className={styles.slideritem}>
      <Link to ="/healthawr">
        <div className={styles.slide}>
          <figure className={styles.slideimage}>
          <img src={AWRM} alt="" />
          </figure>
          <h4 className={styles.slidename}>صحة الفم</h4>
        </div>
        </Link >
      </div>
      <div className={styles.slideritem}>
      <Link to ="/healthawr">
          <div className={styles.slide}>
            <figure className={styles.slideimage}>
            <img src={AWRI} alt="" />
            </figure>
            <h4 className={styles.slidename}>الأسعافات الاوليه</h4>
          </div>
          </Link>
        </div>
        <div className={styles.slideritem}>
        <Link to ="/healthawr">
          <div className={styles.slide}>
            <figure className={styles.slideimage}>
            <img src={AWRV} alt="" />
            </figure>
            <h4 className={styles.slidename}>الأمراض المزمنه</h4>
          </div>
          </Link>
        </div>
      </div>
    </section>
  </main>
</container>
<Footer/>
    </div>
  );
};

export default HealthAWR;
