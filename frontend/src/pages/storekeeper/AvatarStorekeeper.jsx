import { Dropdown, Menu,Avatar} from "antd";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5"
import {MdAccountCircle} from "react-icons/md"

const menu = (
  <Menu

    items={[
      {
        key: "1",
        label: <Link to="">Quản lý tài khoản</Link>,
        icon:  <MdAccountCircle/>
      },
      {
        key: "2",
        label: <Link to="/">Đăng xuất</Link>,
        icon: <IoExitOutline />
      },
    ]}
  />
);
function AvatarStorekeeper() {
  return (
    <>
      <Dropdown overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </a>
      </Dropdown>
    </>
  );
}
export default AvatarStorekeeper