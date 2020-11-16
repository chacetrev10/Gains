import AsyncStorage from '@react-native-community/async-storage';


export const saveLift = async (lift) => {
    if (lift[Object.keys(lift)[0]].muscleGroup !== undefined) {
        let muscleGroups = lift[Object.keys(lift)[0]].muscleGroup;
        for (let group of muscleGroups) {
            group = group['value'];
            let groupList = await AsyncStorage.getItem(group);
            if (groupList == null) {
                groupList = [lift];
            }else {
                groupList = JSON.parse(groupList);
                groupList.push(lift);
            }
            AsyncStorage.setItem(group, JSON.stringify(groupList));
        }
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

