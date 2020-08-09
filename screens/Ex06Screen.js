import * as React from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';


export default function Ex06Screen({navigation}) {
    

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent:'center', alignItems:'center' }}>
      <View
        style={{ backgroundColor: '#50E3C2', width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: '#4A90E2', width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: '#9013FE', width: 100, height: 100 }}></View>
    </View>
       
    );
}