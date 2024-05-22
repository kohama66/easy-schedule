import { ScheduleDay, getScheduleDaysFromStorage } from "@/utils/scheduleDays";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-toast-message";
import { useLocalSearchParams, useRouter } from "expo-router";

type FormData = {
  [key: string]: string;
};

export default function App() {
  const [days, setDays] = useState<ScheduleDay[]>([]);
  const { control, handleSubmit, setValue } = useForm<FormData>();
  const { month } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    const getStorageValue = async () => {
      const values = await getScheduleDaysFromStorage();
      values.forEach((value) => {
        setValue(value.day.toString(), value.ok ? "○" : "×");
      });
      setDays(values);
    };

    getStorageValue();
  }, []);

  const onSubmit = (data: FormData) => {
    const _data = Object.entries(data).map(([key, value]) => {
      return { day: parseInt(key), value };
    });

    const copied = _data.map((d) => {
      return `${d.day}日 : ${d.value}`;
    });
    // 先頭に月を追加
    copied.unshift(`${month}月`);

    Clipboard.setStringAsync(copied.join("\n"));
    Toast.show({
      type: "success",
      text1: "コピーが完了しました",
      text2: "貼り付けて使用してください 👋",
    });
    router.push("/");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.baseContainer}>
        {days.map((d) => (
          <View style={styles.inputWrapper} key={d.day}>
            <Text style={{ fontSize: 18, color: "white" }}>{d.day}日 : </Text>
            <Controller
              control={control}
              name={d.day.toString()}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.linkWrapper}>
          <Button title="Copy" onPress={handleSubmit(onSubmit)} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },

  baseContainer: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "#181033",
    flexGrow: 1,
  },

  inputWrapper: {
    backgroundColor: "#362C58",
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    marginBottom: 20,
  },

  input: {
    fontSize: 18,
    color: "white",
    flex: 1,
  },

  linkWrapper: {
    marginVertical: 40,
    backgroundColor: "blue",
    width: "80%",
    alignSelf: "center",
    paddingVertical: 10,
    justifyContent: "center",
    borderRadius: 999,
  },
});
