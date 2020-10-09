import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { RouteConfigComponentProps } from "react-router-config";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import Head from "./Head";
import "./index.less";
import BreadCrumb from "../component/BreadCrumb";

const { Sider, Content } = Layout;
// const { SubMenu } = Menu;
const Layouter: FC<RouteConfigComponentProps> = ({ route }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ top: 0, left: 0, bottom: 0, right: 0 }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">Potata Work</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<HistoryOutlined />}>
            <Link to="/reminder">提醒事项</Link>
          </Menu.Item>
          {/* <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Navigation Two"
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Head
          collapsed={collapsed}
          setCollapsed={(collapsed: boolean) => setCollapsed(!collapsed)}
        />
        <BreadCrumb />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "calc( 100vh - 215px )",
            backgroundColor: "#fff",
          }}
        >
          {renderRoutes(route?.routes)}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouter;
