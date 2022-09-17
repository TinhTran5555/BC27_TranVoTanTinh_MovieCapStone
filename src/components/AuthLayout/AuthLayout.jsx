import React from "react";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className=" relative">
      <div className="backGround ">
        <Outlet  /></div>
      
    </section>
  );
};

export default AuthLayout;
