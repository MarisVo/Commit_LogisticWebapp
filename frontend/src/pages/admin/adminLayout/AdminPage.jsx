import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../assets/icons/logo-J&T.svg";
import AdminDropDownAvatar from "./AdminDropDownAvatar";
const { Header, Sider, Content } = Layout;

export default function AdminPage() {
  const [collapsed, setCollapsed] = useState(false);
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem(
      <div>
        <Link to="about">About</Link>
      </div>,
      "1",
      <DesktopOutlined> </DesktopOutlined>
    ),
    getItem(
      <div>
        <Link to="contact-us">Contact Us</Link>
      </div>,
      "2",
      <DesktopOutlined> </DesktopOutlined>
    ),
    getItem(<div>Commit</div>, "sub1", <DesktopOutlined> </DesktopOutlined>, [
      getItem(
        <div>
          <Link to="commitment">Main Commitment</Link>
        </div>,
        "3"
      ),
    ]),
    getItem(
      <div>
        <Link to="message">Contact message</Link>
      </div>,
      "4",
      <DesktopOutlined> </DesktopOutlined>
    ),
    getItem(
      <div>
        <Link to="service">delivery service</Link>
      </div>,
      "5",
      <DesktopOutlined> </DesktopOutlined>
    ),

    getItem(
      <div>
        <Link to="partner">partner</Link>
      </div>,
      "6",
      <DesktopOutlined> </DesktopOutlined>
    ),
    getItem(
      <div>
        <Link to="career">career</Link>
      </div>,
      "7",
      <DesktopOutlined> </DesktopOutlined>
    ),
    getItem(
      <div>
        <Link to="applicant">applicant</Link>
      </div>,
      "8",
      <DesktopOutlined> </DesktopOutlined>
    ),
    getItem(
      <div>
        <Link to="department">department</Link>
      </div>,
      "9",
      <DesktopOutlined> </DesktopOutlined>
    ),
    // getItem("User", "sub1", <UserOutlined />, [getItem("Tom", "3"), getItem("Bill", "4"), getItem("Alex", "5")]),
  ];
  return (
    <Layout
      className=""
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className= 'uppercase'
        style={{
          background: "#fff",
        }}
      >
        <div className="logo">
          <img src={logo} alt="" className="w-full h-full"></img>
        </div>
        <Menu theme="" mode="inline" defaultSelectedKeys={[""]} items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            background: "#fff",
          }}
        >
          <div className="flex flex-row justify-between pr-10">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
              style: {
                padding: " 0 24px",
                fontSize: "18px",
                lineHeight: "64px",
                cursor: "pointer",
                transition: "color 0.3s",
                color: "orange",
              },
            })}
            <AdminDropDownAvatar></AdminDropDownAvatar>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
}
