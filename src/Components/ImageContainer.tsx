import { Button } from 'antd'
import React, { useState } from 'react'
import {CloseOutlined} from '@ant-design/icons'
// import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
type Props = {
    fileList : any[],
    handleDelete : any
}

const ImageContainer = (props: Props) => {
    const [imageUrl, setImageUrl] = useState("")
    const reader  = new FileReader();
    reader.readAsDataURL(props.fileList[0].originFileObj);
         reader.onloadend = function (e) {
            const res = e.target!.result as string
            console.log(res)
           setImageUrl( res)
       }
       console.log(props.fileList[0].originFileObj)
     
  return (
    <div >
      <div style={{display:'flex', justifyContent:'center'}}>
            <div style= {{backgroundImage:`url(${imageUrl})`, height:'400px', width:'550px', backgroundSize:'cover', backgroundPosition:'top'  }}/>
      </div>

            <Button style={{border:'none', color:'#A80000', fill:'#000', fontSize:'16px', fontWeight:'600', padding:'12px 0', display:'block'}} icon={<CloseOutlined style={{ color:'#A80000', fill:'#000', fontSize:'20px',}}  /> } onClick={props.handleDelete}>Delete & re-upload</Button>
            
    </div>
  )
}
export default ImageContainer