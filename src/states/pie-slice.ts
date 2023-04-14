import { createSlice } from '@reduxjs/toolkit';
import { getLocalOrders, writeOrders } from '../utils/order';
import { IOrder } from '../interfaces/order';

// const orders = getLocalOrders();

const pieSlice = createSlice({
  name: 'pie',
  initialState: {
    orders: <IOrder[]>getLocalOrders(),
  },
  reducers: {
    addOrder(state, action) {
      writeOrders(action.payload);
      state.orders = getLocalOrders();
    },
  },
});

export const { addOrder } = pieSlice.actions;
export default pieSlice.reducer;
