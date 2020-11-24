import React, {Component} from 'react';
import {Keyboard, TextInput, View, TouchableOpacity, StyleSheet, Text} from "react-native";
import {Input} from 'react-native-elements';
import {saveLift, removeItemValue, getAllLifts} from "../Storage/saveLifts";
import SelectMultiple from 'react-native-select-multiple'
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
        this.state = {name: '', description: '', pr: '', muscleGroup: '', goal: ''};
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
        this.setState({name});
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


    getTime() {
        let dateObj = new Date();
        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();
        return year.toString() + month.toString() + day.toString()
    }

    render() {
        return (
            <View>
                <Input
                    placeholder='Lift Name'
                    value={this.state.name}
                    onChangeText={this.handleNameChange}
                />
                {this.props.children}
                <Input
                    placeholder='Description'
                    value={this.state.description}
                    onChangeText={this.handleDescriptionChange}
                />
                <Text>Main muscle group</Text>
                {/*<SelectMultiple*/}
                {/*    items={this.items}*/}
                {/*    selectedItems={this.selectedItems}*/}
                {/*    onSelectionsChange={this.handleMuscleGroupChange}/>*/}
                <RNPickerSelect
                    items={this.items}
                    placeholder={{label:'Select main muscle group', value: ''}}
                    style={styles.inputIOS}
                    onValueChange={this.handleMuscleGroupChange}/>
                <Input
                    placeholder='Current PR'
                    value={this.state.pr}
                    onChangeText={this.handlePRChange}
                />
                <Input
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

const styles = StyleSheet.flatten({
    saveButton: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        padding: 15,
        margin: 5
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    },
    inputIOS: {
        color: 'white',
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
    }
});


export default Lift;
