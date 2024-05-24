import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  month: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
};

export const MonthSelector = ({ month, setMonth }: Props) => {
  const changeMonth = (delta: number) => {
    setMonth((prevMonth) => {
      let newMonth = prevMonth + delta;
      if (newMonth < 1) {
        newMonth = 12;
      } else if (newMonth > 12) {
        newMonth = 1;
      }
      return newMonth;
    });
  };

  return (
    <View style={styles.monthContainer}>
      <TouchableOpacity onPress={() => changeMonth(-1)}>
        <FontAwesome name="caret-left" size={70} color="#C72C13" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.month}>
        <Text style={styles.monthLabel}>{month.toString()}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeMonth(1)}>
        <FontAwesome name="caret-right" size={70} color="#C72C13" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  monthContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },

  month: {
    backgroundColor: "#C72C13",
    width: 65,
    height: 65,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    marginHorizontal: 12,
  },

  monthLabel: {
    fontSize: 30,
    color: "#d1d1d1",
  },
});
