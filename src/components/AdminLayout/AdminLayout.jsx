import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  
} from '@ant-design/icons';
import {useDispatch,  useSelector } from "react-redux";
import { Layout, Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { logout } from "modules/Authentication/slices/authSlice";
import { useNavigate } from "react-router-dom";
import SubMenu from 'antd/lib/menu/SubMenu';

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
        <Menu  theme="dark" defaultSelectedKeys={['1']} mode="inline" >
        <SubMenu key="sub2" icon={<UserOutlined/>} title="User">
          <Menu.Item key="5" icon={<UserOutlined/>}>
            <NavLink to="/admin/userList">User</NavLink>
          </Menu.Item> 
          <Menu.Item key="6" icon={<UserOutlined/>}>
            <NavLink to="/admin/userList/addnew">Add New User</NavLink>
          </Menu.Item> 

          </SubMenu>
          <SubMenu key="sub3" icon={<FileOutlined/>} title="Movie">
              <Menu.Item key="10" icon={<FileOutlined/>}>
            <NavLink to="/admin/movieList">Movie</NavLink>
          </Menu.Item>
          <Menu.Item key="11" icon={<FileOutlined/>}>
            <NavLink to="/admin/movieList/addnew">Add New Movie</NavLink>
          </Menu.Item> 
         </SubMenu>
          <Menu.Item key="3" icon={<DesktopOutlined/>}>
            <NavLink to="/admin/deatail">ShowTime</NavLink>
          </Menu.Item>
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
            <div className="dropdown relative  bg-slate-200 flex justify-center h-full pr-5">
              <button className="pr-4 p-2 font-bold text-xl hover:border">Tài khoản: 
                
              
                
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
          <Outlet />
        </Content>
       
      </Layout>
    </Layout>
  );
};


export default AdminLayout