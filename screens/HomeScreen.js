import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Home Screen</Text>
        <Button
            title="Go to Details"
            onPress={() =>
            navigation.navigate('Details', {
            userId: 42,
            username: 'joshua',
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
  },
  text: {
    fontSize: 20,
  },
});
