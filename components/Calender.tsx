import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CalenderItem from "./CalenderItem";

type Props = {
  month: number;
};

export default function Calender({ month }: Props) {
  const now = new Date();
  const year = now.getFullYear();
  // 月の最終日を取得
  const lastDay = new Date(year, month, 0).getDate();
  // 日付の配列を作成
  const daysArray = Array.from({ length: lastDay }, (_, i) => i + 1);

  return <_Calender key={month} days={daysArray} />;
}

type _props = {
  days: number[];
};

function _Calender({ days }: _props) {
  const [dates, setDates] = useState<{ value: number; checked: boolean }[]>(
    days.map((day) => ({
      value: day,
      checked: true,
    }))
  );

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
    gap: 4,
    width: "80%",
  },
});
