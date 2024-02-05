"use client";
import React, { useState } from "react";
import Link from "next/link";
import Styles from "../styles/navbar.module.css";
import { BsFilterRight, BsX } from "react-icons/bs";

function Navbar() {
  const [hide, setHide] = useState(false);

  const hideHandler = () => {
    setHide(!hide);
  };

  return (
    <div>
      <div className={Styles.div}>
        <div className={Styles.flex}>
          <Link className={Styles.logo} href="/">
            Gaurav Joshi
          </Link>
          <div className={Styles.navSection}>
            <Link className={Styles.lik} href="/">
              Home
            </Link>
            <Link className={Styles.lik} href="/experience">
              Experience
            </Link>
            <Link className={Styles.lik} href="/project">
              Projects
            </Link>

            <Link className={Styles.lik} href="/about">
              About Me
            </Link>
          </div>
        </div>
      </div>
      <div className={Styles.divM}>
        <div className={Styles.flex}>
          <Link className={Styles.logo} href="/">
            Gaurav Joshi
          </Link>
          {!hide ? (
            <BsFilterRight
              onClick={hideHandler}
              style={{ fontSize: "40px", color: "white" }}
            />
          ) : (
            <BsX
              onClick={hideHandler}
              style={{ fontSize: "40px", color: "white" }}
            />
          )}
        </div>
        {hide && (
          <div>
            <div
              style={{ width: "100%", backgroundColor: "white", height: "1px" }}
            ></div>
            <p onClick={hideHandler} style={{ textAlign: "center" }}>
              <Link className={Styles.likM} href="/">
                Home
              </Link>
            </p>
            <p onClick={hideHandler} style={{ textAlign: "center" }}>
              <Link className={Styles.likM} href="/experience">
                Experience
              </Link>
            </p>
            <p onClick={hideHandler} style={{ textAlign: "center" }}>
              <Link className={Styles.likM} href="/project">
                Projects
              </Link>
            </p>
            {/* <p style={{ textAlign: "center" }}>
              <Link className={Styles.likM} href="/resume">
                Resume
              </Link>
            </p> */}
            <p
              onClick={hideHandler}
              style={{ textAlign: "center", paddingBottom: "5px" }}
            >
              <Link className={Styles.likM} href="/about">
                About Me
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
