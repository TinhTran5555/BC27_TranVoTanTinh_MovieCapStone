import { createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../../apis/movieAPI";

export class ThongTinDatVe {
    maLichChieu =  0;
    danhSachVe = [];
    

}
// export const postDatVe = (thongTinDatVe = new ThongTinDatVe()) => {
//     return async dispatch => {
//         try {
//             const result = await movieAPI.DatVe(thongTinDatVe)
//             console.log(result.data.content);
//         } catch (error) {
//             console.log(error.response?.data);
//         }
//     }
// }
export const postDatVe = createAsyncThunk(
    "tiket/tickets/postDaVe" ,
    async (
        { maLichChieu, danhSachVe  } = ThongTinDatVe,
        {rejectWithValue}
    )   => {
        try {
            const data = await movieAPI.DatVe({ maLichChieu, danhSachVe})
            
            
            return data
        } catch (error) {
            console.log(rejectWithValue(error));
            return rejectWithValue(error);
            
        }
}
)