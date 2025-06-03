import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const name = route.params?.name || 'Guest';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {name}! Welcome to the Home Screen</Text>

      <View style={{ height: 10 }} /> {/* spacing */}

      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            userId: 42,
            username: name.toLowerCase(), // using the same name
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
