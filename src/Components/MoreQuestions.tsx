
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
    label: 'Paragraph',
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: 'Short answer',
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'Yes/No',
    key: '3',
  },
  {
    label: 'Dropdown',
    key: '4',
  },
  {
    label: 'Multiple Choice',
    key: '5',
  },
  {
    label: 'Date',
    key: '6',
  },
  {
    label: 'Number',
    key: '7',
  },
  {
    label: 'File Upload',
    key: '8',
  },
  {
    label: 'Video question',
    key: '9',
  },
];


function MoreQuestions({setAddQuestions}: {setAddQuestions:any}) {
  return (
    <div style={{marginBottom:'5em'}}>
    <Card
        title="Additional questions" bordered={true} headStyle= {{backgroundColor:'#D0F7FA',fontSize:'1.5em', fontWeight:'600'}} style={{ width: 595,  boxShadow: '2px 2px 2px 1px #f5f5f5' }}>
             <Form layout='vertical'>
    <FormItem rules={[{ required: true, message: 'You cannot leave this field blank' }]} >
    <Space direction='vertical'  >
          <p style={{color:'#979797', fontSize:'14px', fontWeight:'500'}}>Paragraph</p>
        <Space size={140} >
        <label htmlFor="" className='LabelQuestions'>Please tell me about yourself in less than 500 words</label>
    <EditOutlined />
        </Space>
        <Input  bordered={false} style={{borderBottom:'1px solid #C4C4C4'}} maxLength={500} allowClear  />
        </Space>
    </FormItem>
    <FormItem rules={[{ required: true, message: 'please select an item' }]} >
    <p style={{color:'#979797', fontSize:'14px', fontWeight:'500'}}>Dropdown</p>
    <Dropdown menu={{ items }} trigger={['click']} className='LabelQuestions'>
      <Space size={120} onClick={(e) => e.preventDefault()}style={{fontSize:'15px', fontWeight:'600', color:'#000'}}>
         Please select the year of graduation from the list below
      <EditOutlined />
      </Space>
  </Dropdown>
    </FormItem>
    <FormItem label= 'Question' className='LabelQuestions'  >
        <TextArea
        placeholder="Type here"
        autoSize={{ minRows: 2, maxRows: 6 }}
        allowClear
        
      />
    </FormItem>
    <FormItem rules={[{ required: true, message: 'You can not leave this field blank' }]}>
      <Space direction='vertical'size={40}>
      <Space size={10}>
        <Button className='choiceButton'><UnorderedListOutlined /></Button>
      <Space direction='vertical'>
        <label className='LabelQuestions'>Choice</label>
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
      <Button onClick= {()=>setAddQuestions}  style={{ backgroundColor:'#087B2F', color:'#F4FBF7', fill:'#000', fontSize:'14px', fontWeight:'600'}}>save</Button>
      </Space>
      </Space>
    </FormItem>
    <Divider />
    <FormItem  >
        <Space direction='vertical'  >
          <p style={{color:'#979797', fontSize:'14px', fontWeight:'500'}}>Yes/No questions</p>
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