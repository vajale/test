import { type ReducersMapObject } from "@reduxjs/toolkit";

import donateReducer from "@/features/Donate/model/store";
import { IDonateModel } from "@/features/Donate/model/store/types";

export interface StateSchema {
  donate: IDonateModel;
}

const rootReducer: ReducersMapObject<StateSchema> = {
  donate: donateReducer,
};

export default rootReducer;
