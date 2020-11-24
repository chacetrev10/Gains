import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {loadLift, getAllLifts} from "../Storage/saveLifts";
import Factory from "../Factory/Factory";
import {HeaderTitle} from "@react-navigation/stack";


class WorkoutListScreen extends React.Component {

    lifts;
    workoutCards = [];

    constructor(props) {
        super(props);
        this.state = {
            workouts: []
        };
        this.factory = new Factory(props);
        this.getAllLiftsFin().then(r => {
            this.setState({workouts: r});
        })
    }


    async getAllLiftsFin() {
        let workouts = await loadLift("Workouts");
        for (let wo of Object.keys(workouts)) {
            let lifts= []
            for(let lift of workouts[wo]){
                lifts.push(lift['value']);
            }
            workouts[wo]['type'] = 'liftCard';
            workouts[wo]['name'] = wo;
            workouts[wo]['goTo'] = 'Lift List';
            workouts[wo]['lifts'] = lifts;
            console.log(workouts[wo]);
            let item = workouts[wo];
            let component = this.factory.create({item});
            this.workoutCards.push(component);
        }
        return this.workoutCards;

    }


    render() {
        return (
            <div>
                <HeaderTitle>Workouts</HeaderTitle>
                {this.state.workouts}
            </div>

        );

    }
}

export default WorkoutListScreen;