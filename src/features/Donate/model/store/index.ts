import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockPriviligue } from "@/features/Donate/model/mocks";
import { IDonateModel } from "@/features/Donate/model/store/types";

export enum TabItems {
  SURVIVAL,
  ANARCHY,
  BEDWARS,
}

const initialState: IDonateModel = {
  activeTab: TabItems.SURVIVAL,
  priviligueList: mockPriviligue,
};

export const donateSlice = createSlice({
  name: "donate",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<TabItems>) => {
      state.activeTab = action.payload;
    },
  },
  selectors: {
    selectActiveTab: (state) => state.activeTab,
    selectPriviligueList: (state) => state.priviligueList,
  },
});

export const { setActiveTab } = donateSlice.actions;
export default donateSlice.reducer;

export const { actions: appThemeActions } = donateSlice;
export const { reducer: appThemeReducer } = donateSlice;
