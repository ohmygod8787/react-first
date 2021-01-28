import React, { Component, useState, useEffect } from "react";
import styles from "./work.module.scss";
import { Link } from "react-router-dom";

export default ({ dataSource }) => {
  const [isHover, setHover] = useState(false);
  let self = this;
  console.log(self);
  return (
    <div className={styles.worklist}>
      <ul>
        {dataSource &&
          dataSource.map((item) => (
            <li key={item.id}>
              <Link to={`/menu/${item.id}`}>
                <div className={styles.cover}>
                  <img src={item.cover} />
                </div>
                <div className={styles.workbrief}>
                  <h3>{item.title}</h3>
                  <p>{item.brief}</p>
                  <div className={styles.tag}>
                    {item.tags &&
                      item.tags.map((i) => (
                        <span
                          key={i}
                          className={isHover == true ? "active" : null}
                          onMouseOver={() => setHover(true)}
                          onMouseOut={() => setHover(false)}
                        >
                          {i}
                        </span>
                      ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
