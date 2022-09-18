import movieAPI from "apis/movieAPI";
import useRequest from "hooks/useRequest";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addMovieData } from "modules/AdminMovie/slice/QuanlyPhimSlice";

const AddMovie = () => {
  const dispatch = useDispatch();

  const [imgPreview, setImgPreview] = useState("");

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      tenPhim: "",

      biDanh: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    console.log(values);
    try {
      await dispatch(addMovieData(values));

      console.log(values);
    } catch (error) {}
  };
  const handleChangeDangChieu = (event) => {
    const dangChieu = event.target.value;
    if (dangChieu === "flase") {
      return setValue("dangChieu", !dangChieu);
    }

    setValue("dangChieu", !!dangChieu);
  };
  const handleChangeSapChieu = (event) => {
    const sapChieu = event.target.value;
    if (sapChieu === "flase") {
      return setValue("sapChieu", !sapChieu);
    }

    setValue("sapChieu", !!sapChieu);
  };
  const handleChangeHot = (event) => {
    const hot = event.target.value;
    if (hot === "flase") {
      return setValue("hot", !hot);
    }

    setValue("hot", !!hot);
  };

  const handleChangeImage = (evt) => {
    // Đối với input type là file, có sẽ không dùng event.target.value mà thay thể bằng event.target.files
    const file = evt.target.files[0];

    if (!file) return;

    // Lưu file vào field hinhAnh của hook form
    setValue("hinhAnh", file);

    // Xử lý hiển thị hình ảnh ra giao diện
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // bất đồng bộ
    fileReader.onload = (evt) => {
      // Đọc file thành công
      // evt.target.result: string base64
      setImgPreview(evt.target.result);
    };
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
      <h1>Add Movie</h1>

      <div>
        <input
          style={styleInput}
          type="text"
          placeholder="Tên Phim"
          {...register("tenPhim")}
        />
      </div>
      <div>
        <input
          style={styleInput}
          type="text"
          placeholder="Bí Danh"
          {...register("biDanh")}
        />
      </div>

      <div>
        <input
          style={styleInput}
          type="text"
          placeholder="Mô Tả"
          {...register("moTa")}
        />
      </div>
      <div>
        <input
          style={styleInput}
          type="text"
          placeholder="Ngày Khởi Chiếu"
          {...register("ngayKhoiChieu")}
        />
      </div>
      <div>
        <input
          style={styleInput}
          type="text"
          placeholder="Trailer"
          {...register("trailer")}
        />
      </div>
      <div className="mb-5 text-left ml-64">
        <label htmlFor="dangChieu">Đang Chiếu:</label>
        <select
          name="dangChieu"
          id="dangChieu"
          onChange={handleChangeDangChieu}
        >
          <option value="flase">Không</option>
          <option value="true">Có</option>
        </select>
      </div>
      <div className="mb-5 text-left ml-64">
        <label htmlFor="sapChieu">Đang Chiếu:</label>
        <select name="sapChieu" id="sapChieu" onChange={handleChangeSapChieu}>
          <option value="flase">Không</option>
          <option value="true">Có</option>
        </select>
      </div>
      <div className="mb-5 text-left ml-64">
        <label htmlFor="hot">Đang Chiếu:</label>
        <select name="hot" id="hot" onChange={handleChangeHot}>
          <option value="flase">Không</option>
          <option value="true">Có</option>
        </select>
      </div>

      <div>
        <input
          style={styleInput}
          type="file"
          placeholder="Hình Ảnh"
          onChange={handleChangeImage}
        />
      </div>
      {imgPreview && <img src={imgPreview} alt="preview" />}

      <button className="bg-blue-400 text-white p-2 w-1/2 ml-64">
        Thêm Phim
      </button>
    </form>
  );
};

export default AddMovie;
