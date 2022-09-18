import React, { Fragment, useEffect } from "react";
import { Button, Table } from "antd";

import { AudioOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

import { NavLink } from "react-router-dom";
import { getDataUser, deleteUser} from "modules/AdminMovie/slice/QuanLyUser";

import { useDispatch, useSelector } from "react-redux";
const { Search } = Input;

const UserList = () => {
  const dispatch = useDispatch();

  const { userAdmin } = useSelector((state) => state.adminUser);
  useEffect((tuKhoa) => {
    if (!tuKhoa) {
      console.log(tuKhoa);
      dispatch(getDataUser(""));
    } else {
      dispatch(getDataUser(tuKhoa));
    }
  }, []);

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      width: 100,
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.taiKhoan - b.taiKhoan,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      width: 200,
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      width: 200,
      sorter: (a, b) => {
        let emailA = a.email.toLowerCase().trim();
        let emailB = b.email.toLowerCase().trim();
        if (emailA > emailB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDT",
      width: 100,
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.soDT - b.soDT,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      width: 200,
      
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      width: "15%",

      render: (text, userAdmin) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" mr-2 text-2xl "
              to={`/admin/userList/edit/${userAdmin.taiKhoan}`}
            >
              <EditOutlined style={{ color: "blue" }} />
            </NavLink>
            <span
              key={2}
              className=" cursor-pointer text-2xl "
              onClick={() => {
                if (
                  window.confirm(
                    "bạn có chắc chắn muốn xoá người dùng" + userAdmin.taiKhoan
                  )
                ) {
                  dispatch(deleteUser(userAdmin.taiKhoan));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />
            </span>
          </Fragment>
        );
      },
      sortDirections: ["ascend", "descend"],
    },
  ];
  const data = userAdmin;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (tuKhoa) => {
    console.log(tuKhoa);
    dispatch(getDataUser(tuKhoa));
  };

  return (
    <div className="movieList">
      <h3>Quản lý người dùng</h3>

      <Search
        className="search"
        placeholder="input search text"
        allowClear
        enterButton
        size="large"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={userAdmin.taiKhoan}
      />
    </div>
  );
};

export default UserList;
