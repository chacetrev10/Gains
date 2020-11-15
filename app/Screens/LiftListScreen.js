import React from 'react';
import {View, ScrollView} from 'react-native';

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
            liftCards: [],
            actualCards:[]
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
            let currentLift;
            for (let key of r) {
                this.getLift(key).then(lift => {
                        const item = lift[key];
                        if (item != undefined) {
                            item['type'] = 'liftCard';
                            this.liftCards.push(this.factory.create({item}));
                            this.setState({liftCards: this.liftCards});
                        }
                    console.log(this.liftCards);
                    }

                );

            }

        });
    }

    render() {
        return (
            <ScrollView>
                {this.state.liftCards}
            </ScrollView>

        );

    }
}

export default LiftListScreen;