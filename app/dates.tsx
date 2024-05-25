import { ScheduleDay, getScheduleDaysFromStorage } from "@/utils/scheduleDays";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-toast-message";
import { useLocalSearchParams, useRouter } from "expo-router";
import { BaseWrapper } from "@/components/BaseWrapper";
import { Colors } from "@/constants/Colors";
import { DateField } from "@/components/DateField";
import { useIsFocused } from "@react-navigation/native";

type FormData = {
  [key: string]: string;
};

export default function DatesScreen() {
  const [days, setDays] = useState<ScheduleDay[]>([]);
  const methods = useForm<FormData>();
  const { setValue, handleSubmit } = methods;
  const { month } = useLocalSearchParams();
  const router = useRouter();

  const isFocused = useIsFocused();
  useEffect(() => {
    const getStorageValue = async () => {
      const values = await getScheduleDaysFromStorage();
      values.forEach((value) => {
        setValue(value.day.toString(), value.ok ? "○" : "×");
      });
      setDays(values);
    };

    getStorageValue();
  }, [isFocused]);

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

          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={handleSubmit(onSubmit)}
          >
            <Text
              style={{
                color: Colors.default.textWhite,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Copy
            </Text>
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
    paddingVertical: 20,
    justifyContent: "center",
    borderRadius: 999,
  },
});
