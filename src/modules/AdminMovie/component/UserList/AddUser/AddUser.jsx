import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUserData } from "modules/AdminMovie/slice/QuanLyUser";

const AddMovie = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      taiKhoan: "",

      hoTen: "",

      email: "",

      maLoaiNguoiDung: "",

      soDT: "",

      matKhau: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    console.log(values);
    try {
      console.log(values);
      await dispatch(addUserData(values));
    } catch (error) {}
  };

  const styleInput = {
    marginBottom: "20px",
    width: "50%",
    paddingTop: "10px",
    paddingButtom: "10px",
  };
  return (
    <form
      className="flex flex-col text-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1>Add User</h1>

      <div>
        <input
          style={styleInput}
          type="text"
          placeholder="Tài khoản"
          {...register("taiKhoan", {
            required: {
              value: true,
              message: "Bạn phải nhập tài để tiếp tục",
            },
            pattern: {
              value: /^[a-z]+$/,
              message: "Tài khoản sai dịnh dạng",
            },
          })}
        />
      </div>
      <div>
        <input
          style={styleInput}
          type="text"
          placeholder="Họ Tên"
          {...register("hoTen", {
            required: {
              value: true,
              message: "Bạn phải nhập tên để tiếp tục",
            },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Họ tên sai dịnh dạng",
            },
          })}
        />
      </div>
      <div>
        <input
          style={styleInput}
          type="text"
          placeholder="Email"
          {...register("email", {
            required: {
              value: true,
              message: "Bạn phải nhập email để tiếp tục",
            },
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email sai dịnh dạng",
            },
          })}
        />
      </div>
      <div>
        <input
          style={styleInput}
          type="text"
          placeholder="Số Điện Thoại"
          {...register("soDT", {
            required: {
              value: true,
              message: "Số điện thoại không được để trống",
            },
            pattern: {
              value: /^[0-9+-]+$/,
              message: "Số điện thoại sai định dạng!",
            },
            minLength: {
              value: 6,
              message: "Quá ngắ",
            },
            maxLength: {
              value: 12,
              message: "Quá dài",
            },
          })}
        />
      </div>
      <div>
        <input
          style={styleInput}
          type="text"
          placeholder="Mật khẩu"
          {...register("matKhau", {
            required: {
              value: true,
              message: "Mật khẩu không được để trống",
            },
          })}
        />
      </div>
      <div>
        <input
          style={styleInput}
          type="text"
          placeholder="Loại người dùng"
          {...register("maLoaiNguoiDung", {
            required: {
              value: true,
              message: "Loại người dùng không được để trống",
            },
          })}
        />
      </div>

      <button className="bg-blue-400 text-white p-2 w-1/2 ml-64">
        Thêm người dùng
      </button>
    </form>
  );
};

export default AddMovie;
