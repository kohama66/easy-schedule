import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalenderItem from "./CalenderItem";

export default function Calender() {
  const [dates, setDates] = useState<number[]>([]);

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    // 月の最終日を取得
    const lastDay = new Date(year, month + 1, 0).getDate();

    // 日付の配列を作成
    const daysArray = Array.from({ length: lastDay }, (_, i) => i + 1);

    setDates(daysArray);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {dates.map((date) => (
          <CalenderItem key={date} date={date} />
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
