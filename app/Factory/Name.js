import React from 'react';
import {View, Text, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';
import Field from "./Field";

class  Name extends Field {

    render (){
        const { item } = this.props;
        return (
            <View>
                <Text>This works</Text>
            </View>
        );

    }
}

class NameFactory {
    get type() { return 'name'; }

    create({ item }) {
        return <Name item={item} />;
    }
}

export default NameFactory;