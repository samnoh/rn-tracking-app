import createDataContext from './createDataContext';
import trackReducer, { getTracks, createTrack } from '../ducks/track';

export const { Provider, Context } = createDataContext(
    trackReducer,
    { getTracks, createTrack },
    []
);
