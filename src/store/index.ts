import { configureStore } from "@reduxjs/toolkit";
import detailModalReducer from "features/detail-modal/slice";

export const store = configureStore({
  reducer: {
    detailModal: detailModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
