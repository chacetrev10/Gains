import React from 'react';
import {View, ScrollView, Text} from 'react-native';

import {loadLift, getAllLifts} from "../Storage/saveLifts";
import Factory from "../Factory/Factory";
import {HeaderTitle} from "@react-navigation/stack";

class GoalsScreen extends React.Component {
    //lifts;
    liftNames;

    constructor(props) {
        super(props);
        //this.liftNames = ["test1", "test2", "test3"];
        this.liftNames = [];
        this.factory = new Factory(props);
        this.state = {liftNames: []};
    }

    async getAllLiftsFin() {
        let keys;
        if (this.props.route.params.items.lifts != undefined) {
            keys = this.props.route.params.items.lifts;
            console.log(this.props.route.params)
        }else {
            keys = await getAllLifts();
        }

        let liftNames = [];

        for (let key of keys) {
//            let holder = await loadLift(key);
//            const item = holder[key];
//            if (item != undefined) {
//                this.liftNames.push(item);
//            }
            liftNames.push(key);
        }
        //console.log(liftNames);
        return liftNames;
    }


    showNames() {
        //console.log("state.liftNames: " + this.state.liftNames);
        if (this.state.liftNames.length > 0) {
            return <View>
                {this.state.liftNames}
            </View>;

        }
        return;
    }

    componentDidMount() {

        this.getAllLiftsFin().then(r => {
            this.setState({liftNames: r.liftNames});
        });
    }

    render() {
        //this.getAllLiftsFin();
        //console.log(this.state.liftNames);
        return (
            <ScrollView>
                {this.showNames()}
            </ScrollView>

        );

    }
}

export default GoalsScreen;