import React, {useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import InvestorMainScreen from './InvestorMainScreen';
import Logout from './Logout';
import UpdateProfileRequest from './UpdateProfileRequest';
import MyInvestment from './MyInvestment';

//Screen names
const mainName = "Home";
const logoutName = "Logout";
const updateName = "Update Profile";
const investment = "My Investment";

const Tab = createBottomTabNavigator();

function InvestorHome({route,navigation}) {
  const myEmail=route.params.myEmail; 
  return (
    // <NavigationContainer>
      <Tab.Navigator
        initialRouteName={mainName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === mainName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === logoutName) {
              iconName = focused ? 'log-out' : 'log-out-outline';

            } else if (rn === updateName) {
              iconName = focused ? 'person' : 'person-outline';
            } else if (rn === investment) {
              iconName = focused ? 'basket' : 'basket-outline';
            }
           

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#f9b347',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={mainName} component={InvestorMainScreen}  options={{headerShown: false}} initialParams={{myEmail:myEmail}} />
        <Tab.Screen name={investment} component={MyInvestment} initialParams={{myEmail:myEmail}}/>
        
        <Tab.Screen name={updateName} component={UpdateProfileRequest} initialParams={{myEmail:myEmail,type:'investor'}} />
        <Tab.Screen name={logoutName} component={Logout} />
     
      </Tab.Navigator>
    /* </NavigationContainer> */
  );
}



export default InvestorHome;