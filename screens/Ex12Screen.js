import * as React from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';


export default function Ex12Screen({navigation}) {
    

    return (
        <View style={{ flex:1 ,flexDirection: 'row' }}>
      <View
        style={{ backgroundColor: '#4A90E2', flex:1 }}></View>
      <View
        style={{ backgroundColor: '#50E3C2', flex:1 }}></View>
        <View
        style={{ backgroundColor: '#9013FE', flex:1 }}></View>
    </View>
       
    );
}