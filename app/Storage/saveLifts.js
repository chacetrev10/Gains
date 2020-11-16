import AsyncStorage from '@react-native-community/async-storage';


export const saveLift = async (lift) => {
    let key = lift[Object.keys(lift)[0]].name;
    if(key != undefined) {
        AsyncStorage.setItem(key, JSON.stringify(lift));
    }
};

const defaultLift = {
    name: '',
    description: '' ,
    pr: ''
};

export const loadLift = async (key) => {
    try {
        let lifts = await AsyncStorage.getItem(key);
        if (lifts === null) { return defaultLift; }

        return JSON.parse(lifts);
    } catch (error) {
        console.log('Error loading settings', error);
    }
};

export const getAllLifts = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        console.log(keys);
        return keys;
    } catch (error) {
        console.error(error)
    }
};

export const removeItemValue= async(key)=> {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch(exception) {
        return false;
    }
};

