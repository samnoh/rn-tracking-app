import createDateContext from './createDataContext';
import locationReducer, {
    changeName,
    startRecording,
    stopRecording,
    addLocation
} from '../ducks/location';

export const { Context, Provider } = createDateContext(
    locationReducer,
    { changeName, startRecording, stopRecording, addLocation },
    { name: '', recording: false, locations: [], currentLocation: null }
);
