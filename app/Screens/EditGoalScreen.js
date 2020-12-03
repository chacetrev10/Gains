import React from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, SafeAreaView} from "react-native";
import {Card} from 'react-native-elements'
import {HeaderTitle} from "@react-navigation/stack";
import {Input} from 'react-native-elements';
import {saveLiftData, saveNewPR, saveNewGoal} from "../Storage/saveLifts";

//Screen to edit the goal of a lift once the previous goal has been surpassed.
//Also acts as subscriber for the observer pattern to alert the user when they've reached a goal.
class EditGoalScreen extends React.Component {

    lift;
    data = [];
    percentComplete;
    isAchieved;
    textColor;

    constructor(props) {
        super(props);
        this.lift = props.route.params.items;

        //keep track of how close user is to goal
        this.percentComplete = ((Number(this.lift.pr) / Number(this.lift.goal)) * 100).toFixed(2);

        //Change color of text if goal is achieved
        if (Number(this.percentComplete) >= 100.00) {
            this.isAchieved = 'Achieved!';
            this.textColor = 'green';
        } else {
            this.isAchieved = 'Not Achieved.';
            this.textColor = 'red';
        }

        this.state = {goal: ''};
        this.handleGoalChange = this.handleGoalChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    //handle input in the New Goal text field
    handleGoalChange(goal) {
        this.setState({goal})
    }

    //Save the new goal when user clicks 'save'
    handleSubmit() {

        if (this.state.goal > this.lift.pr) {
            let newGoal = {
                goalData: this.state.goal,
                name: this.lift.name
            }
            saveNewGoal(newGoal);
        } else {
            alert("New goal must be larger than PR.")
        }

    }

    render() {
        return (
            <View>
                <HeaderTitle>{this.lift.name}</HeaderTitle>
                <HeaderTitle>Description: {this.lift.description}</HeaderTitle>
                <HeaderTitle>PR: {this.lift.pr}</HeaderTitle>
                <HeaderTitle>Goal: {this.lift.goal}</HeaderTitle>
                <HeaderTitle>Percentage Complete: {this.percentComplete}%</HeaderTitle>
                <HeaderTitle style={{color: this.textColor}}>Goal {this.isAchieved}</HeaderTitle>
                <View>
                    <Input required type="number"
                           value={this.state.goal}
                           placeholder="New Goal"
                           onChangeText={this.handleGoalChange}/>
                </View>
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

//observer will alert user if the goal it is subscribed to is achieved
export const alertObserver = function() {
    alert('Goal Achieved!');
};

const renderItem = ({item}) => (
    <Text>{item}</Text>
);

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginTop: 30

    },
    inputWrap: {
        flex: 3,
        borderColor: "#cccccc",
        flexDirection: "row"
    },
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
    cardContainer: {
        overflow: 'hidden',
        backgroundColor: 'white',
        alignItems: 'center',
        borderWidth: 0,
    }
});

export default EditGoalScreen;