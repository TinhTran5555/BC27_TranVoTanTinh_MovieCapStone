import { useNavigate } from "react-router-dom";
import "./index.module.css";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tabs } from "antd";
import useViewport from "components/useViewport/useViewport";
const MovieShowing = () => {
  const viewPort = useViewport();
  
  const isMobile = viewPort.width <= 1024;
  const isSmallMobile = viewPort.width <= 640;
  const navigate = useNavigate();

  const {
    data: movies,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovies());

  const goToMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  let valueSlidesToShow = 3;
  let valueSlidesToScroll = 3;
  if (isMobile) {
    valueSlidesToShow = 2;
    valueSlidesToScroll = 2;
  }
  if (isSmallMobile) {
    valueSlidesToShow = 1;
    valueSlidesToScroll = 1;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: valueSlidesToShow,
    slidesToScroll: valueSlidesToScroll,
  };

  const imgStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "400px",
  };
  return (
    <Tabs className="MovieShowing max-w-5xl m-auto mt-5" defaultActiveKey="1">
      <Tabs.TabPane tab={<h3 className="TabStyle">Đang chiếu</h3>} key="1">
        <Slider {...settings}>
          {movies?.map((movie) => {
            if (movie.dangChieu === false) {
              return;
            }
            return (
              <section key={movie.maPhim} className="text-gray-600 body-font">
                <div className="container px-5 py-20 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="w-full">
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden ">
                        {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={movie.hinhAnh} alt="img" /> */}
                        <div
                          className="lg:h-48 md:h-36 w-full"
                          style={{
                            ...imgStyle,
                            backgroundImage: `url(${movie.hinhAnh})`,
                          }}
                        ></div>
                        <div className="p-6 bg-cyan-100">
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            {movie.tenPhim}
                          </h1>
                          <p className="leading-relaxed mb-3">
                            Đánh giá: {movie.danhGia}/10
                          </p>
                          <div
                            className="bg-indigo-300 hover:bg-teal-200 text-center cursor-pointer py-2 my-2 text-teal-700 hover:text-indigo-500 font-bold hover:border-solid hover:boder hover:border-teal-500"
                            onClick={() => goToMovie(movie.maPhim)}
                          >
                            CHI TIẾT
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </Slider>
      </Tabs.TabPane>
      <Tabs.TabPane tab={<h3 className="TabStyle">Sắp chiếu</h3>} key="2">
        <Slider {...settings}>
          {movies?.map((movie) => {
            if (movie.sapChieu === false) {
              return;
            }
            return (
              <section key={movie.maPhim} className="text-gray-600 body-font">
                <div className="container px-5 py-20 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="w-full">
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={movie.hinhAnh} alt="img" /> */}
                        <div
                          className="lg:h-48 md:h-36 w-full"
                          style={{
                            ...imgStyle,
                            backgroundImage: `url(${movie.hinhAnh})`,
                          }}
                        ></div>
                        <div className="p-6">
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            {movie.tenPhim}
                          </h1>
                          <p className="leading-relaxed mb-3">
                            Đánh giá: {movie.danhGia}/10
                          </p>
                          <button
                            className="bg-sky-500 hover:bg-sky-700"
                            onClick={() => goToMovie(movie.maPhim)}
                          >
                            Chi Tiết
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </Slider>
      </Tabs.TabPane>
    </Tabs>
  );
};

export default MovieShowing;
