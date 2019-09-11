import api from '../utils/api';
import { navigate } from '../utils/navigationRef';

// actions
const GET_TRACKS = 'GET_TRACKS';
const DELETE_TRACK = 'DELETE_TRACK';

// action creators
const getTracksAction = data => ({
    type: GET_TRACKS,
    payload: data
});

const deleteTrackAction = id => ({
    type: DELETE_TRACK,
    payload: id
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

export const deleteTrack = dispatch => async id => {
    await api.delete(`/tracks/${id}`);
    dispatch(deleteTrackAction(id));
};

// reducer
const trackReducer = (state, action) => {
    switch (action.type) {
        case GET_TRACKS:
            return action.payload;
        case DELETE_TRACK:
            return [...state.filter(item => item._id !== action.payload)];
        default:
            return state;
    }
};

export default trackReducer;
