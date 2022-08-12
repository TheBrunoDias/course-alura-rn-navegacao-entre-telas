import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import ProdutorRotas from './ProdutorRotas';

import CoracaoIcon from '../assets/coracao.svg';
import HomeIcon from '../assets/home.svg';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
        }}>
        <Tab.Screen
          name="Home"
          component={ProdutorRotas}
          options={{
            tabBarIcon: ({color}) => <HomeIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Melhores Produtores"
          component={MelhoresProdutoresRotas}
          options={{
            tabBarIcon: ({color}) => <CoracaoIcon color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
