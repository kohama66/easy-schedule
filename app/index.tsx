import Calender from "@/components/Calender";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import { getScheduleDaysFromStorage } from "@/utils/scheduleDays";
import { MonthSelector } from "@/components/MonthSelector";
import Toast from "react-native-toast-message";

export default function HomeScreen() {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);

  const onEnter = async () => {
    const result = await getScheduleDaysFromStorage(month);
    const daysText = result
      .map((date) => `${date.day}日 : ${date.ok ? "⚪︎" : "×"}`)
      .join("\n");

    const text = month + "月\n" + daysText;
    Clipboard.setStringAsync(text);
    Toast.show({
      type: "success",
      text1: "コピーが完了しました",
      text2: "貼り付けて使用してください 👋",
    });
  };

  return (
    <View style={styles.baseContainer}>
      <MonthSelector month={month} setMonth={setMonth} />
      <Calender month={month} />

      <View style={styles.submitWrapper}>
        <Button title="Enter" color="white" onPress={onEnter} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#181033",
  },

  monthContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },

  month: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    marginHorizontal: 12,
  },

  monthLabel: {
    fontSize: 50,
    color: "white",
  },

  submitWrapper: {
    marginTop: "auto",
    marginBottom: 40,
    backgroundColor: "blue",
    width: "80%",
    alignSelf: "center",
    borderRadius: 999,
    paddingVertical: 10,
  },
});
