import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

type Props = {
  date: number;
};

export default function CalenderItem(props: Props) {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.button}>
      <Text style={styles.text}>{props.date.toString()}</Text>
      <Entypo name="circle" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "19%",
    backgroundColor: "pink",
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
