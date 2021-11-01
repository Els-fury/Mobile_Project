import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splash_start from './screens/splash_start';
import login from './screens/login';
import home from './screens/home';
import signup from './screens/signup';
import productdata from './screens/productdata';
import productpage from './screens/productpage';
import payment from './screens/payment';

const Stack = createNativeStackNavigator (); 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={splash_start} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Signup" component={signup} />
        <Stack.Screen name="ProductData" component={productdata} />
        <Stack.Screen name="ProductPage" component={productpage} />
        <Stack.Screen name="Payment" component={payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
