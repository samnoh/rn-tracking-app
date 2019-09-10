import api from '../utils/api';
import { navigate } from '../utils/navigationRef';

// actions
const GET_TRACKS = 'GET_TRACKS';

// action creators
const getTracksAction = data => ({
    type: GET_TRACKS,
    payload: data
});

// thunks
export const getTracks = dispatch => async () => {
    const res = await api.get('/tracks');
    dispatch(getTracksAction(res.data));
};

export const createTrack = dispatch => async (name, locations) => {
    await api.post('/tracks', { name, locations });
    navigate('TrackList');
};

// reducer
const trackReducer = (state, action) => {
    switch (action.type) {
        case GET_TRACKS:
            return action.payload;
        default:
            return state;
    }
};

export default trackReducer;
