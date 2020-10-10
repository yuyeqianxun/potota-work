import React, { FC } from "react";
import { Layout, Row, Col, Menu, Dropdown, Avatar, Space } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header } = Layout;
interface Props {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const Head: FC<Props> = ({ collapsed, setCollapsed }) => {
  return (
    <Header
      className="site-layout-background"
      style={{ padding: "0 0 0 15px", backgroundColor: "#fff" }}
    >
      <Row justify="space-between">
        <Col span={2}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(collapsed),
              style: {
                fontSize: 16,
              },
            }
          )}
        </Col>
        <Col span={2}>
          <Dropdown overlay={menu} placement="bottomLeft">
            <Space style={{ cursor: "pointer" }}>
              <Avatar size={32} icon={<UserOutlined />} />
              马小明
            </Space>
            
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default Head;
