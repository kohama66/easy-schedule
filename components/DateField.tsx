import { Colors } from "@/constants/Colors";
import { rgba } from "@/utils/color";
import { ScheduleDay } from "@/utils/scheduleDays";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  day: ScheduleDay;
};

export const DateField = ({ day }: Props) => {
  const { control, setValue } = useFormContext();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const onChange = (_: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    setValue(day.day.toString(), `${hours}:${minutes}`);
  };

  return (
    <View style={styles.base}>
      <View style={styles.inputWrapper}>
        <Text
          style={{
            fontSize: 18,
            color: Colors.default.textWhite,
            fontWeight: "bold",
          }}
        >
          {day.day}日 :{" "}
        </Text>

        <Controller
          control={control}
          name={day.day.toString()}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <View style={styles.icon}>
          <Ionicons
            name="time-outline"
            size={24}
            color={Colors.default.textWhite}
            onPress={toggleShow}
            style={{
              borderRadius: 999,
            }}
          />
        </View>
      </View>

      {show && (
        <DateTimePicker
          value={date}
          mode="time"
          display="compact"
          onChange={onChange}
          style={{
            transform: [{ translateY: -8 }],
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    maxWidth: "95%",
  },

  inputWrapper: {
    width: "80%",
    backgroundColor: rgba(Colors.default.dark, 0.7),
    alignSelf: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    marginBottom: 16,
    position: "relative",
  },

  input: {
    fontSize: 18,
    color: Colors.default.textWhite,
    flex: 1,
  },

  icon: {
    position: "absolute",
    right: 7,
    top: 7,
    borderRadius: 999,
    padding: 4,
  },
});
