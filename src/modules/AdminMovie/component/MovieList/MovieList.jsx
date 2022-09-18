import React, { Fragment, useEffect } from "react";
import { Button, Table } from "antd";

import { AudioOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";

import { NavLink } from "react-router-dom";
import {
  getDataMovies,
  deleteMovie,
} from "modules/AdminMovie/slice/QuanlyPhimSlice";

import { useDispatch, useSelector } from "react-redux";
const { Search } = Input;

const MovieList = () => {
  const dispatch = useDispatch();
  // const {
  //   data: movies,

  // } = useRequest(() => movieAPI.getMovies());

  const { movieAdmin } = useSelector((state) => state.adminMovie);
  useEffect((tenPhim) => {
    if (!tenPhim) {
      console.log(tenPhim);
      dispatch(getDataMovies(""));
    } else {
      dispatch(getDataMovies(tenPhim));
    }
  }, []);

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      width: 100,
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      width: 200,
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      width: 100,
      render: (text, movieAdmin, index) => {
        return (
          <Fragment>
            <img
              src={movieAdmin.hinhAnh}
              alt={movieAdmin.tenPhim}
              width={50}
              height={50}
            />
          </Fragment>
        );
      },
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      width: "25%",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      render: (text, movieAdmin) => {
        return (
          <Fragment>
            {movieAdmin.moTa.length > 100
              ? movieAdmin.moTa.substr(0, 100) + "..."
              : movieAdmin.moTa}
          </Fragment>
        );
      },
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      width: "15%",

      render: (text, movieAdmin) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" mr-2 text-2xl "
              to={`/admin/movieList/edit/${movieAdmin.maPhim}`}
            >
              <EditOutlined style={{ color: "blue" }} />
            </NavLink>
            <span
              key={2}
              className=" cursor-pointer text-2xl "
              onClick={() => {
                if (
                  window.confirm(
                    "bạn có chắc chắn muốn xoá phim" + movieAdmin.tenPhim
                  )
                ) {
                  dispatch(deleteMovie(movieAdmin.maPhim));
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
  const data = movieAdmin;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (value) => {
    console.log(value);
    dispatch(getDataMovies(value));
  };

  return (
    <div className="movieList">
      <h3>Quản lý phim</h3>

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
        rowKey={movieAdmin.tenPhim}
      />
    </div>
  );
};

export default MovieList;
