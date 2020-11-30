import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Alert, TouchableOpacity, ScrollView} from 'react-native';
import {saveLift, removeItemValue, getAllLifts, loadLift, saveWorkout} from "../Storage/saveLifts";
import {Input} from "react-native-elements";
import SelectMultiple from "react-native-select-multiple";

class CreateWorkoutScreen extends Component {

    selectedItems = [];


    constructor(props) {
        super(props);
        this.state = {name: '', lifts: [], items: []};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLiftsChange = this.handleLiftsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getAllLiftsFin().then(r => {
            let filtered = r.filter(function (value, index, arr) {
                return value != 'Workouts';
            });
            this.setState({items: filtered});
        });

    }

    async getAllLiftsFin() {
        return await getAllLifts();

    }

    handleNameChange(name) {
        this.setState({name: name.toUpperCase()});
    }

    handleLiftsChange(lifts) {
        this.selectedItems = lifts;
        this.setState({lifts});
    }

    handleSubmit() {
        if (this.state.name.length > 0) {
            const workoutName = this.state.name;
            const workoutCard = {};
            workoutCard[workoutName] = this.state.lifts;
            saveWorkout(workoutCard);

        }
    }


render()
{
    return (
        <View>
            <Input
                placeholder='Workout Name'
                value={this.state.name}
                onChangeText={this.handleNameChange}
            />
            <Text>Lifts to add to workout</Text>
            <SelectMultiple
                style={styles.liftSelect}
                items={this.state.items}
                selectedItems={this.selectedItems}
                onSelectionsChange={this.handleLiftsChange}/>
            <View style={styles.inputContainer}>
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={this.handleSubmit}
                >
                    <Text style={styles.saveButtonText}>{'Save'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
}

const styles = StyleSheet.create({
    saveButton: {
        borderWidth: 1,
        borderColor: '#0B2161',
        backgroundColor: '#0B2161',
        borderRadius: 25,
        padding: 15,
        margin: 5
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600'
    },
    liftSelect: {
        height: '65%'
    }
});

export default CreateWorkoutScreen;