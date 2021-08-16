/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { useInjectReducer } from "utils/injectReducer";
import { useInjectSaga } from "utils/injectSaga";
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from "containers/App/selectors";
import H2 from "components/H2";
import NavBar from "components/Navbar";
import Homepage2 from "./homepage2.js";
import "../../styles/home.css";

const key = "home";
function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <h1 style={{ width: "300px", margin: "100px 80px", fontWeight: "600",color:"white" }}>
        Introducing 10+ upgrades across our entire service
      </h1>
      <Homepage2 />
    </div>
  );
}

export default HomePage;
