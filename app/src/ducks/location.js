// actions
const CHANGE_NAME = 'CHANGE_NAME';
const START_RECORDING = 'START_RECORDING';
const STOP_RECORDING = 'STOP_RECORDING';
const ADD_CURRENT_LOCATION = 'ADD_CURRENT_LOCATION';
const ADD_LOCATION = 'ADD_LOCATION';
const RESET_LOCATION = 'RESET_LOCATION';

// action creators
const changeNameAction = name => ({
    type: CHANGE_NAME,
    payload: name
});

const startRecordingAction = () => ({
    type: START_RECORDING
});

const stopRecordingAction = () => ({
    type: STOP_RECORDING
});

const addCurrentLocationAction = location => ({
    type: ADD_CURRENT_LOCATION,
    payload: location
});

const addLocationAction = location => ({
    type: ADD_LOCATION,
    payload: location
});

const resetLocationAction = () => ({
    type: RESET_LOCATION
});

// thunks
export const changeName = dispatch => name => {
    dispatch(changeNameAction(name));
};

export const startRecording = dispatch => () => {
    dispatch(startRecordingAction());
};

export const stopRecording = dispatch => () => {
    dispatch(stopRecordingAction());
};

export const addLocation = dispatch => (location, recording) => {
    dispatch(addCurrentLocationAction(location));
    if (recording) {
        dispatch(addLocationAction(location));
    }
};

export const resetLocation = dispatch => () => {
    dispatch(resetLocationAction());
};

// reducer
const locationReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.payload };
        case START_RECORDING:
            return { ...state, recording: true };
        case STOP_RECORDING:
            return { ...state, recording: false };
        case ADD_CURRENT_LOCATION:
            return { ...state, currentLocation: action.payload };
        case ADD_LOCATION:
            return { ...state, locations: [...state.locations, action.payload] };
        case RESET_LOCATION:
            return { ...state, name: '', locations: [] };
        default:
            return state;
    }
};

export default locationReducer;
