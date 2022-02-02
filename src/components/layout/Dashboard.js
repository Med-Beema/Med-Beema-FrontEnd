import { Layout, Menu } from "antd";
import React from "react";
import PolicyHolderForm from "./../policyholderform/PolicyHolderForm";
import ClaimAccess from "./../claimaccess/ClaimAccessForm";
import { Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function Dashboard() {
  return (
    <Layout hasSider>
      <Sider
        collapsible
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" as={Link} to="/policyform">
            Cover
          </Menu.Item>
          <Menu.Item key="2" as={Link} to="/claimaccess">
            Claim Access
          </Menu.Item>
          <SubMenu key="sub1" title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">Files</Menu.Item>
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: 200, backgroundColor: "white" }}
      >
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            position: "fixed",
            zIndex: 1,
            width: "100%",
            color: "white",
          }}
        >
          Hi
        </Header>
        <Content
          style={{
            margin: "80px 16px 20px 16px",
            overflow: "initial",
            backgroundColor: "white",
          }}
        >
          <div className="site-layout-background" style={{ padding: 24 }}>
            <PolicyHolderForm />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
