
import { useDispatch, useSelector } from "react-redux";
import React, { Fragment, useEffect, useState } from "react";
import { getTicketDetails } from "modules/Ticket/reducer/ticketsSlice";
import { CloseOutlined } from "@ant-design/icons";
import {
  removeAllTicketsAction,
  selectTicketAction,
} from "../../reducer/selectedTicketSlice";
import { postDatVe, ThongTinDatVe } from "modules/Ticket/reducer/ThongTinDatVe";

import { useParams } from "react-router-dom";
const SeatDetails = () => {
  
  const {checkoutId} = useParams()
  
  const dispatch = useDispatch();
  const { tickets, isLoading, error } = useSelector((state) => state.ticket);

  const { user } = useSelector((state) => state.auth);

  const { selectedTicket } = useSelector((state) => state.slectedTickets);
  
  useEffect(() => {
    dispatch(getTicketDetails(checkoutId));
  }, [checkoutId, selectedTicket]);


  
  if (!tickets) {
    return null;
  }

  const handleSelect = (danhSachGhe) => {
    dispatch(selectTicketAction(danhSachGhe));
  };

  const styleScreen = {
    color: "#fff",
    width: "90%",
    borderBottom: "50px solid rgb(255, 160, 100)",
    borderLeft: "50px solid transparent",
    borderRight: " 50px solid transparent",
    fontSize: "25px",
  };

  return (
    <div className=" container pb-16">
      <div className="flex lg:flex-row  sm:flex-col justify-around">
        <div className="  lg:max-w-3xl flex flex-col items-center justify-center">
          <div className="flex flex-col items-center mt-2">
            <div className="text-3xl text-sky-700 font-bold mt-5">
              XIN MỜI CHỌN VÉ
            </div>
            <div className="text-black text-2xl mt-3">Màn hình</div>

            <div style={styleScreen}></div>

            <div className="flex mt-5 flex-row justify-center flex-wrap hienThiGhe ">
              {tickets?.danhSachGhe?.map((danhSachGhe, index) => {
                let classGheVip = danhSachGhe.loaiGhe === "Vip" ? "gheVip" : "";
                let classGheDaDat =
                  danhSachGhe.daDat === true ? "gheDaDat" : "";
                let classGheDangDat = "";
                let indexGheDangDat = selectedTicket.findIndex(
                  (danhSachGheDangChon) =>
                    danhSachGheDangChon.maGhe === danhSachGhe.maGhe
                );

                if (indexGheDangDat !== -1) {
                  classGheDangDat = "gheDangChon";
                }
                return (
                  <Fragment key={index}>
                    <button
                      key={index}
                      disabled={danhSachGhe.daDat}
                      className={`gheChuaDat ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}
                      onClick={() => handleSelect(danhSachGhe)}
                    >
                      {danhSachGhe.daDat ? (
                        <CloseOutlined className="flex items-center justify-center" />
                      ) : (
                        danhSachGhe.stt
                      )}
                    </button>
                    {(index + 1) % 16 === 0 ? <br /> : ""}
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-center flex-wrap chuThich sm:w-4/5 gap-y-1.5 mt-4">
          <span className="w-1/2 font-bold">Chú thích: </span> 

            <span className="w-1/2 pl-2 flex justify-between">Ghế thường: <button className="gheChuaDat"></button></span> 
            <span className="w-1/2 flex justify-between">Ghế thường đã đặt: <button className="gheChuaDat  gheDaDat "></button></span> 
            <span className="w-1/2 pl-2 flex justify-between">Ghế Vip: <button className="gheChuaDat gheVip "></button></span> 
          
            <span className="w-1/2 flex justify-between">Ghế Vip đã đặt: <button className="gheChuaDat gheVip gheDaDat"></button></span> 
            <span className="w-1/2 pl-2 flex justify-between">Ghế ghế đang chọn: <button className="gheChuaDat  gheVip gheDangChon"></button></span> 
            
          </div>
        </div>
        <div className="relative">
          <h3 className=" text-sky-700 font-bold text-center mt-5">
            {" "}
            DANH SÁCH VÉ
          </h3>
          <hr />
          <h3 className="text-xl">{tickets?.thongTinPhim?.tenPhim}</h3>
          <p>
            Địa điểm: {tickets?.thongTinPhim?.tenCumRap} -{" "}
            {tickets?.thongTinPhim?.tenRap}
          </p>
          <p>
            Thời gian chiếu: {tickets?.thongTinPhim?.gioChieu} -{" "}
            {tickets?.thongTinPhim?.ngayChieu}
          </p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-3/5 grid grid-flow-row grid-cols-5 items-center flex-wrap">
              Ghế:{" "}
              {selectedTicket?.map((danhSachTenGheDangChon, index) => {
                return (
                  <span
                    key={index}
                    className="text-black text-lg grid-cols-2  gap-2"
                  >
                    {" "}
                    {danhSachTenGheDangChon.tenGhe},{" "}
                  </span>
                );
              })}
            </div>
            <div className="text-center w-2/5">
              <p className="text-green-800 text-lg">Tổng tiền:</p>{" "}
              <p>
                {selectedTicket
                  .reduce((tongTien, danhSachTenGheDangChon) => {
                    return (tongTien += danhSachTenGheDangChon.giaVe);
                  }, 0)
                  .toLocaleString()}{" "}
                Đ
              </p>
            </div>
          </div>
          <hr />
          <div className="my-4">
            <i>Tài khoản: </i>

            {user?.taiKhoan}
          </div>
          <div className="my-4">
            <i>Email: </i>

            {user?.email}
          </div>
          {user.soDt ? (
            <div className="my-4">
              <i>Số điện thoại: </i>

              {user?.soDt}
            </div>
          ) : null}
          <div className="absolute bottom-0 w-full">
            <div 
            onClick={()=> {
              const thongTinDatVe = new ThongTinDatVe();
              thongTinDatVe.maLichChieu = checkoutId ;
              thongTinDatVe.danhSachVe = selectedTicket;
              console.log(thongTinDatVe);
              dispatch(postDatVe(thongTinDatVe));dispatch(removeAllTicketsAction());
             
              
            }} 
            
            className="bg-green-500 text-light text-center w-full py-3 text-2xl font-bold">
              Đặt vé
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatDetails;
