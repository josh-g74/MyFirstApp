import { useState, useCallback } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { getName, deleteName } from '../utils/storage';
import { useFocusEffect } from '@react-navigation/native';

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadName = async () => {
        setLoading(true);
        const storedName = await getName();

        if (!isActive) return;

        if (storedName) {
          setName(storedName);
        } else {
          setName(null);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        }

        setLoading(false);
      };

      loadName();

      return () => {
        isActive = false;
      };
    }, [navigation])
  );

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
      <Text style={styles.text}>Welcome, {name}!</Text>

      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate('Home', {
            userId: 42,
            username: name,
          })
        }
      />

      <View style={{ marginTop: 20 }}>
        <Button
          title="Log Out"
          onPress={async () => {
            setLoading(true);
            setName(null);
            await deleteName();
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  text: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20,
  },
});
