// import React, { useState } from 'react';
import { Button, Card, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { Switch } from 'antd';

import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

const handleChecked = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

function Profile() {
    const [eduChange, seteduChange] = useState(true);
    const [exChange, setexChange] = useState(true);
    const [reChange, setreChange] = useState(true);
  return (
    <div>
  <Card 
  title="Profile" 
  bordered={true} 
  headStyle={{backgroundColor:'#D0F7FA',fontSize:'1.5em', fontWeight:'600'}}
  style={{ width: 595,  boxShadow: '2px 2px 2px 1px #f5f5f5' }}
   >
<div>
    <Form layout='vertical'>
    <FormItem  >
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between' }}>
        <label htmlFor="" className='Label formLabel'>Education</label>
    <Checkbox onChange={handleChecked}>Checkbox</Checkbox>
    <div style={{display:'flex',alignItems:'center', gap:'4px'}}>
    <Switch size="small" onChange={() => {
            seteduChange(!eduChange);}}  />
        <p>{eduChange ? 'Hide' : 'Show'}</p>
    </div>
        </div>
    <Input bordered={false} type='tel' style={{borderBottom:'1px solid #C4C4C4'}} />
    </FormItem>
    <FormItem  >
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between' }}>
        <label htmlFor="" className='Label formLabel'>Experience</label>
    <Checkbox defaultChecked onChange={handleChecked}>Mandatory</Checkbox>
    <div style={{display:'flex',alignItems:'center', gap:'4px'}}>
    <Switch defaultChecked size="small" onChange={() => {
            setexChange(!exChange);}}  />
        <p>{exChange ? 'Show' : 'Hide'}</p>
    </div>
        </div>
    <Input bordered={false} type='tel' style={{borderBottom:'1px solid #C4C4C4'}} />
    </FormItem>
    <FormItem  >
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between' }}>
        <label htmlFor="" className='Label formLabel'>Resume</label>
    <Checkbox onChange={handleChecked}>Checkbox</Checkbox>
    <div style={{display:'flex',alignItems:'center', gap:'4px'}}>
        <Switch size="small" onChange={() => {
            setreChange(!reChange);}}  />
        <p>{reChange ? 'Hide' : 'Show'}</p>
    </div>
        </div>
    <Input bordered={false} type='tel' style={{borderBottom:'1px solid #C4C4C4'}} />
    </FormItem>
    <Button style={{border:'none', boxShadow:'none', fontWeight:'semi-bold', fill:'#000', fontSize:'1.5em', lineHeight:'24px'}} icon={<PlusOutlined style={{fontWeight:'bold', fill:'#000', fontSize:'1.2em'}} />}>Add a question</Button>
    </Form>
</div>
  </Card> 
    </div>
  )
}

export default Profile