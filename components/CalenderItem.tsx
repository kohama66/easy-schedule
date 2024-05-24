import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";
import { Colors } from "@/constants/Colors";

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
      <View style={styles.inner}>
        {/* <Shadow distance={40} startColor={color} offset={[0, 0]}> */}
        <Text style={styles.text}>{props.date.toString()}</Text>
        {props.ok ? (
          <Entypo name="circle" size={24} color={Colors.default.textWhite} />
        ) : (
          <AntDesign name="close" size={24} color={Colors.default.textWhite} />
        )}
        {/* </Shadow> */}
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
    // borderWidth: 1,
    // borderColor: "white",
    // padding: 4,
  },

  inner: {
    // backgroundColor: "#1F212C",
    // borderWidth: 1,
    borderColor: "white",
    // width: "100%",
  },

  text: {
    color: Colors.default.textWhite,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 4,
  },
});
