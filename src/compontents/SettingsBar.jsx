import {
  MessageOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined, 
  SettingOutlined
} from "@ant-design/icons";
import { Avatar, Badge, Button,Dropdown,message } from "antd";
import avatarProfile from '../assets/images/avatars/avatarOne.png';
import { useEffect, useState } from "react";
export const SettingsBar = ({ setCollapsed, collapsed }) => {
   const [Settings, setSettings] = useState(false);
  
    // Set collapsed to true on screens smaller than 768px
    useEffect(() => {
      const handleResize = () => {
        setSettings(window.innerWidth < 768);
      };
  
      // Initial check
      handleResize();
  
      // Add event listener
      window.addEventListener('resize', handleResize);
  
      // Cleanup on unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  const items = [
    {
      label: 'Mohamed kamal ',
      key: '1',
      icon:  <Avatar
      src={avatarProfile} 
      style={{
        width: 30,
        height: 30,
      }}
    />,
    },
    {
      label: 'Messages',
      key: '2',
      icon:    <Badge
      size="small"
      count={3}
      style={{
        backgroundColor: "rgba(2, 105, 128, 1)", // Badge background color
        color: "#fff", // Badge text color
      }}
    >
      <Avatar
        shape="circle"
        icon={<MessageOutlined />}
        style={{
          color:'black',

          backgroundColor: "rgba(240, 242, 245, 1)", // Avatar background color
        }}
      />
    </Badge>,
    },
    {
      label: 'Notifications',
      key: '3',
      icon: <Badge
      count={9}
      size="small"

      style={{
        backgroundColor: "rgba(2, 105, 128, 1)", 
        color: "#fff", 
      }}
    >
      <Avatar
        shape="circle"
        icon={<NotificationOutlined />}
        style={{
          color:'black',
          backgroundColor: "rgba(240, 242, 245, 1)", 
        }}
      />
    </Badge>,
    },
 
  ];
  const handleMenuClick= (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const menuProps = {
    items,
    style: {
      marginBottom: "30px", // Add margin-bottom between menu items
    },
    onClick: handleMenuClick,
  };
  return (
    <div className="settingsBar  d-flex justify-content-between gap-3 gap-md-0 align-items-center">
      <div className="d-flex   align-items-center">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <h2 className="m-0 p-0">Employees</h2>
      </div>
    {
      Settings? <div className="d-flex justify-content-end lineHeight-20 ">
          <Dropdown menu={menuProps} placement="bottom" icon={<UserOutlined />}>
          <Button
        style={{
          backgroundColor: "rgba(2, 105, 128, 1)", // Optional: Customize button background color
          color: "#fff", // Optional: Customize text color
          border: "none", // Optional: Remove border for a cleaner look
        }}
      >
        <SettingOutlined />
      </Button>
    </Dropdown>
      </div>:
       <div className="d-flex gap-3 align-items-center">

       <Badge
         count={3}
         style={{
           backgroundColor: "rgba(2, 105, 128, 1)", // Badge background color
           color: "#fff", // Badge text color
         }}
       >
         <Avatar
           shape="circle"
           icon={<MessageOutlined />}
           style={{
             color:'black',

             backgroundColor: "rgba(240, 242, 245, 1)", // Avatar background color
           }}
         />
       </Badge>

       <Badge
         count={9}
         style={{
           backgroundColor: "rgba(2, 105, 128, 1)", 
           color: "#fff", 
         }}
       >
         <Avatar
           shape="circle"
           icon={<NotificationOutlined />}
           style={{
             color:'black',
             backgroundColor: "rgba(240, 242, 245, 1)", 
           }}
         />
       </Badge>

       <div className="d-flex justify-content-center align-items-center gap-3">
         <Avatar
           src={avatarProfile} 
           style={{
             width: 40,
             height: 40,
           }}
         />
         <div className="d-flex flex-column align-items-start ">
           <b className="lineHeight-20">Mohamed Kamal</b>
           <small className="lineHeight-20">Admin</small>
         </div>
       </div>
     </div> 
    }
 
    </div>
  );
};
