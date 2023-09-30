
import '../App.css'
import { Button, Card, Divider, Form } from 'antd'
import FormItem from 'antd/es/form/FormItem';
import { Input } from 'antd';
import { EditOutlined, UnorderedListOutlined, PlusOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const { TextArea } = Input;

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '0',
  },
  {
    label: '2nd menu item',
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];


function MoreQuestions() {
  return (
    <div style={{marginBottom:'5em'}}>
    <Card
        title="Additional questions" bordered={true} headStyle= {{backgroundColor:'#D0F7FA',fontSize:'1.5em', fontWeight:'600'}} style={{ width: 595,  boxShadow: '2px 2px 2px 1px #f5f5f5' }}>
             <Form layout='vertical'>
    <FormItem  >
        <Space size={140} >
        <label htmlFor="" className='LabelQuestions'>Please tell me about yourself in less than 500 words</label>
    <EditOutlined />
        </Space>
        <Input  bordered={false} style={{borderBottom:'1px solid #C4C4C4'}} maxLength={500} allowClear  />
    </FormItem>
    <FormItem  >
    <Dropdown menu={{ items }} trigger={['click']}>
      <Space size={120} onClick={(e) => e.preventDefault()}>
      Please select the year of graduation from the list below
      <EditOutlined />
      </Space>
  </Dropdown>
    </FormItem>
    <FormItem label= 'Question'  >
        <TextArea
        placeholder="Type here"
        autoSize={{ minRows: 2, maxRows: 6 }}
        allowClear
        
      />
    </FormItem>
    <FormItem>
      <Space direction='vertical'size={40}>
      <Space size={10}>
        <Button className='choiceButton'><UnorderedListOutlined /></Button>
      <Space direction='vertical'>
        <label>Choice</label>
        <TextArea
        placeholder="Type here"
        autoSize={{ minRows: 3, maxRows: 6 }}
        style={{width:'60vh'}}
        allowClear
      />
      </Space>
      <Button className='choiceButton'><PlusOutlined /></Button>
      </Space>
      <Space size={250}>
      <Button style={{border:'none', color:'#A80000', fill:'#000', fontSize:'16px', fontWeight:'600', padding:'0',}} icon={<PlusOutlined style={{ color:'#A80000', fill:'#000', fontSize:'20px',}} />}>Delete question</Button>
      <Button  style={{ backgroundColor:'#087B2F', color:'#F4FBF7', fill:'#000', fontSize:'14px', fontWeight:'600'}}>save</Button>
      </Space>
      </Space>
    </FormItem>
    <Divider />
    <FormItem  >
        <Space direction='vertical'  >
          <p>Yes/No questions</p>
          <Space size={140} >
        <label htmlFor="" className='LabelQuestions'>Have you ever been rejected by the UK embassy?</label>
          <EditOutlined />
          </Space>
        </Space>
        <Input  bordered={false} style={{borderBottom:'1px solid #C4C4C4'}} maxLength={500} allowClear  />
    </FormItem>
    <Button style={{border:'none', boxShadow:'none', fontWeight:'semi-bold', fill:'#000', fontSize:'1.5em', lineHeight:'24px'}} icon={<PlusOutlined style={{fontWeight:'bold', fill:'#000', fontSize:'1.2em'}} />}>Add a question</Button>
    </Form>


    </Card> 
    </div>
  )
}

export default MoreQuestions