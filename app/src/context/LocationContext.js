import createDateContext from './createDataContext';
import locationReducer, {
    changeName,
    startRecording,
    stopRecording,
    addLocation,
    resetLocation
} from '../ducks/location';

export const { Context, Provider } = createDateContext(
    locationReducer,
    { changeName, startRecording, stopRecording, addLocation, resetLocation },
    { name: '', recording: false, locations: [], currentLocation: null }
);
