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
import { data } from "./data.js";
import { Card } from "antd";
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

const { Meta } = Card;

function Homepage2() {
  const [lon, setLon] = React.useState("");
  const [lat, setLat] = React.useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      console.log(data);
    });
  }, []);
  return (
    <div
      className="homepage2"
      style={{ marginTop: "150px", padding: "0px 70px" }}
    >
      <H2>Explore nearby</H2>
      <p>
        Your current position is <strong>{lat} latitude</strong>{" "}
        <strong>{lon} longitude</strong>
      </p>
      <H2>Live anywhere</H2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderradius: "12px",
        }}
      >
        {data.map((d) => (
          <Card
            hoverable
            style={{ width: 300, borderRadius: "10px" }}
            cover={<img src={d.image} style={{ borderRadius: "10px" }} />}
            key={d.id}
          >
            <Meta title={d.type} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Homepage2;
