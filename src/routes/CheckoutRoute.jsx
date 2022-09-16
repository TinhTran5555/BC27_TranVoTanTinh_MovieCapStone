import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckoutRoute = ({ children, checkoutId }) => {
 console.log(checkoutId);
  const { user } = useSelector((state) => state.auth);

  // Chưa đăng nhập, điều hướng user về trang login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // đã đăng nhập
  return children;
};

export default CheckoutRoute;
