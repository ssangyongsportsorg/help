import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import SearchHeader from "../components/SearchHeader/SearchHeader";
import ExploreContent from "../components/ExploreContent/ExploreContent";
const features = [
<ExploreContent />
 ];
    function Feature({ title, description}) {
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p style={{listStyleType:'none'}}>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      >
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">我們能幫助你什麼嗎？</h1>
          <div className="searchDiv">
            <SearchHeader />
        </div>
        </div>
      </header>
      <main className="main-container">
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
