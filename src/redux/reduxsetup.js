import { types } from "./actions";

const loadlist = () => {
    return function (dispatch) {
        return fetch('https://api.cdnjs.com/libraries')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: "LOADLIST", payload: responseJson.results })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

const filter = (data) => {
    return { type: types.FILTER, payload: data };
}

const loaddetails = (data) => {
    return function (dispatch) {
        return fetch(`https://api.cdnjs.com/libraries/${data.name}`)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: "LOADDETAILS", payload: responseJson })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

const searchtrends = (data) => {
    return function (dispatch) {
        return fetch(`/trends?searchTerm=${data.searchTerm}`)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: "SEARCHTRENDS", payload: responseJson.default })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

const searchrelatedQueries = (data) => {
    return function (dispatch) {
        return fetch(`/relatedQueries?searchTerm=${data.searchTerm}`)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: "SEARCHRELATEDQUERIES", payload: responseJson.default })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

const setAnalyticsString = (data) => {
    return function (dispatch) {
        const params = { searchTerm: data };
        dispatch({ type: "SETANALYTICSSTRING", payload: data })        
    }
}


const searchAnalyticsString = (data) => {
    return function (dispatch) {
        const params = { searchTerm: data };
        dispatch({ type: "SETANALYTICSSTRING", payload: data })
        dispatch(actionCreators.searchtrends(params));
        dispatch(actionCreators.searchrelatedQueries(params));
    }
}

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
    loadlist: loadlist,
    filter: filter,
    loaddetails: loaddetails,
    searchtrends: searchtrends,
    searchrelatedQueries: searchrelatedQueries,
    setAnalyticsString: setAnalyticsString,
    searchAnalyticsString: searchAnalyticsString
};
