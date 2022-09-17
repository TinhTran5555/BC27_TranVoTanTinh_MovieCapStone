import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = (children) => {
 
  const { user } = useSelector((state) => state.auth);
 console.log(user);
  // Chưa đăng nhập, điều hướng user về trang login
  if (!localStorage.getItem(user)) {
    alert("Bạn không được truy cập vào mục này của Web")
    return <Navigate to="/" />;
  }
  if (user.maLoaiNguoiDung === "QuanTri") {
    alert("Bạn không được truy cập vào mục này của Web")
    return <Navigate to="/" />;
  }

  alert("Bạn không được truy cập vào mục này của Web")
  return  children;
};

export default AdminRoute;
