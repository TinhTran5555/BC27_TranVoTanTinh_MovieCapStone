import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import MainLayout from "components/MainLayout";
import AuthLayout from "components/AuthLayout";
import AdminLayout from "components/AdminLayout";
import CheckoutRoute from "routes/CheckoutRoute";
import "./App.css";
import AdminRoute from "routes/AdminRoute";
import UserList from "modules/AdminMovie/pages/UserList";
import Deatail from "modules/AdminMovie/pages/Deatail";

// Không import trực tiếp các pages, vì nó sẽ được tải tất cả ở lần đầu tiên
// import Home from "modules/Home/pages/Home";
// import Movie from "modules/Movie/pages/Movie";
// import Login from "modules/Authentication/pages/Login";
// import Register from "modules/Authentication/pages/Register";

// Để chỉ cần tải những pages cần thiết ta sử dụng kĩ thuật lazyload
const Home = lazy(() => import("modules/Home/pages/Home"));
const Movie = lazy(() => import("modules/Movie/pages/Movie"));
const Ticket = lazy(() => import("modules/Ticket/pages/Ticket"));
const Login = lazy(() => import("modules/Authentication/pages/Login"));
const Register = lazy(() => import("modules/Authentication/pages/Register"));

const MovieList = lazy(() => import("modules/AdminMovie/pages/MovieList"));
const AddMovie = lazy(() => import("modules/AdminMovie/pages/AddMovie"));
const styleLoading = {
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  zIndex: "-1",
  position: "fixed",
  transition: "background-color 0.6s ease-in-out",
  alignItems: "center",
  justifyContent: "center",
}
const styleImg = {
  width: "250px",
  position: "relative",
  animation: " 0.6s infinite",
}

function App() {
  return (
    // Suspense: hiển thị fallback UI (Loading) khi các file JS của một page đang được tải về
    <Suspense fallback={<div style={styleLoading}>
      <div>
      <img
          style={styleImg}
          src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
          alt="Cybershop.edu.vn"
        />
      </div>
    </div>}>
      <Routes>
        {/* <Route
          // path="/admin"
          // element={
          //   // TODO: chuyển vào component AdminLayout
          //   // TODO: tạo AdminRoute kiểm tra xem user có phải là QuanTri hay không
          //   // <AdminRoute>
          //   //   <AdminLayout />
          //   // </AdminRoute>

          //   <div>
          //     <h1>Admin Layout</h1>
          //     <Outlet />
          //   </div>
          // }
         
        > */}
          
          {/* AdminUser, AdminShowtimes */}
        {/* </Route> */}
        <Route path="/admin"
          element={<CheckoutRoute>
            
            <AdminLayout path="/">
              
            </AdminLayout>
          </CheckoutRoute>}
        />
        <Route path="/user" element={<UserList/>}/>
        <Route path="/movieList" element={<MovieList/>}/>
        <Route path="/deatail" element={<Deatail/>}/>

        {/* Để các routes có cùng chung 1 layout, ta sử dụng kĩ thuật nested route, route parent đi định nghĩa layout component, bên trong route parent sẽ gọi tới cái children routes */}
        <Route path="/" element={<MainLayout />}>
          {/* index: path của child route khớp 100% với path của parent route */}
          <Route index element={<Home />} />
          <Route path="movie/:movieId" element={<Movie />} />
          
          <Route
            path="checkout/:checkoutId"
            element={
              <CheckoutRoute >
               <Ticket path="checkout/:ticketId"/>
              
              </CheckoutRoute>
            }
          />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
