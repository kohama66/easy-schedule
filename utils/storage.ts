import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStorage = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const getStorage = async (key: string) => {
  return await AsyncStorage.getItem(key);
};
