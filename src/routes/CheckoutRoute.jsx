import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckoutRoute = ({ children, checkoutId }) => {
 console.log(checkoutId);
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/login" />;
  }


  return children;
};

export default CheckoutRoute;
