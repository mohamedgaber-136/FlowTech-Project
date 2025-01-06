import  { useState } from 'react';
import { Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import StepperComp from './StepperComp';

const AntModal = ({setData}) => {
  // State to control modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to show the modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to handle modal cancel (close)
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      {/* Button to trigger the modal */}
    
      <Button className='AddEmployee p-4 p-md-2 p-lg-3 p-xl-4 w-100 ' icon={<PlusOutlined />} onClick={showModal}>
          Add New Employee
        </Button>

      {/* Modal component */}
      <Modal
        title="Add New Employees"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null} // Optional: remove the footer buttons (default Ok/Cancel)
      >
        <div className="mt-3">

       <StepperComp onCancel={handleCancel} setData={setData} />
        </div>
        {/* Custom buttons in modal */}
      </Modal>
    </div>
  );
};

export default AntModal;
