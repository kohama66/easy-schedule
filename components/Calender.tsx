import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CalenderItem from "./CalenderItem";

type Props = {
  month: number;
  handleResult: (value: { day: number; ok: boolean }[]) => void;
};

export default function Calender({ month, handleResult }: Props) {
  const now = new Date();
  const year = now.getFullYear();
  // 月の最終日を取得
  const lastDay = new Date(year, month, 0).getDate();
  // 日付の配列を作成
  const daysArray = Array.from({ length: lastDay }, (_, i) => i + 1);

  return <_Calender key={month} days={daysArray} handleResult={handleResult} />;
}

type _props = {
  days: number[];
  handleResult: (value: { day: number; ok: boolean }[]) => void;
};

function _Calender({ days, handleResult }: _props) {
  const [dates, setDates] = useState<{ day: number; ok: boolean }[]>(
    days.map((day) => ({
      day,
      ok: true,
    }))
  );

  const toggle = (date: number) => {
    const result = dates.map((d) => (d.day === date ? { ...d, ok: !d.ok } : d));

    setDates(result);
    handleResult(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {dates.map((date) => (
          <CalenderItem
            key={date.day}
            date={date.day}
            ok={date.ok}
            onPress={() => toggle(date.day)}
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
