import React, { Component } from 'react';
import {Keyboard, TextInput, View, Button, TouchableOpacity, StyleSheet, Text} from "react-native";
import { Input } from 'react-native-elements';


class Lift extends Component {
    liftName ;
    data= {};
    type;
    goalWeight;
    currentWeightPr;

    constructor(props,{ type }) {
        super(props);
        this.type = type;
        this.state = { name: '' }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.state = { description: '' }
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.state = { pr: '' }
        this.handlePRChange = this.handlePRChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setData(data){
        console.log(data);
    }
    addData(sets,reps){
        this.data[this.getTime()] = [sets , reps];
    }

    handleNameChange(name) {
        this.setState({ name });
    }

    handleDescriptionChange(desc) {
        this.setState({ desc });
    }

    handlePRChange(pr) {
        this.setState({ pr });
    }

    handleSubmit() {
       console.log(this.state);
    }



    getTime(){
        let dateObj = new Date();
        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();
        return year.toString()+month.toString()+day.toString()
    }

    render(){
        return(
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
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 15,
        margin: 5
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
});


class LiftFactory {
    get type() { return 'lift'; }

    create({ item }) {
        return <Lift key = {item} item={item} />;
    }
}

export default LiftFactory;