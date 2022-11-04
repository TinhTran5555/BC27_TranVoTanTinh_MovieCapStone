import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import MainLayout from "components/MainLayout";
import AuthLayout from "components/AuthLayout";
import AdminLayout from "components/AdminLayout";
import CheckoutRoute from "routes/CheckoutRoute";
import "./App.css";

const Home = lazy(() => import("modules/Home/pages/Home"));
const Movie = lazy(() => import("modules/Movie/pages/Movie"));
const Ticket = lazy(() => import("modules/Ticket/pages/Ticket"));
const Login = lazy(() => import("modules/Authentication/pages/Login"));
const Register = lazy(() => import("modules/Authentication/pages/Register"));
const MovieList = lazy(() =>
  import("modules/AdminMovie/component/MovieList/index")
);
const AddMovie = lazy(() =>
  import("modules/AdminMovie/component/MovieList/AddMovie/AddMovie")
);
const EditMovie = lazy(() =>
  import("modules/AdminMovie/component/MovieList/EditMovie/EditMovie")
);
const UserList = lazy(() =>
  import("modules/AdminMovie/component/UserList/UserList")
);
const AddUser = lazy(() =>
  import("modules/AdminMovie/component/UserList/AddUser/AddUser")
);
const EditUser = lazy(() =>
  import("modules/AdminMovie/component/UserList/EditUser/EditUser")
);
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
};
const styleImg = {
  width: "250px",
  position: "relative",
  animation: " 0.6s infinite",
};

// dsadasdas

function App() {
  return (

    <Suspense
      fallback={
        <div style={styleLoading}>
          <div>
            <img
              style={styleImg}
              src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
              alt="Cybershop.edu.vn"
            />
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/admin/" element={<AdminLayout />}>
          <Route path="userList" element={<UserList />} />
          <Route path="userList/addnew" element={<AddUser />} />
          <Route path="userList/edit/:id" element={<EditUser />} />
          <Route path="movieList" element={<MovieList />} />
          <Route path="movieList/addnew" element={<AddMovie />} />
          <Route path="movieList/edit/:id" element={<EditMovie />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="movie/:movieId" element={<Movie />} />

          <Route
            path="checkout/:checkoutId"
            element={
              <CheckoutRoute>
                <Ticket path="checkout/:ticketId" />
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
