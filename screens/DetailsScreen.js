import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { userId, username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Text>User ID: {userId}</Text>
      <Text>Username: {username}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
