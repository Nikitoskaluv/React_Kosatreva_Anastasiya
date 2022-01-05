export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const SET_DATA = "SET_DATA";


export const setLoading = (status) => ({
    type: SET_LOADING,
    payload: status
});

export const setError = (status) => ({
    type: SET_ERROR,
    payload: status
});

export const setData = (news) => ({
    type: SET_DATA,
    payload: news
});

// const NEWS_API = "https://newsapi.org/v2/everything?q=Apple&from=2022-01-05&sortBy=popularity&apiKey=3a7ca13a48de48b2";

const NEWS_API = "https://newsapi.org/v2/everything?q=Apple&from=2022-01-05&sortBy=popularity&apiKey=3a7ca13a48de48b2b23de95a8fd48bb1";


export const getNewsThunk = async (dispatch) => {

    dispatch(setLoading(true));
    dispatch(setError(false));
    dispatch(setData([]));

    try {
        const response = await fetch(NEWS_API);

        if (!response.ok) {
            throw Error("Error");
        }

        const result = await response.json();
        dispatch(setData(result));
    } catch (e) {
        console.log(e);
        dispatch(setError(true));
    }

    dispatch(setLoading(false));
}
