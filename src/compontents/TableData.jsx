import { useState } from 'react';
import { Input, Table, Space, Tag, message, Popconfirm } from 'antd';
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import AntModal from './AntModal';
import { useNavigate } from 'react-router-dom';

const TableData = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(JSON.parse(localStorage.getItem('user')) || []);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate(); // Hook to navigate to other routes

  const handleSearch = (value) => {
    const filtered = data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  const confirm = (record) => {
    const updatedData = data.filter((item) => item.id !== record.id);
    setData(updatedData); // Update the state
    localStorage.setItem('user', JSON.stringify(updatedData)); // Update local storage
    message.success('Employee deleted successfully');
  };

  const cancel = () => {
    message.error('Delete operation canceled');
  };

  const columns = [
    {
      title: 'Employee',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: 150,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 250,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      width: 150,
    },
    {
      title: 'Start Date',
      dataIndex: 'date',
      key: 'date',
      width: 150,
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      width: 30,
      render: (active) => (
        <Tag
          color={active ? 'green' : 'red'}
          className="d-flex justify-content-center align-items-center"
          style={{ borderRadius: '50%', width: '20px', height: '20px' }}
        >
          {active ? '✓' : '✗'}
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      width: 30,
      render: (record) => (
        <Space size="middle">
          <Popconfirm
            title="Delete the Employee"
            description="Are you sure to delete this Employee?"
            onConfirm={() => confirm(record)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined
              className="text-secondary"
              size={50}
              onClick={(e) => e.stopPropagation()} // Prevent row click from being triggered
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  
  

  const dataSource = searchText ? filteredData : data;

  return (
    <div>
      <div className="table-header row justify-content-center gap-3 gap-lg-0 align-items-center mb-3">
        <div className="col-12 col-lg-10 col-xl-9 flex-fill">
          <Input
            placeholder="Search employees"
            allowClear
            prefix={<SearchOutlined />}
            onChange={(e) => {
              const value = e.target.value;
              setSearchText(value);
              handleSearch(value);
            }}
            style={{
              borderRadius: '50px',
              padding: '10px',
            }}
          />
        </div>
        <div className="col-12 col-lg-1 flex-fill">
          <AntModal setData={setData}/>
        </div>
      </div>
      <Table
  bordered
  columns={columns}
  dataSource={dataSource}
  rowKey="id"
  scroll={{ x: 'max-content' }}
  onRow={(record, rowIndex) => ({
    onClick: (event) => {
      // Check if the click is inside the actions column
      const actionsColumnIndex = columns.length - 1; // Last column index
      const targetColumnIndex = event.target.closest('td')?.cellIndex;

      // If not the actions column, navigate
      if (targetColumnIndex !== actionsColumnIndex) {
        navigate(`/employee/${record.id }`); // Navigate to the route with the record ID
      }
    },
  })}
/>

    </div>
  );
};

export default TableData;
