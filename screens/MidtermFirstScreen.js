import * as React from 'react';
import { View, Text,Button,TextInput } from 'react-native';



export default function MidtermFirstScreen({navigation}) {  
   
    return (
        <View style={{ flex: 1, flexDirection: 'column', alignSelf :'stretch' }}>
            
            <View style={{ flex: 1,backgroundColor: '#50E3C2' }}>
                <Text style={{ fontSize : 30 ,alignSelf: 'flex-end',marginRight : 20 }}> ... </Text>
                <Text style={{ fontSize : 30 ,alignSelf: 'flex-end',marginRight : 20 }}> ... Characters </Text>
            </View>
            
            <View style={{ flex: 5 , justifyContent: 'center' }}>
                
                <Text style={{ fontSize : 30 }}> Your Name  </Text>
                <TextInput  
                            placeholder="enter your Name ..."            
                            
                />
                <Button  
                            onPress={() => navigation.navigate('')}
                            title="Save"
                            color=""
                />
            </View>
            <View>

            </View>

        </View>
    );
}
