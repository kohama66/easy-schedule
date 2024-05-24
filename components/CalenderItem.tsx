import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

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
        ...styles.button,
      }}
    >
      <View>
        <Text style={styles.text}>{props.date.toString()}</Text>
        {props.ok ? (
          <Entypo name="circle" size={24} color={Colors.default.textWhite} />
        ) : (
          <AntDesign name="close" size={24} color={Colors.default.textWhite} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "20%",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },

  text: {
    color: Colors.default.textWhite,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 4,
  },
});
