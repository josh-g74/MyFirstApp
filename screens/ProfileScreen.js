// screens/ProfileScreen.js
import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen({ navigation }) {
  const { userName, signOut } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  // When userName changes (or on first mount), hide spinner:
  useEffect(() => {
    if (userName) {
      setLoading(false);
    }
  }, [userName]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Loading profile...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {userName}!</Text>

      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate('Home', {
            userId: 42,
            username: userName,
          })
        }
      />

      <View style={{ marginTop: 20 }}>
        <Button
          title="Log Out"
          onPress={async () => {
            setLoading(true);
            await signOut();
            // Once signOut() runs, AuthContext.userName becomes null,
            // and App.js → Routes() will switch back to the AuthNavigator (Login).
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
