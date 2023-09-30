import React, { useState } from 'react'
import { Layout, Button, Menu, Space } from 'antd'
import {
    MenuOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    UnorderedListOutlined
  } from '@ant-design/icons';
import HeaderContainer from './Header';

const {Sider} = Layout
function Side() {
    const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{minHeight:'100vh',  boxShadow: '2px 2px 2px 1px #f5f5f5'}} theme='light'>
        <Button
            type="text"
            icon={collapsed ? <MenuOutlined />: < MenuFoldOutlined/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              paddingLeft:'14px',
              width: 64,
              height: 64,
            }}
          />
          <Space direction="vertical" size={630} style={{ display: 'flex', alignItems:'center', justifyContent:'space-between' }}>
           <Menu
          theme="light"
          mode="vertical"
          style={{border:'none', }}
          defaultSelectedKeys={['']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <UnorderedListOutlined />,
              label: 'User',
            },
          ]}
        />
         <Button type="primary" shape="circle">
        NT
      </Button>
      </Space>
        </Sider>
          <HeaderContainer />
    </Layout>
  )
}

export default Side