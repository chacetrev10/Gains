import AsyncStorage from '@react-native-community/async-storage';

//Persistent storage class
//https://whatdidilearn.info/2018/11/25/local-data-persistence-in-react-native-using-asyncstorage.html
//Acts as a mediator pattern as all communications between objects are to or from this class

//stores a new individual lift
export const saveLift = async (lift) => {
    let key = lift[Object.keys(lift)[0]].name;
    if(key != undefined) {
        AsyncStorage.setItem(key, JSON.stringify(lift));
    }
};

//stores new data in existing object
export const saveLiftData = async (data) => {
    let name = data.name;
    let date = data.date;
    console.log(data);
    delete data['name'];
    delete data['date'];
    let lift = await AsyncStorage.getItem(name);
    lift = JSON.parse(lift);
    let liftPerfs = lift[name]['data'];
    liftPerfs[date] = data.stats;
    AsyncStorage.setItem(name, JSON.stringify(lift));

};

//save a new PR after inputting new performance
export const saveNewPR = async (newPR) => {
    let name = newPR.name;
    delete newPR['name'];
    let lift = await AsyncStorage.getItem(name);
    lift = JSON.parse(lift);
    lift[name]['pr'] = newPR.prData;
    AsyncStorage.setItem(name, JSON.stringify(lift));

    let lift2 = await AsyncStorage.getItem(name);
    lift2 = JSON.parse(lift2);
    AsyncStorage.setItem(name, JSON.stringify(lift2));
};

//loads items given a key
export const loadLift = async (key) => {
    try {
        let lifts = await AsyncStorage.getItem(key);
        if (lifts === null) { return null; }
        return JSON.parse(lifts);
    } catch (error) {
        console.log('Error loading settings', error);
    }
};

//gets all stored keys
export const getAllLifts = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        return keys;
    } catch (error) {
        console.error(error)
    }
};

//removes any item from db
export const removeItemValue= async(key)=> {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch(exception) {
        return false;
    }
};

//stores workout objects
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

