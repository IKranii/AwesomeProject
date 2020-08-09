import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Bmi() {   
    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');
    const [description , setDescription] = useState('0');
    
    console.log("STATE : ", weight, height, bmi, description);

    const compute = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        
        var Description ="";
        if (output<18.5)
            Description ="Underweight";
        else if (output>=18.5 && output<=24.9)
            Description ="Normal";
        else if (output>=25 && output<=29.9)
            Description ="Overweight";
        else if (output>=30 && output<=34.9)
            Description ="Obese";
            else if (output>=40)
            Description ="Extremely obese";
        setBmi(output.toFixed(2));
        setDescription(Description);
    };

    return (
    <View style={{ 
        flex : 1, 
        flexDirection : 'column', 
        justifyContent : 'center', 
        paddingHorizontal : 20 ,
        }}>

        <Text style={{ fontSize : 30 }}>Weight (kgs) : </Text>
        <TextInput 
            placeholder="enter your weight ..."            
            keyboardType="numeric"
            style={{ marginBottom : 20 }}
            value={weight} 
            onChangeText={ (text) => setWeight(text) }
            />

        <Text style={{ fontSize : 30 }}>Height (cm) : </Text>
        <TextInput 
            placeholder="enter your height ..."
            keyboardType="numeric"
            style={{ marginBottom : 20 }}
            value={height}
            onChangeText={ (text) => setHeight(text) }
            />

    <Text style={{ fontSize : 30 }}>BMI :{bmi}</Text>
        <Text style={{ fontSize : 30 }}>{description}</Text>
        <Button title="Calculate" onPress={compute}/>
       
    </View>
    );
}
