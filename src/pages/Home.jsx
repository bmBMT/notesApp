import React from "react";
import Perfomance from "../components/UI/Perfomance/Perfomance";
import styles from "../styles/Home.module.css";
import { routes } from "../router";
import { getApps } from "../utils/apps";

const Home = () => {
  const apps = getApps(routes);

  return (
    <main className={styles.Home}>
      {apps.map((app) => (
        <Perfomance to={app.path} key={app.path}>
          <img src={app.img} alt="" />
          <h2>{app.appname}</h2>
        </Perfomance>
      ))}
    </main>
  );
};

export default Home;
