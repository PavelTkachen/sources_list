import React from 'react';
import 'antd/dist/antd.css';
import './Layout.css';
import { Layout, Menu, Button } from 'antd';
import DataTable from './DataTable';
const { Header, Content, Footer } = Layout;

const Navigation = () => (
  <Layout className="layout">
    <Header style={{display: 'flex', justifyContent: "start"}}>
    <Button style={{margin: '1em 5% 1em 1em'}} type="primary">Создать</Button>      
      {/* <div className="logo" /> */}
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
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default Navigation;