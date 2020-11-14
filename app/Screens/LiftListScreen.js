import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {loadLift, getAllLifts} from "../Storage/saveLifts";
import Factory from "../Factory/Factory";


class LiftListScreen extends React.Component {

    lifts;
    liftCards;

    constructor(props) {
        super(props);
        this.getLift = this.getLift.bind(this);
        this.liftCards = [];
        this.factory = new Factory();
        this.state = {
            liftCards: []
        };
    }

    async getLift(key) {
        return await loadLift(key);

    }

    async getAllLiftsTem() {
        return await getAllLifts();
    }

    componentDidMount() {
        this.getAllLiftsTem().then(r => {
            for (let key of r) {
                this.getLift(key).then(lift => {
                        if (lift != undefined) {
                            const item = lift[key];
                            item['type'] = 'liftCard';
                            this.liftCards.push(this.factory.create({item}));
                            this.setState({liftCards: this.liftCards});
                        }
                    }
                );
            }
        });
    }

    render() {
        return (
            <View>
                {this.state.liftCards}
            </View>
        );

    }
}

export default LiftListScreen;