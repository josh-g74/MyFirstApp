import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { userId = 'N/A', username = '' } = route.params || {};

  const formatUsername = (name) => {
    if (typeof name !== 'string' || !name.trim()) return 'Unknown';
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Details Screen</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>User ID:</Text>
        <Text style={styles.value}>{userId}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>{formatUsername(username)}</Text>
      </View>

      <View style={{ height: 30 }} />

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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  infoContainer: {
    marginBottom: 15,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  value: {
    fontSize: 18,
    color: '#333',
    marginTop: 4,
  },
});
