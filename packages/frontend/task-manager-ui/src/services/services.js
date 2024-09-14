import axiosClient from "./AxiosConfig";
import { URL_STATIC_CONTENT } from '../constants/AppConstants';
import { fetchLabels, fetchLabelsFailure, fetchLabelsSuccess } from "../store/actions";
import content from '../content/content';

export const fetchStaticLabels = async (dispatch) => {
    try {
        dispatch(fetchLabels);
        const labels = await axiosClient.get(URL_STATIC_CONTENT);
        dispatch(fetchLabelsSuccess(labels));
    } catch (e) {
        console.log('content ', content)
        dispatch(fetchLabelsSuccess(content));
    }
};