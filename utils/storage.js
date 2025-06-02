import * as SecureStore from 'expo-secure-store';

export async function saveName(name) {
  await SecureStore.setItemAsync('username', name);
}

export async function getName() {
  return await SecureStore.getItemAsync('username');
}

export async function deleteName() {
  await SecureStore.deleteItemAsync('username');
}
