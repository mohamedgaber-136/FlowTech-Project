import { Layout, Menu, Tooltip } from 'antd';
import dashboard from '../../assets/images/icons/dashboard.png';
import teams from '../../assets/images/icons/teams.png';
import employe from '../../assets/images/icons/employe.png';
import setting from '../../assets/images/icons/setting.png';
import logo from '../../assets/images/logos/Whitelogo.png';
import Dash from '../../assets/images/logos/Frame1.png';
import { useNavigate, useLocation } from 'react-router-dom';

const { Sider } = Layout;

export const SideBar = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the current route for the active menu item
  const selectedKey = location.pathname === '/' ? '3' : location.pathname.substring(1);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={collapsed ? 80 : 246}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        height: '100vh',
        backgroundColor: 'rgba(2, 105, 128, 1)', // Updated background color
        display: 'flex',
        justifyContent: 'center', // Center items vertically
      }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <img className={`LogoImg ${collapsed && 'w-50'}`} src={logo} alt="Logo" />
        <img className={`DashImg ${collapsed && 'd-none'}`} src={Dash} alt="Dash" />
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={['3']} // Dynamically select the active menu item
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {[
          {
            key: 'dashboard',
            icon: <img src={dashboard} alt="Dashboard" />,
          },
          {
            key: 'teams',
            icon: <img src={teams} alt="Teams" />,
          },
          {
            key: '3',
            icon: <img src={employe} alt="Employee" />,
            path: '/',
          },
          {
            key: 'setting',
            icon: <img src={setting} alt="Settings" />,
          },
        ].map((item) => (
          <Menu.Item
            key={item.key}
            icon={
              <Tooltip title={item.label}>
                {item.icon}
              </Tooltip>
            }
            onClick={() => navigate(item.path)}
          >
            {!collapsed && item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};
