import React, {Component} from 'react';
import {Keyboard, TextInput, View, TouchableOpacity, StyleSheet, Text} from "react-native";
import {Input} from 'react-native-elements';
import {saveLift, removeItemValue, getAllLifts} from "../Storage/saveLifts"
//import Goals from "../components"
import RNPickerSelect,{ defaultStyles } from 'react-native-picker-select';


class Lift extends Component {
    liftName;
    data = {};
    type;
    goalWeight;
    currentWeightPr;
    lifts;
    items = [
        {label: 'Chest', value: 'Chest'},
        {label: 'Back', value: 'Back'},
        {label: 'Arms', value: 'Arms'},
        {label: 'Shoulders', value: 'Shoulders'},
        {label: 'Legs', value: 'Legs'}];

    selectedItems;

    constructor(props, {type}) {
        super(props);
        this.type = type;
        this.state = {name: '', description: '', pr: '', muscleGroup: '', goal: '',data:{}};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleMuscleGroupChange = this.handleMuscleGroupChange.bind(this);
        this.handlePRChange = this.handlePRChange.bind(this);
        this.handleGoalChange = this.handleGoalChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.observers = [];
        // getAllLifts().then(r => {
        //     console.log(r);
        //     for (let key of r) {
        //         console.log(key);
        //         removeItemValue(key).then(r => {
        //         });
        //     }
        // });


    }

    setData(data) {
        console.log(data);
    }

    addData(sets, reps) {
        this.data[this.getTime()] = [sets, reps];
    }

    handleNameChange(name) {
        this.setState({name: name.toUpperCase()});
    }

    handleDescriptionChange(description) {
        this.setState({description});
    }

    handleMuscleGroupChange(muscleGroup) {
        console.log(muscleGroup);
        this.setState({muscleGroup});
        console.log(this.state.muscleGroup);
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notify(data) {
        if (this.observers.length > 0) {
            this.observers.forEach(observer => observer.update(data));
        }
    }

    handlePRChange(pr) {
        this.setState({pr});
        //this.notify(this.pr);
    }

    handleGoalChange(goal) {
        this.setState({goal});
        //liftGoal = new Goals();
        //this.addObserver(liftGoal);
    }

    handleSubmit() {
        if (this.state.name.length > 0) {
            if (Number(this.state.goal) <= Number(this.state.pr)) {
                alert('Goal Achieved!')
            }
            const name = this.state.name;
            const liftCard = {};
            liftCard[name] = this.state;
            saveLift(liftCard);
        }
    }


    render() {
        return (
            <View>
                <Input style={styles.inputContainer}
                    placeholder='Lift Name'
                    value={this.state.name}
                    onChangeText={this.handleNameChange}
                />
                {this.props.children}
                <Input style={styles.inputContainer}
                    placeholder='Description'
                    value={this.state.description}
                    onChangeText={this.handleDescriptionChange}
                />
                {/*<SelectMultiple*/}
                {/*    items={this.items}*/}
                {/*    selectedItems={this.selectedItems}*/}
                {/*    onSelectionsChange={this.handleMuscleGroupChange}/>*/}
                <RNPickerSelect style={styles.inputContainer}
                    items={this.items}
                    placeholder={{label:'Select main muscle group', value: ''}}
                    style={pickerStyle}
                    onValueChange={this.handleMuscleGroupChange}/>
                <Input style={styles.inputContainer}
                    placeholder='Current PR'
                    value={this.state.pr}
                    onChangeText={this.handlePRChange}
                />
                <Input style={styles.inputContainer}
                    placeholder='Goal Weight'
                    value={this.state.goal}
                    onChangeText={this.handleGoalChange}
                />
                <View style={styles.inputContainer}>
                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress={this.handleSubmit}
                    >
                        <Text style={styles.saveButtonText}>{'Save'}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    saveButton: {
        borderWidth: 1,
        borderColor: '#0B2161',
        borderRadius: 25,
        backgroundColor: '#0B2161',
        padding: 15,
        margin: 5
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600'
    },
    inputContainer: {
        marginTop: 40,
        paddingLeft: 15,
    }
});
const pickerStyle = {
    inputIOS: {
        color: 'black',
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12
    },
    inputAndroid: {
        color: 'black'
    },
    placeholderColor: 'black',
    underline: { borderTopWidth: 0 },
    icon: {
        position: 'absolute',
        backgroundColor: 'transparent',
        borderTopWidth: 5,
        borderTopColor: '#00000099',
        borderRightWidth: 5,
        borderRightColor: 'transparent',
        borderLeftWidth: 5,
        borderLeftColor: 'transparent',
        width: 0,
        height: 0,
        top: 20,
        right: 15,
    },
};


export default Lift;
