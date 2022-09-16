import React, { Fragment } from "react";
import { Tabs } from "antd";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Cinema = () => {
  const {
    data: cumraps,
    isLoading,
    error,
  } = useRequest(() => movieAPI.GetCumRapDetails());
  const navigate = useNavigate();
  const goToTicket= (checkoutId) => {
    navigate(`/checkout/${checkoutId}`);
  };
  
  
 
  return (
    <Tabs
    id="cinema"
    className="max-w-5xl m-auto mt-5 bg-slate-50 Cinema "
    defaultActiveKey="0"
    tabPosition="left"
  >
    {cumraps?.map((cumrap, index) => {
      return (
        <Tabs.TabPane
          key={index}
          tab={<img src={cumrap.logo} className="rounded-full w-12" />}
        >
          <Tabs defaultActiveKey="0" tabPosition="left" className="Cinamalist">
            {cumrap.lstCumRap?.map((listcumrap, index) => {
              return (
                <Tabs.TabPane
                  key={index}
                  tab={
                    <div className="w-40 sm:w-40 md:w-60 xl:w-80 flex">
                      <img
                        src={listcumrap.hinhAnh}
                        className="rounded-full w-12 h-12"
                      />
                      <div className="text-left ml-2 whitespace-pre-wrap">
                        {listcumrap.tenCumRap}

                        <p className="text-emerald-500 whitespace-pre-wrap ">
                          {listcumrap.diaChi}
                        </p>
                       
                      </div>
                    </div>
                  }
                >
                  {listcumrap.danhSachPhim.slice(0, 4).map((movie, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="">
                          <div className="flex mb-4">
                            <img
                              className="w-14 h-14 mt-2 "
                              src={movie.hinhAnh}
                              alt="hinhAnh"
                            />
                            <div className="ml-2 flex flex-col w-full">
                              <h1 className="text-2xl text-green-700">
                                {movie.tenPhim}
                              </h1>
                              <div className="grid md:grid-cols-2 gap-6 xl:grid-cols-6 xl:gap-6 lg:grid-cols-4 lg:gap-4">
                                {movie.lstLichChieuTheoPhim
                                  ?.slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <button  onClick={()=> goToTicket(lichChieu.maLichChieu)}
                                        className="text-xl text-green-400 no-underline border text-center rounded-md"
                                        
                                        key={index}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </button>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </Tabs.TabPane>
              );
            })}
          </Tabs>{" "}
        </Tabs.TabPane>
      );
    })}
  </Tabs>
  );
};

export default Cinema;
