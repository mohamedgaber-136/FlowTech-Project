import { useState } from 'react';
import { Button, message, Steps, theme, Form, Input, Upload, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import PersonalData from './PersonalData';
import ImageUpload from './ImageUpload';
import { PreviewData } from './PreviewData';

const { Step } = Steps;



// Step 2: Image Upload


// Step 3: Preview Data

const StepperComp = ({onCancel,setData}) => {
  const [ImgChecked,setImgCheck]=useState(false)
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    image: null,
    active:false,

  };
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const handleFormDataChange = (values ) => {
  sessionStorage.setItem('user',JSON.stringify(values));
    console.log(values)
    next();;
  };



  const steps = [
    {
      title: 'Personal Data',
      content: <PersonalData onFormDataChange={handleFormDataChange} initialValues={initialValues}/>,
    },
    {
      title: 'Image',
      content: <ImageUpload  setImgCheck={setImgCheck} />,
    },
    {
      title: 'Preview',
      content: <PreviewData />,
    },
  ];
function sendData (){
  const previousValuesSession = JSON.parse(sessionStorage.getItem('user')) || {};

            const previousValuesLocal = JSON.parse(localStorage.getItem('user')) || []
            previousValuesSession.id= previousValuesLocal.length 
             localStorage.setItem('user', JSON.stringify([...previousValuesLocal, previousValuesSession]))
             setData([...previousValuesLocal, previousValuesSession])
            message.success('Processing complete!')

          sessionStorage.removeItem('user')
          setCurrent(0)
            onCancel()
}
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };
const checkBtn = ()=>{
  if(current== steps.length-1) {
return  <Button type="primary" className='AddEmployee px-5' onClick={() =>sendData   ()     
}>
Done
</Button>
  }else if(current > 0  && current < steps.length - 1){
  return  <Button className='AddEmployee px-5'
    style={{
      margin: '0 8px',
    }}
    onClick={next}
  >
    next
  </Button>
  }
}
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
     
      
        
        <div className="d-flex justify-content-between" >
        {current > 0 && (
          <Button className='AddEmployee px-5'
            style={{
              margin: '0 8px',
            }}
            onClick={prev}
          >
            Back
          </Button>
        )}
          {
            checkBtn()
          }
        </div>
        
      </div>
    </>
  );
};

export default StepperComp;
