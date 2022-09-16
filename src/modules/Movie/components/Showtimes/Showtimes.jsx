import React, { Fragment } from "react";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";

const Showtimes = ({ movieId }) => {
  const {
    data: showTimes,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getShowTimesDetails(movieId));

  if (!showTimes) {
    return null;
  }
  

  return  <Tabs
  id="showTimes"
  className="max-w-5xl m-auto mt-5 Cinema"
  defaultActiveKey="0"
  tabPosition="left"
>
  {showTimes?.heThongRapChieu.map((showTime, index) => {
    return (
      <Tabs.TabPane
        key={index}
        tab={<img src={showTime.logo} className="rounded-full w-12" />}
      >
        <Tabs defaultActiveKey="0" tabPosition="left" className="Cinamalist">
          {showTime?.cumRapChieu?.map((cumRapChieu, index) => {
            return (
              <Tabs.TabPane
                key={index}
                tab={
                  <div className="w-40 sm:w-40 md:w-60 xl:w-80 flex">
                    <img
                      src={cumRapChieu.hinhAnh}
                      className="rounded-full w-12 h-12 items-center"
                    />
                    <div className="text-left ml-2 break-all">
                      {cumRapChieu.tenCumRap}

                      <p className="text-emerald-500 whitespace-pre-wrap">
                        {cumRapChieu.diaChi}
                      </p>
                      
                    </div>
                  </div>
                }
              >

                            <div className="grid md:grid-cols-2 xl:gap-6 lg:grid-cols-4 lg:gap-4">
                              {cumRapChieu.lichChieuPhim
                                ?.slice(0, 12)
                                .map((lichChieu, index) => {
                                  return (
                                    <NavLink
                                      className="text-xl text-green-400 no-underline text-center border rounded-md mt-2"
                                      to="/"
                                      key={index}
                                    >
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format("hh:mm A")}
                                    </NavLink>
                                  );
                                })}
                            </div>

              </Tabs.TabPane>
            );
          })}
        </Tabs>{" "}
      </Tabs.TabPane>
    );
  })}
</Tabs>
};

export default Showtimes;
