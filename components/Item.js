import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function Item(props) { 
    return (      
        <View style={{ 
         flex : 1, 
         flexDirection : 'row',
         marginTop : 10 , 
         marginLeft : 10 , 
         }}>
             
            <Image 
            source={{uri: props.image}}
            style={{width: 100, height: 100}} 
            />

            <View style={{ 
                flex : 1, 
                flexDirection : 'col',
                flexWrap: 'wrap', 
                }} > 

                <Text style={{ fontSize :  20, marginLeft : 10 , }}>
                {props.title}</Text>

                <Text style={{fontSize : 15 , marginLeft : 10 ,}}>
                {props.releaseYear}</Text>
                
                
            </View>
        
        </View>      
    ); 
 }
 
 