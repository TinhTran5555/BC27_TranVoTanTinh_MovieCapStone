import { Button, Form, Input, notification } from "antd";
// import authAPI from "apis/authAPI";
// import useRequest from "hooks/useRequest";
import { useForm, Controller } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../slices/authSlice";

const Login = () => {
  const {
    handleSubmit,
    // Sử dụng kết hợp với Controller thay thế cho register đối với các trường hợp component không hỗ trợ ref
    control,
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onTouched",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  const styleLogin = {
    width: "600px",
    height: "fit-content",
    zIndex: "1000",
    position: "relative",
    borderRadius: "6px",
    backgroundImage:
      "linear-gradient(to bottom,rgb(255 255 255 / 90%),rgba(64, 108, 106,.9))",
  };
  const styleContent = {
    padding: "60px 32px 30px",
    color: "text-white",
  };
  const styleImg = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "13px",
  };
  const styleButton = {
    top: "0",
    right: "0",
    border: "2px solid white",
    position: "absolute",
    transform: "translate(50%,-50%)",
    transition: "all .2s",
    color: "white",
    padding: "12px",
    overflow: "visible",
    fontSize: "1.5rem",
    textAlign: "center",
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: "50%",
    
  }

  const onSubmit = async (values) => {
    try {
      // chờ cho action login thành công
      await dispatch(login(values)).unwrap();
      // Chuyển user về trang home
      navigate("/");
      notification.success({
        message: "Đăng nhập thành công",
      });
    } catch (error) {
      notification.error({
        message: "Đăng nhập thất bại",
        description: error,
      });
    }
  };

  // Đã đăng nhập
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div  style={styleLogin}>
      <div style={styleContent}>
        <div className="container">
          <img
            style={styleImg}
            src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
            alt="Cybershop.edu.vn"
          />
          <h1 className="text-center mb-7">Đăng nhập</h1>
        </div>
        <div>
          <Form
            className="ml-20 mr-20 text-center"
            onFinish={handleSubmit(onSubmit)}
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 8 }}
          >
            <Controller
              name="taiKhoan"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Tài khoản không được để trống",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  label="Tài khoản"
                  validateStatus={error ? "error" : ""}
                  help={error?.message}
                >
                  <Input type="text" {...field} />
                </Form.Item>
              )}
            />

            <Controller
              name="matKhau"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Mật khẩu không được để trống",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  label="Mật khẩu"
                  validateStatus={error ? "error" : ""}
                  help={error?.message}
                >
                  <Input type="password" {...field} />
                </Form.Item>
              )}
            />

            <Form.Item wrapperCol={{ offset: 2 }}>
              <Button className="border p-2 pb-3.5 bg-slate-100 font-bold"
                
                htmlType="submit"
                disabled={isLoading}
                loading={isLoading}
              >
                Đăng Nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <button onClick={()=>  navigate("/")} style={styleButton}>X</button>
    </div>
  );
};

export default Login;
