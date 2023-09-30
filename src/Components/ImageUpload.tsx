
import React, { useState } from 'react';
import { Card, Space, message } from 'antd';
import { Upload } from 'antd';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';
import ImageContainer from './ImageContainer';

// const { Meta } = Card;

function ImageUpload() {
    const [fileList, setFileList] = useState<UploadFile[]>([ ]);
      const [imageUploaded, setimageUpload] = useState(false)

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        setimageUpload(true);
        // console.log(fileList)
        console.log(newFileList)
      };
    
      const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj as RcFile);
            reader.onload = () => resolve(reader.result as string);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
      };
   const handleDelete = () =>{
    setFileList([])
    setimageUpload(false)
   }
   const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG files');
    }
    const isLt2M = file.size / 1024 / 1024 <= 1000;
    if (!isLt2M) {
      message.error('Image must not be greater than 1Gb');
    }
    return isJpgOrPng && isLt2M;
  };
  return (
    <>
    {/* <Card
    hoverable
    style={{ width: 300 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card> */}

  <Card 
  title="Upload cover image" 
  bordered={true} 
  headStyle={{backgroundColor:'#D0F7FA',fontSize:'1.5em', fontWeight:'600'}}
  style={{ width: 595, boxShadow: '2px 2px 2px 1px #f5f5f5'}}
   >
    <Space style={{display:'flex', justifyContent:'center' }}>
      { !imageUploaded?
      <Upload.Dragger
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        beforeUpload={beforeUpload}
        style={{
          width:'500px'
        }}
      >
        {/* {fileList.length >= 1 ? null : 'uploadButton'} */}
        <Space direction='vertical'>
        <UploadOutlined/>
        <p>Upload cover image</p>
        <p>16:9 ratio is recommended. Max image size 1mb</p>
        </Space>
      </Upload.Dragger>: <ImageContainer fileList={fileList} handleDelete={handleDelete} />
      }
    </Space>
  </Card> 
  


    </>
  )
}

export default ImageUpload