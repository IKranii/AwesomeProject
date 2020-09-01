import * as React from 'react';
import { View, Text, Button , Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MidtermFirstScreen from '../screens/MidtermFirstScreen';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function MidtermTab() {

    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch(route.name){
                    case "FlashScreen" :
                        iconName = 'md-flash';
                        break;
                    case "FlameScreen" : 
                        iconName = 'md-flame';
                        break;
                    case "LeafScreen" : 
                        iconName = 'md-leaf';
                        break;       
                }
                
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}

        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
        >
        
        <Tab.Screen 
            name="FlashScreen" 
            component={Page1} 
            options={{  title: 'Midterm Home'  }} 
            />                
        <Tab.Screen 
           name="FlexScreen" 
           component={MidtermFirstScreen} 
           options={{  title: 'Midterm First Screen'  }}  
            
            />
        
    </Tab.Navigator>        
    );
}
    function Page1(){
    return (
        <View style={{ flex: 1, alignItems : 'center'  }}>
            
            <Text style={{ fontSize : 30, paddingTop : 20 ,alignItems :'center'}}>React Native Midterm</Text>                
        </View>
    );
}

  

   