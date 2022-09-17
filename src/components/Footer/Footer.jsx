import React from "react";
import "./Footer.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  return (
    <div id="footer" className="text-white py-5 text-xs bg-slate-800 footer">
      <div className="footerContent row">
        <div className="col-8 col-md-6 col-lg-4">
          <div className="d-flex justify-content-center">
            <div className="d-none d-lg-block d-xl-block">
              <h5 className="mb-0">TIX</h5>
              <a target="_blank" rel="noopener noreferrer" href="#">
                FAQ
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                Brand Guidelines
              </a>
            </div>
            <div className="row">
              <a
                className="col-6 col-lg-12"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                Thỏa thuận sử dụng
              </a>
              <a
                className="col-6 col-lg-12"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </div>
        <div className="footer__company col-lg-4 d-none d-lg-block d-xl-block">
          <h5>Đối tác</h5>
          <div>
            <div className="mb-3 justify-content-between d-flex w-75 align-items-center">
              <a target="_blank" rel="noopener noreferrer" href="#">
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/cgv.png"
                  alt="logo_cgv"
                  className="logo"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.bhdstar.vn/"
              >
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/bhd.png"
                  alt="logo_bhd"
                  className="logo"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.galaxycine.vn/"
              >
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/galaxycine.png"
                  alt="logo_galaxy"
                  className="logo"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://cinestar.com.vn/"
              >
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/cinestar.png"
                  className="logo"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.lottecinemavn.com/LCHS/index.aspx"
              >
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/lotte.png"
                  alt="logo_lotte"
                  className="logo"
                />
              </a>
            </div>
            <div className="mb-3 justify-content-between d-flex w-75 align-items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.megagscinemas.vn/"
              >
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/megags.png"
                  alt="logo_megags"
                  className="logo"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://betacinemas.vn/home.htm"
              >
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/bt.jpg"
                  alt="logo_bt"
                  className="logo"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://ddcinema.vn/"
              >
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/dongdacinema.png"
                  alt="logo_dongda"
                  className="logo"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cgv.vn/"
              >
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/TOUCH.png"
                  alt="logo_touch"
                  className="logo"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cgv.vn/"
              >
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/cnx.jpg"
                  alt="logo_cnx"
                  className="logo"
                />
              </a>
            </div>
            <div className="mb-3 justify-content-between d-flex w-75 align-items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://starlight.vn/"
              >
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/STARLIGHT.png"
                  alt="logo_star"
                  className="logo"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dcine.vn"
              >
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/dcine.png"
                  alt = "logo_dcine"
                  className="logo"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://movie.zalopay.vn/"
              >
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/zalopay_icon.png"
                  alt = "logo_zalopa"
                  className="logo"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.payoo.vn/"
              >
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/payoo.jpg"
                  alt = "logo_payoo"
                  className="logo"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.agribank.com.vn/"
              >
                <img
                  src="https://movie-booking-project.vercel.app/img/logo-connect/AGRIBANK.png"
                  alt = "logo_AGRIBANK"
                  className="logo"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-4 col-md-6 col-lg-4 d-flex text-center justify-content-center">
          <div className="w-50 d-none d-lg-block d-xl-block">
            <h5 className="pb-2">MOBIL APP</h5>
            <div className="footer__mobile d-flex justify-content-around">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.apple.com/"
              >
                <img
                  className="logo"
                  src="https://movie-booking-project.vercel.app/img/mobile-system/apple-logo.png"
                  alt = "logo_apple"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.android.com/"
              >
                <img
                  className="logo"
                  src="https://movie-booking-project.vercel.app/img/mobile-system/android-logo.png"
                  alt = "logo_android"
                />
              </a>
            </div>
          </div>
          <div className="w-50 col-md-8 ">
            <h5 className="d-none d-lg-block d-xl-block pb-2">SOCIAL APP</h5>
            <div className="d-flex justify-content-around text-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/"
              >
                <img
                  className="logo"
                  src="https://movie-booking-project.vercel.app/img/media/facebook-logo.png"
                  alt = "logo_facebook"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://zalo.me/pc"
              >
                <img
                  className="logo"
                  src="https://movie-booking-project.vercel.app/img/media/zalo-logo.png"
                  alt = "logo_zalo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footerContent container">
        <div className="row">
          <div className="col-12 col-md-2 p-2 text-center d-flex justify-content-center">
            <img
              src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
              alt="company"
              className="logoCyber"
            />
          </div>
          <div className="col-12 col-md-8 p-1 text-center text-lg-left">
            <h5 className="text-white">
              TICKET - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN CYBERSHOP
            </h5>
            <p>
              Địa chỉ: Trụ sở chính: 112 Cao Thắng,, Tp. Hồ Chí Minh, Việt Nam.
            </p>

            <p>Số Điện Thoại (Hotline): 0961.05.10.14</p>
            <p>
              Email: <span className="d-inline">info@cybersoft.edu.vn</span>
            </p>
          </div>
          <div
            className="col-12 col-md-2 p-1 text-center d-flex justify-content-center"
            style={{ position: "static" }}
          >
            <img
              src="https://movie-booking-project.vercel.app/img/media/certificate.png"
              alt="gvm"
              className="logobct"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
