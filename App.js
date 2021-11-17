import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splash_start from './screens/splash_start';
import login from './screens/login';
import home from './screens/home';
import signup from './screens/signup';
import productdata from './screens/productdata';
import productpage1 from './screens/productpage1';
import productpage2 from './screens/productpage2';
import productpage3 from './screens/productpage3';
import productpage4 from './screens/productpage4';
import productpage5 from './screens/productpage5';
import productpage6 from './screens/productpage6';
import productpage7 from './screens/productpage7';
import productpage8 from './screens/productpage8';
import productpage9 from './screens/productpage9';
import productpage10 from './screens/productpage10';
import productpage11 from './screens/productpage11';
import productpage12 from './screens/productpage12';
import payment from './screens/payment';
import cart from './screens/cart';

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
        <Stack.Screen name="productpage1" component={productpage1} />
        <Stack.Screen name="productpage2" component={productpage2} />
        <Stack.Screen name="productpage3" component={productpage3} />
        <Stack.Screen name="productpage4" component={productpage4} />
        <Stack.Screen name="productpage5" component={productpage5} />
        <Stack.Screen name="productpage6" component={productpage6} />
        <Stack.Screen name="productpage7" component={productpage7} />
        <Stack.Screen name="productpage8" component={productpage8} />
        <Stack.Screen name="productpage9" component={productpage9} />
        <Stack.Screen name="productpage10" component={productpage10} />
        <Stack.Screen name="productpage11" component={productpage11} />
        <Stack.Screen name="productpage12" component={productpage12} />
        <Stack.Screen name="cart" component={cart} />
        <Stack.Screen name="Payment" component={payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
