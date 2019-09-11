import createDataContext from './createDataContext';
import trackReducer, { getTracks, createTrack, deleteTrack } from '../ducks/track';

export const { Provider, Context } = createDataContext(
    trackReducer,
    { getTracks, createTrack, deleteTrack },
    []
);
