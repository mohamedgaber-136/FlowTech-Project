import { Outlet } from "react-router-dom";
import { HeaderDesign } from "./Header";
import { SideBar } from "./SideBar";
import { Layout } from 'antd';
import { useState, useEffect, useCallback } from "react";

const { Content } = Layout;

export const LayoutDesign = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Set collapsed to true on screens smaller than 768px
  const handleResize = useCallback(() => {
    setCollapsed(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <Layout>
      <SideBar collapsed={collapsed} />
      <HeaderDesign setCollapsed={setCollapsed} collapsed={collapsed}>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: 'white',
            boxShadow: '0px 0px 10px 15px #EEEEEE80',
            borderRadius: '15px',
          }}
        >
          <Outlet /> {/* This is where the nested route will render */}
        </Content>
      </HeaderDesign>
    </Layout>
  );
};
