import { useState, useEffect } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

const useLocation = (shouldTrack, callback) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        let subscriber;

        const startWatching = async () => {
            try {
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation, // 6
                        timeInterval: 1000,
                        distanceInterval: 10 // update location every 10 meters or 1 second
                    },
                    callback
                );
            } catch (e) {
                setError(e);
            }
        };

        if (shouldTrack) {
            startWatching();
        } else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };
    }, [shouldTrack, callback]);

    return [error];
};

export default useLocation;
