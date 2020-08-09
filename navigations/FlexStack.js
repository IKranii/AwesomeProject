import * as React from 'react';

import BmiScreen from '../screens/BmiScreen';
import NetworkScreen from '../screens/NetworkScreen';
import HomeScreen from '../screens/HomeScreen';
import FlexScreen from '../screens/FlexScreen';
import Ex01Screen from '../screens/Ex01Screen';
import Ex02Screen from '../screens/Ex02Screen';
import Ex03Screen from '../screens/Ex03Screen';
import Ex04Screen from '../screens/Ex04Screen';
import Ex05Screen from '../screens/Ex05Screen';
import Ex06Screen from '../screens/Ex06Screen';
import Ex07Screen from '../screens/Ex07Screen';
import Ex08Screen from '../screens/Ex08Screen';
import Ex09Screen from '../screens/Ex09Screen';
import Ex10Screen from '../screens/Ex10Screen';
import Ex11Screen from '../screens/Ex11Screen';
import Ex12Screen from '../screens/Ex12Screen';
import ExSpecialScreen from '../screens/ExSpecialScreen';


import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function FlexStack() {
    return (
        <Stack.Navigator initialRouteName="FlexScreen">
        <Stack.Screen 
            name="FlexScreen" 
            component={FlexScreen} 
            options={{  title: 'Flex Title'  }} 
            />
        <Stack.Screen 
            name="Ex01Screen" 
            component={Ex01Screen} 
            options={{  title: 'Ex01'  }} 
            />
        <Stack.Screen 
            name="Ex02Screen" 
            component={Ex02Screen} 
            options={{  title: 'Ex02'  }} 
            />
        <Stack.Screen 
            name="Ex03Screen" 
            component={Ex03Screen} 
            options={{  title: 'Ex03'  }} 
            />
        <Stack.Screen 
            name="Ex04Screen" 
            component={Ex04Screen} 
            options={{  title: 'Ex04'  }} 
            />
            <Stack.Screen 
            name="Ex05Screen" 
            component={Ex05Screen} 
            options={{  title: 'Ex05'  }} 
            />
            <Stack.Screen 
            name="Ex06Screen" 
            component={Ex06Screen} 
            options={{  title: 'Ex06'  }} 
            />
            <Stack.Screen 
            name="Ex07Screen" 
            component={Ex07Screen} 
            options={{  title: 'Ex07'  }} 
            />
            <Stack.Screen 
            name="Ex08Screen" 
            component={Ex08Screen} 
            options={{  title: 'Ex08'  }} 
            />
            <Stack.Screen 
            name="Ex09Screen" 
            component={Ex09Screen} 
            options={{  title: 'Ex09'  }} 
            />
            <Stack.Screen 
            name="Ex10Screen" 
            component={Ex10Screen} 
            options={{  title: 'Ex10'  }} 
            />
            <Stack.Screen 
            name="Ex11Screen" 
            component={Ex11Screen} 
            options={{  title: 'Ex11'  }} 
            />
            <Stack.Screen 
            name="Ex12Screen" 
            component={Ex12Screen} 
            options={{  title: 'Ex12'  }} 
            />
            <Stack.Screen 
            name="ExSpecialScreen" 
            component={ExSpecialScreen} 
            options={{  title: 'ExSpecialScreen'  }} 
            />
        </Stack.Navigator>
    );

}
