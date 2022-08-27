import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const firstDataRow = [
  {
    title: "Get Started",
    icon: "img/get_started-icon.png",
    link: "stable/getting-started/overview",
    description: (
      <>
        Learn about Zowe™ architecture, components, and how to quickly get
        started with Zowe. Read about what's new and changed in the Release
        Notes, FAQs.
      </>
    ),
  },
  function Features() {
  return (
    <>
      {firstDataRow && firstDataRow.length > 0 && (
        <section className={clsx("home-container", styles.features)}>
          <div className={clsx("row margin-horiz--lg")}>
            <div className={clsx("col col--2")}>
              <h3 className="container-h3">Explore content</h3>
            </div>
            <div className={clsx("col col--10")}>
              <div className={clsx("row")}>
                {firstDataRow.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
            <div className={clsx("col col--2")}></div>
            <div className={clsx("col col--10")}>
              <div className={clsx("row")}>
                {secondDataRow.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Features;