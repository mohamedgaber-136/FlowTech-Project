import { Upload, Button } from 'antd';
import { DeleteOutlined, SwapOutlined, UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import vector from '../assets/images/avatars/Vector.png'
// This component handles the image upload process
const ImageUpload = ({setImgCheck}) => {
  const [image, setImage] = useState(null); // Store the uploaded image in state
  const [imageName, setImageName] = useState(''); // Store the image name in state
  const [isImageUploaded, setIsImageUploaded] = useState(false); // State to track image upload
  const userData = JSON.parse(sessionStorage.getItem('user')) || {};
  console.log(userData);
  const handleImageChange = (info) => {
    setImageName(info.file.name);
    setImgCheck(true)
    setImage(URL.createObjectURL(info.file)); // Create a URL to preview the image
    setIsImageUploaded(true);
    const previousValues = JSON.parse(sessionStorage.getItem('user')) || {};
    const updatedValues = { ...previousValues, image: URL.createObjectURL(info.file),imageName:info.file.name };
    sessionStorage.setItem('user', JSON.stringify(updatedValues));
  };

  const handleImageRemove = () => {
    setImgCheck(false)
    setImage(null); // Remove the image from state
    setImageName(''); // Clear the image name
    setIsImageUploaded(false); // Set state back to hide the image and buttons
  };

  const handleImageChangeClick = () => {
    setIsImageUploaded(false);
    setImgCheck(false) // Hide the image and buttons when changing the image
  };

  return (
    <div>
      {(!isImageUploaded  || !userData?.image ) && (
        <label
          className="d-flex flex-column justify-content-center align-items-center gap-3 position-relative Parentimg"
          htmlFor="uploadInput"
          style={{
            borderWidth: '1px',
            borderRadius: '10px',
            cursor: 'pointer',
            borderStyle: 'dashed',
            fontSize: '16px',
            fontWeight: 'bold',
            padding: '10px', // Add padding for better UI
            textAlign: 'center', // Center the text
          }}
        >
          <img src={vector} alt="" width={'20'} />
          <Upload
            id="uploadInput"
            showUploadList={false} // Hide the upload list
            style={{ display: 'none' }}
            onChange={handleImageChange} // Handle the change event
            maxCount={1} // Allow only one image
            beforeUpload={() => false} // Prevent automatic upload
          >
            {/* This button is hidden, file input is triggered by the label */}
            <Button className="UploadBtn AddEmployee px-5" icon={<UploadOutlined />}>
              Click to Upload
            </Button>
          </Upload>
        </label>
      )}
      {(isImageUploaded || userData?.image )&& (
        <div>
          <h6 className='text-start text-dark m-0 p-0'>Added Image</h6>
          <div
            style={{ marginTop: '10px' }}
            className="d-flex align-items-center flex-column flex-md-row justify-content-center justify-content-md-start gap-3 imageParent p-2 "
          >
            <img src={image || userData?.image} alt="Uploaded Preview" className='imgUpload responsive-image ' style={{borderRadius:'15px',objectFit:'cover'}} />
            <div className="d-flex flex-column align-items-center justify-content-center justify-content-md-start gap-2">
              <small className='lineHeight-20 text-dark text-wrap'  style={{
      wordBreak: 'break-word', // Break words that are too long
      textAlign: 'start', // Center align the text
    }}>{imageName || userData?.imageName}</small>
              <div className="d-flex justify-content-center  justify-content-md-start w-100 gap-3 align-items-center">

              <small className='lineHeight-20' style={{cursor:'pointer'}}  onClick={handleImageChangeClick}><SwapOutlined className='textColor' /> change</small>
              <small className='lineHeight-20' style={{cursor:'pointer'}} onClick={handleImageRemove}><DeleteOutlined className='textColor'  />remove</small>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
