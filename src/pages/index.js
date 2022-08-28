import React from 'react';

import clsx from 'clsx';

import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

import SearchHeader from "../components/SearchHeader/SearchHeader";

//Components

import ExploreContent from "../components/ExploreContent/ExploreContent";

import SearchHeader from "../components/SearchHeader/SearchHeader";

function Home() {

  const context = useDocusaurusContext();

  const { siteConfig = {} } = context;

  return (

    <Layout description="Zowe is an open source framework for leveraging data and applications in z/OS from modern applications and tools.">

      <header className={clsx("hero", styles.heroBanner)}>

        <div className="container">

          <img

            className={styles.heroLogo}

            alt="Download icon"

            src={useBaseUrl("/img/zowe-icon-dark.png")}

          />

          <h1 className="hero__title">{siteConfig.title}</h1>

          <div className="searchDiv">

            <SearchHeader />

          </div>

        </div>

      </header>

      <hr></hr>

      <ExploreContent />

      <hr></hr>

    </Layout>

  );

}

export default Home;
