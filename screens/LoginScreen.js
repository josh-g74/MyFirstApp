import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { saveName } from '../utils/storage';

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState('');

  const handleLogin = async () => {
    if (name.trim()) {
      await saveName(name);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Profile', params: { name } }],
      });
    } else {
      alert('Please enter your name');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Continue" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
  },
  heading: {
    fontSize: 24, marginBottom: 20,
  },
  input: {
    width: '100%', borderWidth: 1, borderColor: '#ccc',
    padding: 10, marginBottom: 20, borderRadius: 5,
  },
});
