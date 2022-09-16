import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Header from "../Header";
import Footer from "../Footer";


const MainLayout = () => {
  
  
  return (
    <Layout className="absolute inset-x-0">
      <Layout.Header className="fixStyleHeader container ">
        <Header />
        
      </Layout.Header>
      <Layout.Content className="container ">
        <div className="h-28"></div>
        <Outlet />
      </Layout.Content>
      <Layout.Footer className="container">
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default MainLayout;
