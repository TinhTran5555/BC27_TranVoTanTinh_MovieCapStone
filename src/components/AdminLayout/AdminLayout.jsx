import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {useDispatch,  useSelector } from "react-redux";
import { Breadcrumb, Layout, Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from "modules/Authentication/slices/authSlice";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;



const AdminLayout = () => {
  const dispatch = useDispatch();
const navigate = useNavigate();
const goToLogout= () => {
  dispatch(logout())

  navigate("/");
};
const { user } = useSelector((state) => state.auth);

  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo bg-white p-5">
        <img
              src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
              alt="Cybershop.edu.vn"
            />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
          <MenuItem key="1" icon={<UserOutlined/>}>
            <NavLink to="/user">User</NavLink>
          </MenuItem>
          <MenuItem key="2" icon={<FileOutlined/>}>
            <NavLink to="/movieList">Movie</NavLink>
          </MenuItem>
          <MenuItem key="3" icon={<DesktopOutlined/>}>
            <NavLink to="/deatail">ShowTime</NavLink>
          </MenuItem>
        </Menu>
         
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <div >
            {" "}
            <div className="dropdown inline-block relative  bg-slate-200 flex justify-center h-full">
              <button className="pr-4 p-2 font-bold text-xl hover:border">
                
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                
                {user.taiKhoan}
              </button>

              <ul className="dropdown-menu right-0 hidden text-gray-700 pt-1 absolute ">
                <div onClick={()=> goToLogout()} className="self-center px-8 py-3 rounded hover:border hover:font-bold">
                  Đăng xuất
                </div>
                
              </ul>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
       
      </Layout>
    </Layout>
  );
};


export default AdminLayout