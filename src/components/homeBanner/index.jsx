import React from "react";
import styles from "./HomeBanner.module.scss";
export default function HomeBanner(props) {
  const data = props.data;
  console.table(data.events);
  return (
    props && (
      <section className={`${styles.container__banner} ${styles.container}`}>
        <h1>MISSION TO MARS</h1>
        <span>NEXT DEVELOPER FROM EUROPE</span>
        <div className={`${styles.container__banner_wrapper}`}>
        <ul>
          {data.events.map((event) => (
            <li key={event.id}>
            <span>{event.categories[0].title}:</span>
            <span>{event.title}</span>
            </li>
          ))}
        </ul>
        <ul>
          {data.events.map((event) => (
            <li key={event.id}>
            <span>{event.categories[0].title}:</span>
            <span>{event.title}</span>
            </li>
          ))}
        </ul>
        </div>
        
      </section>
    )
  );
}
