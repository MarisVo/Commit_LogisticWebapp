import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { FaBars } from 'react-icons/fa'
import {MdOutlineInventory2} from "react-icons/md"
import {BiTransferAlt} from "react-icons/bi"
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import logo from '../assets/icons/logo-J&T.svg'
import AvatarStorekeeper from '../pages/Storekeeper/AvatarStorekeeper'
import SideBar from '../components/SideBar2';
const { Header, Sider, Content } = Layout;
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
      <Link to="inventory">Hàng tồn kho</Link>,
    "1",
    <MdOutlineInventory2 />
  ),
  getItem(
      <Link to="bills">Xuất nhập kho</Link>,
    "2",
    <BiTransferAlt />
  ),
];
const StorekeeperLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [isSidebarVisible,setIsSidebarVisible] = useState(false)
  const hiddenSidebar = (e) => {
    if (!e.target.closest(".ant-menu") || e.target.closest("a")) {
      setIsSidebarVisible(false);
    }
  };
  return (
    <>
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
          className='uppercase hidden lg:block'
          style={{
            background: "#fff",

          }}
        >
          <div className="">
            <img src={logo} alt="" className="w-full p-[12px]"></img>
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
            <div className="flex flex-row justify-between pr-10 items-center">
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: "trigger hidden lg:block",
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
              <FaBars
               className="ml-7 w-6 h-6 lg:hidden" 
               onClick={()=>setIsSidebarVisible(!isSidebarVisible)}
               />
              <img src={logo} alt="" className="lg:hidden w-[117px] p-[12px]"></img>
              <AvatarStorekeeper />
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "16px 16px",
              padding: 0,
              minHeight: 280,
            }}
          >
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
      {isSidebarVisible && 
      <SideBar
      items={items}
      hiddenSidebar={hiddenSidebar}
      />}
    </>
  );
};
export default StorekeeperLayout;