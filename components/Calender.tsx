import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import CalenderItem from "./CalenderItem";
import {
  newScheduleDays,
  ScheduleDay,
  setScheduleDaysInStorage,
} from "@/utils/scheduleDays";

type Props = {
  month: number;
};

export default function Calender({ month }: Props) {
  return <_Calender key={month} month={month} />;
}

function _Calender({ month }: Props) {
  const [dates, setDates] = useState<ScheduleDay[]>(newScheduleDays(month));

  useEffect(() => {
    setScheduleDaysInStorage(month, dates);
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
    width: "80%",
  },
});
