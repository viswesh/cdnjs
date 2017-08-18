import { combineReducers } from 'redux';
import { types } from "../actions";
import trends from '../../data/trendsSample';

// Initial state of the list store
const initialStateList = {
    list: [],
    filterstring: "",
    filteredlist: [],
    isLoading: true
}

// Initial state of the details store
const initialStateDetails = {
    info: {},
    isLoading: true
}

// Initial state of the analytics store
const initialStateAnalytics = {
    info: {
        trends: {},
        relatedQueries: {}
    },
    filterstring: "",
    isLoading: true
}

// Function to handle actions and update the state of the store.
export const listreducer = (state = initialStateList, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.LOADLIST: {
            return {
                ...state,
                list: payload,
                isLoading: false
            };
        }
        case types.FILTER: {
            return {
                ...state,
                filterstring: payload.trim(),
                filteredlist: state.list.filter((item) => {
                    return String(item.name).includes(payload);
                })
            }
        }
        default:
            return state;

    }
};

export const detailsreducer = (state = initialStateDetails, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.LOADDETAILS: {
            return {
                ...state,
                info: payload,
                isLoading: false
            }
        }
        default:
            return state;

    }
};

export const analyticsreducer = (state = initialStateAnalytics, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.SEARCHTRENDS: {                   
            return {
                ...state,
                info: {                    
                    trends: payload,
                    relatedQueries: state.info.relatedQueries
                },
                isLoading: false
            }
        }
        case types.SEARCHRELATEDQUERIES: {                   
            return {
                ...state,
                info: {
                    trends: state.info.trends,
                    relatedQueries: payload
                },
                isLoading: false
            }
        }
        case types.SETANALYTICSSTRING: {
            return {
                ...state,
                filterstring: payload,
                isLoading: false
            }
        }
        default:
            return state;

    }
};

export default combineReducers({
    listreducer,
    detailsreducer,
    analyticsreducer
})