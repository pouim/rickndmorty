import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "store";
import { useCallback } from "react";

export interface DetailModalState {
  isOpen: boolean;
  characterId: number | null;
}

const initialState: DetailModalState = {
  isOpen: false,
  characterId: null,
};

export const detailModalSlice = createSlice({
  name: "detailModal",
  initialState,
  reducers: {
    onOpen: (state, action: PayloadAction<number>) => {
      state.isOpen = true;
      state.characterId = action.payload;
    },
    onClose: (state) => {
      state.isOpen = false;
      state.characterId = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onOpen, onClose } = detailModalSlice.actions;

export default detailModalSlice.reducer;

export const useDetailModalReducer = () => {
  return useSelector((state: RootState) => state.detailModal);
};

/**
 * @function useOpenDetailModal
 * @param { number } characterId
 * @returns { CallableFunction }
 */
export const useOpenDetailModal = () => {
  const dispatch = useDispatch();
  return useCallback(
    (characterId: number) => {
      dispatch(onOpen(characterId));
    },
    [dispatch]
  );
};

/**
 * @function useCloseDetailModal
 * @returns { CallableFunction }
 */
export const useCloseDetailModal = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(onClose());
  }, [dispatch]);
};
