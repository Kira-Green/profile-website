import React, { Component } from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import css from './navbar.module.css'

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className={css.nav} id="navbar">
        <div className={css.navcontent}>
         
          <ul className={css.navitems}>
            <li className={css.navitems}>
              <Link
                activeClass={css.active}
                to={"section1"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link>
            </li>
            <li className={css.navitems}>
              <Link
                activeClass={css.active}
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </li>
            <li className={css.navitems}>
              <Link
                activeClass={css.active}
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </li>
            <li className={css.navitems}>
              <Link
                activeClass={css.active}
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 4
              </Link>
            </li>
            <li className={css.navitems}>
              <Link
                activeClass={css.active}
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

