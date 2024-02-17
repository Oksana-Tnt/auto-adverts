import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6525798a67cfb1e59ce755a1.mockapi.io";

export const fetchAdverts = createAsyncThunk(
  "advert/fetchAdverts",
  async (page = 1) => {
    const response = await axios.get(`/Adverts?page=${page}&limit=12`);
    return response.data;
  }
);
// export const searchAdverts = createAsyncThunk(
//   "advert/searchAdverts",
//   async (query = "") => {
//     const response = await axios.get(`/Adverts?query=${query}`);
//     return response.data;
//   }
// );
// export const addContacts = createAsyncThunk(
//   'contacts/addContact',
//   async contacts => {
//     const response = await axios.post('/contacts', contacts);
//     return response.data;
//   }
// );

// export const deleteContacts = createAsyncThunk(
//   'contacts/deleteContact',
//   async id => {
//     const response = await axios.delete(`/contacts/${id}`);
//     return response.data;
//   }
// );
