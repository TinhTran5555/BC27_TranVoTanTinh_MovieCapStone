import React, { useState , useEffect } from "react";

import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import useViewport from "components/useViewport/useViewport";


const Overview = ({ movieId }) => {
  const [showingTrailer, setShowingTrailer] = useState(false);
  const [showingDetails, setShowingDeatails] = useState(true)
  function openTrailer() {
    setShowingTrailer(true);
    setShowingDeatails(false)
  }
  function closeTrailer() {
    setShowingTrailer(false);
    setShowingDeatails(true)

  }
  const viewPort = useViewport();
  const isSmallMobile = viewPort.width <= 768;
 let valueWidthTrailer = 700
 let valueHeightTrailer = 500
 if (isSmallMobile) {
  valueWidthTrailer = 500;
  valueHeightTrailer = 300;

 }
  const {
    data: movie,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovieDetails(movieId));

  if (!movie) {
    return null;
  }
  

  
  const StyleBackGround = {
    WebkitTapHighlightColor: "transparent",
    display: "block",
    width: "100%",
    border: "0px",
    textDecoration: "none",
    color: "rgb(213, 215, 224)",
    borderRadius: "0px",
    backdropFilter: " blur(4px)",
    position: "relative",
    backgroundPosition: "center center",
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
  };
  const StyleDivBlur = {
    position: "absolute",
    backdropFilter: " blur(4px) brightness(0.3)",
    inset: "0px",
    zIndex: "-10",
  };
  const overlay = {
    width: "100%",
    height: "700px",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,0.1)",
    zIndex: "2",
    cursor: "pointer",
  };
  const trailerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "40",
  };
 
  return (
    <div
      className="container pt-10"
      style={{
        ...StyleBackGround,
        backgroundImage: `url(${movie.hinhAnh})`,
      }}
    >
      <div style={StyleDivBlur}></div>
      {showingTrailer && (
                <div style={overlay} onClick={closeTrailer}>
                  <iframe
                    style={trailerStyle}
                    marginHeight="50px"
                    width={  valueWidthTrailer
                    }
                    height={valueHeightTrailer}
                    src={movie.trailer}
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
        {showingDetails && (<div className="grid grid-cols-12 md:pb-10">
        <div className="md:col-span-6 col-span-12 col-start-3">
          <div className="w-4/5 border border-zinc-400 rounded-2xl">
            <img className="w-full" src={movie.hinhAnh} alt="" />
          </div>
        </div>
        <div className="md:col-span-6 col-span-12  md:pb-0  pb-5">
          <div className="flex flex-col flex-wrap justify-center gap-2 h-full items-center mt-3">
            <div className="flex flex-row flex-wrap items-center justify-start gap-4">
              <div className="truncate items-center justify-center leading-4 text-base h-8 px-4 py-2 rounded-lg font-bold tracking-wide text-white font-mono bg-sky-700">
                {movie?.dangChieu ? (
                  <span>Đang Chiếu</span>
                ) : movie?.sapChieu ? (
                  <span>Sắp chiếu</span>
                ) : null}
              </div>
              <div className="flex truncate items-center justify-center gap-4  text-base h-8 px-4 py-2 rounded-lg font-bold text-lime-400 border border-lime-400">
                <div>
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div>
                  <span>{movie.danhGia}</span>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-yellow-100 font-bold text-center pb-4">
                {movie.tenPhim}
              </h1>
              <p className="text-white  sm:text-center md:text-left">{movie.moTa}</p>
            </div>
            <div className="flex w-full justify-around">
              <div onClick={openTrailer} className="flex items-center  justify-center text-xl font-bold  text-center bg-cyan-700 h-16 w-32 md:py-2 md:px-3 rounded-3xl hover:border-2 hover:border-cyan-700 hover:text-cyan-700 hover:bg-white cursor-pointer">
                <span className="pr-3">Trailer</span>
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </div>
              <div className="flex items-center  justify-center text-xl  font-bold text-center bg-cyan-700 h-16 w-32  sm:py-4 sm:px-5 rounded-3xl hover:border hover:text-cyan-700 hover:bg-white cursor-pointer">
                Đặt vé
              </div>
            </div>
          </div>
        </div>
      </div>)}
      
    </div>
  );
};

export default Overview;
