import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Card} from 'react-native-elements'


class LiftCard extends React.Component {
    goTo;

    constructor(props, {type}) {
        super(props);
        this.type = type;
        this.goTo = this.props.item.goTo;}

    showDescription() {
        if (this.props.item.description.length > 0) {
            return <Text style={{marginBottom: 10}}>
                Description: {this.props.item.description}
            </Text>
                ;
        }
        return;
    }

    showMuscleGroup() {
        if (this.props.item.muscleGroup && this.props.item.muscleGroup.length > 0) {
            return <Text style={{marginBottom: 10}}>
                Muscle Groups: {JSON.stringify(this.props.item.muscleGroup)}
            </Text>;
        }
        return;
    }

    showPr() {
        if (this.props.item.pr.length > 0) {
            return <Text style={{marginBottom: 10}}>
                PR: {this.props.item.pr}
            </Text>;
        }
        return;
    }


    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.props.props.navigation.navigate(this.goTo,{
                        items: this.props.item
                    })}>
                    <Card>
                        <Card.Title>{this.props.item.name}</Card.Title>
                        {/*<Card.Divider/>*/}
                        {/*{this.showDescription()}*/}
                        {/*{this.showMuscleGroup()}*/}
                        {/*{this.showPr()}*/}
                    </Card>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({});
export default LiftCard;