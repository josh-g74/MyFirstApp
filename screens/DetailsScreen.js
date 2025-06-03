import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { userId = 'N/A', username = 'Unknown' } = route.params || {};

  const formatUsername = (name) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Details Screen</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>User ID:</Text>
        <Text>{userId}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text>{formatUsername(username)}</Text>
      </View>

      <View style={{ height: 20 }} />

      <Button title="Go Back" onPress={() => navigation.goBack()} />
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
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
  },
});
