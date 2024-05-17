import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  date: number;
  ok: boolean;
  onPress: () => void;
};

export default function CalenderItem(props: Props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: props.ok ? "pink" : "blue",
        ...styles.button,
      }}
    >
      <Text style={styles.text}>{props.date.toString()}</Text>
      {props.ok ? (
        <Entypo name="circle" size={24} color="white" />
      ) : (
        <AntDesign name="close" size={24} color="white" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "19%",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },

  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 4,
  },
});
