import * as React from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';


export default function Ex02Screen({navigation}) {
    

    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1,flexDirection: 'column' ,backgroundColor: '#50E3C2' }}></View>
            <View style={{ flex: 2 ,flexDirection: 'column' }}></View>
        </View>
       
    );
}