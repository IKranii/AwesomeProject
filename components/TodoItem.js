import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TodoItem(props) {    
    return (     
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal : 25,
                paddingVertical : 10,
            }}>
            <TouchableOpacity  
                onPress={()=>props.onCheck(props.item._id) }
                style={{  flex : 2 }}>
                <Ionicons name={ props.item.completed ? "md-checkbox" : "md-square-outline" } />                               
            </TouchableOpacity>
            <View style={{ flex: 12 }}>                                  
                <TextInput 
                    value={props.item.title} 
                    placeholder="What's in your mind? "
                    onChangeText={(new_title) => props.onUpdate(new_title, props.item._id) }  />                                  
            </View>
            <TouchableOpacity  style={{  flex : 1 }}
                onPress={()=>props.onDelete(props.item._id) }>
                <Ionicons name="md-trash" size={23} />
            </TouchableOpacity>
        </View>             
    );
}
