// import useRequest from "hooks/useRequest";
// import movieAPI from "apis/movieAPI";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getTicketDetails } from "modules/Ticket/reducer/ticketsSlice";
import {
    removeAllTicketsAction,
    selectTicketAction,
  } from '../../reducer/slectedTicketSlice';
const SeatDetails = ({ ticketId }) => {
  const dispatch = useDispatch();
  const { tickets, isLoading, error} = useSelector(
    (state) => state.ticket
  );
  const { user } = useSelector(
    (state) => state.auth
  );
  const { selectedTicket } = useSelector(
    (state) => state.selectedTickets
  );

  

  useEffect(() => {
    dispatch(getTicketDetails(ticketId));
  }, [ticketId]);
  if (!tickets) {
    return null;
  }
 console.log(selectedTicket);
if (!selectedTicket) {
    return null;
  }

  const handleSelect = (danhSachGhe) => {
    
    dispatch(selectTicketAction(danhSachGhe));
};
  
  const styleScreen = {
    color: "#fff",
    width: "80%",
    borderBottom: "50px solid rgb(255, 160, 100)",
    borderLeft: "50px solid transparent",
    borderRight: " 50px solid transparent",
    fontSize: "25px",
  };

  return (
    <div className="container min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
            <div className="grid-cols-8 text-center">
          <div className="text-3xl text-sky-300 font-bold mt-5">XIN MỜI CHỌN VÉ</div>
          <div className="text-black text-base mt-3">Màn hình</div>
          <div className="flex mt-1 flex-row justify-center">
            <div style={styleScreen}></div>
          </div>
          {/* // Phai them ? cho tat ca, vi code no se check tat ca ko dc falsy value */}
          <div className="grid grid-cols-10 mt-5">
            {tickets?.danhSachGhe?.map((danhSachGhe) => {
                
              let tinhTrangGhe = "";
              let disabled = false;
              if (danhSachGhe.daDat === true) {
                tinhTrangGhe = "gheDaDat";
                disabled = true;
              }
              if (danhSachGhe.loaiGhe === "Vip") {
                tinhTrangGhe = "gheVip";
                disabled = false;
              }
            //   {
            //     selectedTicket &&
            //       selectedTicket?.map((duLieu) => {
            //         if (danhSachGhe.stt === duLieu.stt) {
            //           tinhTrangGhe = "gheDangChon";
            //         }
            //       });
            //   }
              return (
                <div
                  key={danhSachGhe.stt}
                  disabled={disabled}
                  className={`gheChuaDat ${tinhTrangGhe}`}
                  onClick={() => handleSelect(danhSachGhe)}
                >
                  {danhSachGhe.stt}
                </div>
              );
            })}
          </div>
        </div>
        </div>
        <div className="col-span-4">
            <h3 className="text-green-400 text-center"></h3>
            <hr />
            <h3 className="text-xl">lat mat 48h</h3>
            <p>dia diem: bhd -vincom</p>
            <p>ngay chiee saydoasdsa</p>
            <hr />
            <div className="flex flex-row my-5">
                <div className="w-4/5">
                    <span className="text-red-400 text-lg">Ghees</span>
                </div>
                <div className="text-right col-span-1">
                    <span className="text-green-800 text-lg">0d</span>
                </div>
            </div>
            <hr />
            <div className="my-5">
                <i>Tài Khoản</i>
                <br />
                {user.taiKhoan}
            </div>
            <div className="my-5">
                <i>Email</i>
                <br />
                {user.email}
            </div>
            <div className="my-5">
                <i>Email</i>
                <br />
                {user.soDt}
            </div>
            <div className="mb-0 h-50 flex flex-col justify-end items-center">
                <div className="bg-green-500 text-light text-center w-full py-3 text-2xl font-bold">Đặt vé </div>
                
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default SeatDetails;
