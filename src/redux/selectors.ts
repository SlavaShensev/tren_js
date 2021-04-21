import {IGlobalState} from "./state";


interface IRootState extends IGlobalState {
}

export const selectCurrencies = (state: IRootState) => state.currency