import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome/'
import SignIn from '../pages/SignIn/'
import Telacad from '../pages/Telacad/'


import TelaInicialCli from '../pages/TelaInicialCli'






const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
             
            <Stack.Screen
            name = "Welcome"
            component={Welcome}
            options={{ headerShown: false}}
            />
            
             <Stack.Screen
            name = "SignIn"
            component={SignIn}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name = "Telacad"
            component={Telacad}
            options={{ headerShown: false}}
            />
           
           
            <Stack.Screen
            name = "TelaInicialCli"
            component={TelaInicialCli}
            options={{ headerShown: false}}
            />
               
           
        
        </Stack.Navigator>
    )
}