import { patenteApi } from "../../../api/patenteApi";
import { setPatentes, startLoadingPatente } from "./patenteSlice";

export const getPatentes = (patente) => {
    return async(dispatch, getState) => {
        dispatch(startLoadingPatente());

        const {data} = await patenteApi.get(`/getDataByPatent?patent=${patente}`);

        dispatch(setPatentes({patentes: data.response}));

    }
}