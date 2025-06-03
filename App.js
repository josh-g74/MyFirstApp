import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

import { getName } from './utils/storage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const storedName = await getName();
      setUserName(storedName);
      setIsLoading(false);
    }
    loadUser();
  }, []);

  if (isLoading) {
    // Show loading while checking for stored user
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userName ? (
          // User is logged in: show Profile/Home/Details
          <>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </>
        ) : (
          // User NOT logged in: show Login
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
