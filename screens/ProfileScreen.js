import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { getName, deleteName } from '../utils/storage';

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState(null);

  useEffect(() => {
    async function loadName() {
      const storedName = await getName();
      if (storedName) {
        setName(storedName);
      } else {
        navigation.replace('Login');
      }
    }

    loadName();
  }, [navigation]); // <-- added navigation here

  if (!name) {
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
