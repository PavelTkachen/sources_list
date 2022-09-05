import React from 'react';
import 'antd/dist/antd.css';
import './Navigation.css';
import { Layout, Menu, Button } from 'antd';
import DataTable from './DataTable';
const { Header, Content } = Layout;

const HEADER_STYLE={display: 'flex', justifyContent: "start"}
const BUTTON_STYLE={margin: '1em 5% 1em 1em'}

const Navigation = () => (
  <Layout className="layout">
    <Header style={HEADER_STYLE}>
    <Button style={BUTTON_STYLE} type="primary">Создать</Button>      
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `Вкладка ${key}`,
          };
        })}
      />
    </Header>
    <Content
      style={{
        padding: '50px 50px',
      }}
    >
      <div className="site-layout-content">
        <DataTable />
      </div>
    </Content>
  </Layout>
);

export default Navigation;