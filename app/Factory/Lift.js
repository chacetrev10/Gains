import React, {Component} from 'react';
import {Keyboard, TextInput, View, TouchableOpacity, StyleSheet, Text} from "react-native";
import {Input} from 'react-native-elements';
import {saveLift, removeItemValue, getAllLifts} from "../Storage/saveLifts";
import SelectMultiple from 'react-native-select-multiple'

class Lift extends Component {
    liftName;
    data = {};
    type;
    goalWeight;
    currentWeightPr;
    lifts;
    items = ['Chest','Shoulders','Legs','Back','Arms','Core'];
    selectedItems;

    constructor(props, {type}) {
        super(props);
        this.type = type;
        this.state = {name: '', description: '', pr: '', muscleGroup: []};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleMuscleGroupChange = this.handleMuscleGroupChange.bind(this);
        this.handlePRChange = this.handlePRChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.selectedItems = muscleGroup;
        let simplifiedGroups=[];
        for(let group of muscleGroup){
            simplifiedGroups.push(group['value']);
        }
        this.setState({muscleGroup : simplifiedGroups});
    }

    handlePRChange(pr) {
        this.setState({pr});
    }

    handleSubmit() {
        if (this.state.name.length > 0) {
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
                <Text>Correlating muscle group(s)</Text>
                <SelectMultiple
                    items={this.items}
                    selectedItems={this.selectedItems}
                    onSelectionsChange={this.handleMuscleGroupChange}/>
                <Input
                    placeholder='Current PR'
                    value={this.state.pr}
                    onChangeText={this.handlePRChange}
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
        borderColor: 'black',
        backgroundColor: 'black',
        padding: 15,
        margin: 5
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
});


export default Lift;
