import { View, Text, Button, StyleSheet } from 'react-native';
import { deleteName } from '../utils/storage';

export default function ProfileScreen({ route, navigation }) {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {name}!</Text>
      <Button
  title="Log Out"
  onPress={async () => {
    await deleteName();
    navigation.navigate('Login');
  }}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  text: {
    fontSize: 24, fontWeight: 'bold',
  },
});
