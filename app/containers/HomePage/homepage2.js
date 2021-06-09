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
// import "../../styles/home2.css";

const key = "home";
function Homepage2() {
  return (
    <div className="homepage2">
      <H2>Explore nearby</H2>
    </div>
  );
}

export default Homepage2;
