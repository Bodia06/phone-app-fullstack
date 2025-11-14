import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const PHONES_SLICE_NAME = 'phones';

const initialState = {
  phones: [],
  isFetching: false,
  error: null,
};

export const getPhonesThunc = createAsyncThunk(
  `${PHONES_SLICE_NAME}/get/phones`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.getPhones();

      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const createPhoneThunc = createAsyncThunk(
  `${PHONES_SLICE_NAME}/create/phone`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.createPhones(payload);
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const deletePhoneThunc = createAsyncThunk(
  `${PHONES_SLICE_NAME}/delete/phone`,
  async (id, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.deletePhones(id);
      return data.id;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

const phoneSlices = createSlice({
  name: PHONES_SLICE_NAME,
  initialState,
  extraReducers: builder => {
    builder.addCase(getPhonesThunc.pending, state => {
      (state.isFetching = true), (state.error = null);
    });
    builder.addCase(getPhonesThunc.fulfilled, (state, { payload }) => {
      (state.phones = [...payload]), (state.isFetching = false);
    });
    builder.addCase(getPhonesThunc.rejected, (state, { payload }) => {
      (state.isFetching = false), (state.error = payload);
    });
    builder.addCase(createPhoneThunc.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(createPhoneThunc.fulfilled, (state, { payload }) => {
      state.phones.push(payload);
      state.isFetching = false;
    });
    builder.addCase(createPhoneThunc.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });
    builder.addCase(deletePhoneThunc.pending, state => {
      (state.isFetching = true), (state.error = null);
    });
    builder.addCase(deletePhoneThunc.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.phones = state.phones.filter(
        p => p.id.toString() !== payload.toString()
      );
    });
    builder.addCase(deletePhoneThunc.rejected, (state, { payload }) => {
      (state.isFetching = false), (state.error = payload);
    });
  },
});

const { reducer } = phoneSlices;

export default reducer;
