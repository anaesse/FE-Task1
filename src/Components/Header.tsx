import React from 'react'
import { Button, Layout,  Menu,} from 'antd'
import Content from './Content'
import { useNavigate } from 'react-router-dom'
import '../App.css';
import {RightOutlined} from '@ant-design/icons'
// import { hover } from '@testing-library/user-event/dist/hover';
const {Header} = Layout


function HeaderContainer() {
   const navigate = useNavigate()
  return (
    <Layout className="layout">

      <div style={{display:'flex', justifyContent:'end',  }}>
      <Button style={{display:'flex', alignItems:'center', background:'#137D31', color:'white', margin:'10px 0', padding:'24px' }}>Save and Continue <RightOutlined />  </Button>
      </div>
    <Header style={{ marginBottom:'60px', backgroundColor:'white', boxShadow: '1px 1px 4px 4px #f5f5f5' }}>
    <Menu
      onClick={({key})=>{
        navigate(key)
      }}
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[window.location.pathname]}
          style={{display:'flex', width:'100%', gap:'6rem',}}
          
          items={[
            {
              key: '/',
              label: 'Personal Detail',
              className:'Pageinfo'
          
              
            },
            {
              key: '/application',
              label: 'Application Form',
              className:'Pageinfo'
              
            },
            {
              key: '/workflow',
              label: 'Workflow',
              className:'Pageinfo'
            },
            {
              key: '/preview',
              label: 'Preview',
              className:'Pageinfo'
            },
          ]}
          
        />
    </Header>
    <Content />
    </Layout>
  )
}

export default HeaderContainer