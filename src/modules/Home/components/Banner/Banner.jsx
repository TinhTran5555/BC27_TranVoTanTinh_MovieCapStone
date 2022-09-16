import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { Carousel } from "antd";
import React, { useState, useEffect } from "react";
import useViewport from "components/useViewport/useViewport";



const Banner = () => {
  const viewPort = useViewport();
  const isSmallMobile = viewPort.width <= 768;
 let valueWidthTrailer = 700
 let valueHeightTrailer = 500
 if (isSmallMobile) {
  valueWidthTrailer = 500;
  valueHeightTrailer = 300;

 }

  const contentStyle = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "670px",
  position: "relative",
};

const buttonPlayStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
const overlay = {
  width: "100%",
  height: "100%",
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
const TRAILERS = [
  "https://www.youtube.com/embed/uqJ9u7GSaYM",
  "https://www.youtube.com/embed/kBY2k3G6LsM",
  "https://www.youtube.com/embed/Eu9G8nO5-Ug",
];
  
  // const dispatch = useDispatch();
  // const { banners, isLoading, error } = useSelector((state) => state.banner);
  // useEffect(() => {
  //   dispatch(getBanners());
  // }, []);
  const [showingTrailer, setShowingTrailer] = useState(false);
  function openTrailer() {
    setShowingTrailer(true);
  }
  function closeTrailer() {
    setShowingTrailer(false);
  }
  const {
    data: banners,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getBanners());

  const bannersMapped = banners?.map((banner, index) => {
    return { ...banner, trailer: TRAILERS[index] };
  });

  return (
    <Carousel className="container">
      {bannersMapped?.map((banner) => {
        return (
          <div key={banner.maBanner}>
            <div
              style={{
                ...contentStyle,
                backgroundImage: `url(${banner.hinhAnh})`,
              }}
            >
              <button style={buttonPlayStyle} onClick={openTrailer}>
                <svg width={131} height={131} viewBox="0 0 131 131" fill="none">
                  <path
                    className="inner-circle"
                    d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z"
                    fill="white"
                  />
                  <circle
                    className="outer_circle"
                    cx="65.5"
                    cy="65.5"
                    r={64}
                    stroke="white"
                  />
                  <path
                    className="play"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M60 76V57L77 66.7774L60 76Z"
                    fill="#BF2428"
                  />
                </svg>
              </button>
              {showingTrailer && (
                <div style={overlay} onClick={closeTrailer}>
                  <iframe
                    style={trailerStyle}
                    marginHeight="50px"
                    width={  valueWidthTrailer
                    }
                    height={valueHeightTrailer}
                    src={banner.trailer}
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Banner;
