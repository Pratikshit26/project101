import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { AliwangwangOutlined } from "@ant-design/icons";
import Logo from "../../images/logo.png";
import "../../styles/navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Menu
        className="navbar"
        mode="horizontal"
        style={{ backgroundColor: "transparent" }}
      >
        <Menu.Item className="logo">
          <img src={Logo} height={50} />
        </Menu.Item>
        <Menu.Item key="Places">Places to experience</Menu.Item>
        <Menu.Item key="Experience ">Experience</Menu.Item>

        <Menu.Item key="alipay">Experience on the go</Menu.Item>
        <Menu.Item icon={<AliwangwangOutlined />} style={{ zoom: 1.5 }} />
      </Menu>
    );
  }
}

export default NavBar;
