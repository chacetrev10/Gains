import AsyncStorage from '@react-native-community/async-storage';


export const saveLift = async (lift) => {
    let key = lift[Object.keys(lift)[0]].name;
    if(key != undefined) {
        AsyncStorage.setItem(key, JSON.stringify(lift));
    }
};


export const loadLift = async (key) => {
    try {
        let lifts = await AsyncStorage.getItem(key);
        if (lifts === null) { return null; }
        return JSON.parse(lifts);
    } catch (error) {
        console.log('Error loading settings', error);
    }
};

export const getAllLifts = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
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

export const saveWorkout = async (workout) => {
    let key = Object.keys(workout)[0]
    if(key != undefined) {
        let currentWorkouts = await AsyncStorage.getItem("Workouts");
        if(currentWorkouts == null){
            currentWorkouts = {}
        }else{
            currentWorkouts = JSON.parse(currentWorkouts);
        }
        console.log(currentWorkouts);
        currentWorkouts[key] = workout[key]
        AsyncStorage.setItem("Workouts", JSON.stringify(currentWorkouts));

    }
};

