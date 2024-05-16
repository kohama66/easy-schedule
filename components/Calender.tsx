import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import CalenderItem from "./CalenderItem";

export default function Calender() {
  const [dates, setDates] = useState<{ value: number; checked: boolean }[]>([]);

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    // 月の最終日を取得
    const lastDay = new Date(year, month + 1, 0).getDate();

    // 日付の配列を作成
    const daysArray = Array.from({ length: lastDay }, (_, i) => i + 1);

    // 日付の配列を更新
    setDates(
      daysArray.map((day) => ({
        value: day,
        checked: true,
      }))
    );
  }, []);

  const toggle = (date: number) => {
    setDates((prev) =>
      prev.map((d) => (d.value === date ? { ...d, checked: !d.checked } : d))
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {dates.map((date) => (
          <CalenderItem
            key={date.value}
            date={date.value}
            checked={date.checked}
            onPress={() => toggle(date.value)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 4,
    width: "80%",
  },
});
