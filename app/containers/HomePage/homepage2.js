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
import { Input, Space } from "antd";
import "../../styles/home2.css";

const { Meta } = Card;
const { Search } = Input;

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
      <H2 style={{ color: "white" }}>Explore nearby</H2>
      <p style={{ color: "white  " }}>
        Your current position is <strong>{lat} latitude</strong> and
        <strong>{lon} longitude</strong>
      </p>
      <H2 style={{ color: "white  " }}>Live anywhere</H2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderradius: "12px",
        }}
      >
        {data.map((d) => (
          <Card
            hoverable
            style={{ width: 400, borderRadius: "10px" }}
            cover={<img src={d.image} style={{ borderRadius: "10px" }} />}
            key={d.id}
          >
            <Meta title={d.type} />
          </Card>
        ))}
      </div>
      <div>
        <h1>Hungry ?</h1>
        <p>Order your local favourites</p>
        <Search
          placeholder="Search your local restaurents"
          allowClear
          enterButton="Search"
          size="large"
          style={{ width: 650,marginBottom:"100px"}}
        />
      </div>
    </div>
  );
}

export default Homepage2;
