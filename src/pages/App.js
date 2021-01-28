import React, { Component } from "react";
import styles from "./App.module.scss";
import { Link, Route, withRouter } from "react-router-dom";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import MenuPageDetail from "./MenuPageDetail";

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.App}>
        {/* 头部导航 */}
        <header className={styles.header}>
          <div className={styles.box}>
            <Link to="/">
              <div className={styles.boxleft}>LOREM IPSUM</div>
            </Link>
            <div className={styles.boxright}>
              <Link to="/">
                <p
                  className={location.pathname === "/" ? styles.selected : null}
                >
                  HOME
                </p>
              </Link>
              <Link to="/menu">
                <p
                  className={
                    location.pathname === "/menu" ? styles.selected : null
                  }
                >
                  MENU
                </p>
              </Link>
            </div>
          </div>
        </header>

        {/* 内容区 */}
        <section className={styles.content}>
          <Route path="/" exact component={HomePage} />
          <Route path="/menu" exact component={MenuPage} />
          <Route path="/menu/:id" exact component={MenuPageDetail} />
        </section>

        {/* 底部 */}
        <footer className={styles.footer}>
          <p>
            © <b>2021 LOREM IPSUM</b>
          </p>
          <p>Handmade with</p>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
