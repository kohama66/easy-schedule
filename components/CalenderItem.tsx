import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";

type Props = {
  date: number;
  ok: boolean;
  onPress: () => void;
};

export default function CalenderItem(props: Props) {
  const color = props.ok ? "rgba(60, 60, 255, 0.6)" : "rgba(255, 60, 60, 0.6)";

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...styles.button,
      }}
    >
      <Shadow distance={40} startColor={color} offset={[0, 0]}>
        <Text style={styles.text}>{props.date.toString()}</Text>
        {props.ok ? (
          <Entypo name="circle" size={24} color="white" />
        ) : (
          <AntDesign name="close" size={24} color="white" />
        )}
      </Shadow>
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
    borderWidth: 1,
    borderColor: "white",
  },

  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 4,
  },
});
