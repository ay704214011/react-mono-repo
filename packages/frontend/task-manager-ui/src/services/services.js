import axiosClient from "./AxiosConfig";
import { URL_STATIC_CONTENT, URL_FETCH_ITEMS } from '../constants/AppConstants';
import { fetchLabels, fetchLabelsFailure, fetchLabelsSuccess, fetchItems, fetchItemsSuccess, fetchItemsFailure } from "../store/actions";
import content from '../content/content';
const isMocked = true;

const mockedApiCall = (mockedData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(mockedData);
        }, 2000);
    }, (reject) => {
        return reject();
    });
};

export const fetchStaticLabels = async (dispatch) => {
    try {
        dispatch(fetchLabels());
        let labels = {};
        if (isMocked) {
           labels = await mockedApiCall(content);
        } else {
           labels = await axiosClient.get(URL_STATIC_CONTENT);
        }
        dispatch(fetchLabelsSuccess(labels));
    } catch (e) {
        dispatch(fetchLabelsFailure());
    }
};

export const fetchItemList = async (dispatch) => {
    try {
        dispatch(fetchItems());
        const { data } = await axiosClient.get(URL_FETCH_ITEMS);
        console.log('data ', data);
        dispatch(fetchItemsSuccess(data));
    } catch (e) {
        dispatch(fetchItemsFailure());
    }
};