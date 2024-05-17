import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import CalenderItem from "./CalenderItem";
import { newScheduleDays, ScheduleDay } from "@/utils/scheduleDays";

type Props = {
  month: number;
  handleResult: (value: ScheduleDay[]) => void;
};

export default function Calender({ month, handleResult }: Props) {
  return <_Calender key={month} month={month} handleResult={handleResult} />;
}

function _Calender({ month, handleResult }: Props) {
  const [dates, setDates] = useState<ScheduleDay[]>(newScheduleDays(month));

  useEffect(() => {
    handleResult(dates);
  }, [dates]);

  const toggle = (date: number) => {
    const result = dates.map((d) => (d.day === date ? { ...d, ok: !d.ok } : d));

    setDates(result);
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
