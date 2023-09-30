import React, { useState } from 'react';
import '../App.css'
import { Button, Card, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { Switch } from 'antd';

import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { PlusOutlined } from '@ant-design/icons';

const handleChecked = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};
function PersonalInfo() {
    const [phoneChange, setphoneChange] = useState(true);
    const [natChange, setnatChange] = useState(true);
    const [crChange, setcrChange] = useState(true);
    const [idChange, setidChange] = useState(true);
    const [dateChange, setdateChange] = useState(true);
    const [genderChange, setgenderChange] = useState(true);
  return (
    <div>
          <Card 
  title="Personal Information" 
  bordered={true} 
  headStyle={{backgroundColor:'#D0F7FA',fontSize:'1.5em', fontWeight:'600'}}
  style={{ width: 595, boxShadow: '2px 2px 2px 1px #f5f5f5' }}
   >
<div>
    <Form layout='vertical'>
    <FormItem label='First Name' >
    <Input bordered={false} type='text' style={{borderBottom:'1px solid #C4C4C4'}} />
    </FormItem>
    <FormItem label='Last Name' >
    <Input bordered={false} typeof='text' style={{borderBottom:'1px solid #C4C4C4'}} />
    </FormItem>
    <FormItem label='Email' >
    <Input bordered={false} type='email' style={{borderBottom:'1px solid #C4C4C4'}} />
    </FormItem>
    <FormItem  >
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between' }}>
        <label htmlFor="" className='Label'>Phone (without dial code)</label>
    <Checkbox onChange={handleChecked}>Checkbox</Checkbox>
    <div style={{display:'flex',alignItems:'center', gap:'4px'}}>
    <Switch size="small" onChange={() => {
            setphoneChange(!phoneChange);}}  />
        <p>{phoneChange ? 'Hide' : 'Show'}</p>
    </div>
        </div>
    <Input bordered={false} type='tel' style={{borderBottom:'1px solid #C4C4C4'}} />
    </FormItem>
    <FormItem  >
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between' }}>
        <label htmlFor="" className='Label'>Nationality</label>
    <Checkbox onChange={handleChecked}>Checkbox</Checkbox>
    <div style={{display:'flex',alignItems:'center', gap:'4px'}}>
    <Switch size="small" onChange={() => {
            setnatChange(!natChange);}}  />
        <p>{natChange ? 'Hide' : 'Show'}</p>
    </div>
        </div>
    <Input bordered={false} type='tel' style={{borderBottom:'1px solid #C4C4C4'}} />
    </FormItem>
    <FormItem  >
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between' }}>
        <label htmlFor="" className='Label'>Current Residence</label>
    <Checkbox onChange={handleChecked}>Checkbox</Checkbox>
    <div style={{display:'flex',alignItems:'center', gap:'4px'}}>
    <Switch size="small" onChange={() => {
            setcrChange(!crChange);}}  />
        <p>{crChange ? 'Hide' : 'Show'}</p>
    </div>
        </div>
    <Input bordered={false} type='tel' style={{borderBottom:'1px solid #C4C4C4'}} />
    </FormItem>
    <FormItem  >
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between' }}>
        <label htmlFor="" className='Label' >ID Number</label>
    <Checkbox onChange={handleChecked}>Checkbox</Checkbox>
    <div style={{display:'flex',alignItems:'center', gap:'4px'}}>
    <Switch size="small" onChange={() => {
            setidChange(!idChange);}}  />
        <p>{idChange ? 'Hide' : 'Show'}</p>
    </div>
        </div>
    <Input bordered={false} type='tel' style={{borderBottom:'1px solid #C4C4C4'}} />
    </FormItem>
    <FormItem  >
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between' }}>
        <label htmlFor="" className='Label'>Date of Birth</label>
    <Checkbox onChange={handleChecked}>Checkbox</Checkbox>
    <div style={{display:'flex',alignItems:'center', gap:'4px'}}>
    <Switch size="small" onChange={() => {
            setdateChange(!dateChange);}}  />
        <p>{dateChange ? 'Hide' : 'Show'}</p>
    </div>
        </div>
    <Input bordered={false} type='tel' style={{borderBottom:'1px solid #C4C4C4'}} />
    </FormItem>
    <FormItem  >
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between' }}>
        <label htmlFor="" className='Label' >Gender</label>
    <Checkbox onChange={handleChecked}>Checkbox</Checkbox>
    <div style={{display:'flex',alignItems:'center', gap:'4px'}}>
    <Switch size="small" onChange={() => {
            setgenderChange(!genderChange);}}  />
        <p>{genderChange ? 'Hide' : 'Show'}</p>
    </div>
        </div>
    <Input bordered={false} type='tel' style={{borderBottom:'1px solid #C4C4C4'}} />
    </FormItem>
    <Button style={{border:'none', boxShadow:'none', fontWeight:'semi-bold', fill:'#000', fontSize:'1.5em', lineHeight:'24px'}}icon={<PlusOutlined  style={{fontWeight:'bold', fill:'#000', fontSize:'1.2em'}} />}>Add a question</Button>
    </Form>
</div>
  </Card> 
    </div>
  )
}

export default PersonalInfo