import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = 'LIFTS';

export const saveLift = (lift) => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lift));
}

const defaultLift = {
    name: '',
    description: '' ,
    pr: ''
};

export const loadLift = async () => {
    try {
        let lifts = await AsyncStorage.getItem(STORAGE_KEY);

        if (lifts === null) { return defaultLift; }

        return JSON.parse(lifts);
    } catch (error) {
        console.log('Error loading settings', error);
    }
}

