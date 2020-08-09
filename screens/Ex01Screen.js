import * as React from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';


export default function Ex01Screen({navigation}) {
    

    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row' , backgroundColor: '#50E3C2' }}></View>
            <View style={{ flex: 4, flexDirection: 'row' }}></View> 
        </View>
    );
}