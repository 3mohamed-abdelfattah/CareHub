import Header from '../AllBars/Header';
import Footer from '../AllBars/Footer';
import styles from './AWR.module.css';

import AWRA from "../Photos/ADU.png"
import AWRC from "../Photos/Children.png"
import AWRI from "../Photos/EMP.png"
import AWRM from "../Photos/teeth.png"
import AWRV from "../Photos/glads.png"
import AWRW from "../Photos/Centarlogo.png"
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../SomeStyles/ScrollToTopButton';
import { useEffect } from 'react';

const HealthAWR = () => {

  useEffect(() => {
    if (!window.localStorage.getItem('email')) {
      window.location = "/login";
    }
  }, [])

  const Pstyle = {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 30,
    textAlign: 'center',
  }

  return (
    <div>
      <Header />
      <container>
        <div className={styles.landing} style={{ marginTop: '9%' }}>
          <div className={styles.introtext}>
            <h1 style={{ color: '#ff0505' }}><b>نُؤمن بأنّ التوعية الصحية مسؤولية</b></h1>
            <p style={Pstyle}>ونسعى من خلال موقعنا إلى المساهمة في نشر الوعي بين أفراد المجتمع للحفاظ على صحة الجميع</p>
          </div>
        </div>
        <main id={styles.slider}>
          <section className={styles.slidercontainer}>
            <div className={styles.slider}>
              <div className={styles.slideritem}>
                <Link to="/adult" >
                  <div className={styles.slide}>
                    <figure className={styles.slideimage}>
                      <img src={AWRA} alt="" />
                    </figure>
                    <h4 className={styles.slidename}>صحة المسنين</h4>
                  </div>
                </Link>
              </div>
              <div className={styles.slideritem}>
                <Link to="/womanawr">
                  <div className={styles.slide}>
                    <figure className={styles.slideimage}>
                      <img src={AWRW} alt="" />
                    </figure>
                    <h4 className={styles.slidename}>صحة المرأة</h4>
                  </div>
                </Link>
              </div>
              <div className={styles.slideritem}>
                <Link to="/awrchild">
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
                <Link to="/awrteeth">
                  <div className={styles.slide}>
                    <figure className={styles.slideimage}>
                      <img src={AWRM} alt="" />
                    </figure>
                    <h4 className={styles.slidename}>صحة الفم</h4>
                  </div>
                </Link >
              </div>
              <div className={styles.slideritem}>
                <Link to="/firstaid">
                  <div className={styles.slide}>
                    <figure className={styles.slideimage}>
                      <img src={AWRI} alt="" />
                    </figure>
                    <h4 className={styles.slidename}>الأسعافات الاوليه</h4>
                  </div>
                </Link>
              </div>
              <div className={styles.slideritem}>
                <Link to="/illawr">
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
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default HealthAWR;
