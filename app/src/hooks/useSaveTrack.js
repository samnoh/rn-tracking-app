import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';

const useSaveTrack = () => {
    const { createTrack } = useContext(TrackContext);
    const { state, resetLocation } = useContext(LocationContext);
    const { locations, name } = state;

    const saveTrack = async () => {
        await createTrack(name, locations);
        resetLocation();
    };

    return [saveTrack];
};

export default useSaveTrack;
