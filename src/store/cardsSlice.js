import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const cardsFetch = createAsyncThunk(
  "cards/cardsFetch",
  async function () {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=1`);
      const axiosData = res.data.data;
      console.log(axiosData);
      return axiosData;
    } catch (error) {
      console.log("Ошибка");
    }
  }
);



const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [cardsFetch.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [cardsFetch.fulfilled]: (state, action) => {
      state.status = "result";
      state.cards = action.payload;
      console.log('state.cards 1', state.cards);
    },
    [cardsFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.cards = action.payload;
    },
  },
  reducers: {
    handlClickMore(state, action) {
      console.log("click");
      const clickMore = async ()=> {
        try {
          const res = await axios.get(`https://reqres.in/api/users?page=2`);
          const axiosDataMore = res.data.data;
          console.log(axiosDataMore);
          console.log('state.cards', state.cards);
          // console.log("новый большой массив", state.cards.concat(axiosDataMore))
        } catch (error) {
          console.log("Ошибка");
        }
      };
      clickMore()
    },
  },
});

export const { handlClickMore } = cardsSlice.actions;

export default cardsSlice.reducer;
