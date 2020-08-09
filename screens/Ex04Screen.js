import * as React from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';


export default function Ex04Screen({navigation}) {
    

    return (
  
      <View style={{ flex: 1, flexDirection: 'row' }}>
         <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1,backgroundColor: '#50E3C2' }}></View>
            <View style={{flex: 1, backgroundColor: '#4A90E2'}}></View>
            <View style={{flex: 1, backgroundColor: '#9013FE'}}></View>
            <View style={{ flex: 3 }}></View>
        </View>
        <View style={{ flex: 2, flexDirection: 'column' }}></View>
      </View>
    );
}