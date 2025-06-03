// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const { userId, username } = route.params || {};
  const displayName = username || 'Guest';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello, {displayName}! Welcome to the Home Screen
      </Text>

      {userId != null && (
        <Text style={styles.subtext}>Your User ID is: {userId}</Text>
      )}

      <View style={{ height: 20 }} />

      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            userId: userId || 0,
            username: displayName.toLowerCase(),
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    color: 'gray',
  },
});
