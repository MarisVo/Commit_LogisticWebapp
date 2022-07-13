import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, message, Space, Avatar } from "antd";
import React from "react";
import { Link, Navigate } from "react-router-dom";

const menu = (
  <Menu

  items={[
      {
          key: "1",
        label : (  <Link to="/"> Back To Main Page</Link>),
      },
    ]}
  />
);
export default function AdminDropDownAvatar() {
  return (
    <>
      <Dropdown overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Avatar> ADMIN</Avatar>
            <DownOutlined
              style={{
                color: "orange",
              }}
            />
          </Space>
        </a>
      </Dropdown>
    </>
  );
}
