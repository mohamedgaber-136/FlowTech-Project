import { Layout } from 'antd';
import { SettingsBar } from '../SettingsBar';

const { Header } = Layout;

export const HeaderDesign = ({ setCollapsed, collapsed, children }) => {
  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <Header style={{ background: 'white' }} >
        <div className="px-1 px-md-3">
          <SettingsBar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>
      </Header>
      {/* Render children below the header */}
      <div>{children}</div>
    </Layout>
  );
};
