import { ScheduleDay, getScheduleDaysFromStorage } from "@/utils/scheduleDays";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { StyleSheet, View, Button, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-toast-message";
import { useLocalSearchParams, useRouter } from "expo-router";
import { BaseWrapper } from "@/components/BaseWrapper";
import { Colors } from "@/constants/Colors";
import { DateField } from "@/components/DateField";

type FormData = {
  [key: string]: string;
};

export default function App() {
  const [days, setDays] = useState<ScheduleDay[]>([]);
  const methods = useForm<FormData>();
  const { setValue, handleSubmit } = methods;
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
    <BaseWrapper>
      <FormProvider {...methods}>
        <View style={styles.baseContainer}>
          {days.map((d) => (
            <DateField key={d.day} day={d} />
          ))}

          <TouchableOpacity style={styles.buttonWrapper}>
            <Button
              title="Copy"
              onPress={handleSubmit(onSubmit)}
              color={Colors.default.textWhite}
            />
          </TouchableOpacity>
        </View>
      </FormProvider>
    </BaseWrapper>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    paddingTop: 80,
  },

  buttonWrapper: {
    marginVertical: 40,
    backgroundColor: Colors.default.primary,
    width: "80%",
    alignSelf: "center",
    paddingVertical: 10,
    justifyContent: "center",
    borderRadius: 999,
  },
});
