import React from 'react';
import {  Upload, Button, message } from 'antd';

const Uploader = () => {
    const props = {
      beforeUpload: file => {
        if (file.type !== 'image/png') {
          message.error(`${file.name} is not a png file`);
        }
        return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
      },
      onChange: info => {
        console.log(info.fileList);
      },
    };
    return (
      <Upload {...props}>
        <Button>Upload png only</Button>
      </Upload>
    );
  }; 

export default Uploader;