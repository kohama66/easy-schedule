import Calender from "@/components/Calender";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { newScheduleDays, ScheduleDay } from "@/utils/scheduleDays";

export default function HomeScreen() {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [result, setResult] = useState<ScheduleDay[]>(newScheduleDays(month));

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

  const handleSetResult = (value: ScheduleDay[]) => {
    setResult(value);
  };

  const onEnter = () => {
    const daysText = result
      .map((date) => `${date.day}日 : ${date.ok ? "⚪︎" : "×"}`)
      .join("\n");

    const text = month + "月\n" + daysText;
    Clipboard.setStringAsync(text);
  };

  return (
    <View style={styles.baseContainer}>
      <View style={styles.monthContainer}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <FontAwesome name="caret-left" size={70} color="blue" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.month}>
          <Text style={styles.monthLabel}>{month.toString()}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => changeMonth(1)}>
          <FontAwesome name="caret-right" size={70} color="blue" />
        </TouchableOpacity>
      </View>

      <Calender month={month} handleResult={handleSetResult} />

      <View style={styles.submitWrapper}>
        <Button title="Enter" color="white" onPress={onEnter} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#001019",
  },

  monthContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },

  month: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    marginHorizontal: 12,
  },

  monthLabel: {
    fontSize: 50,
    color: "white",
  },

  submitWrapper: {
    marginTop: "auto",
    marginBottom: 40,
    backgroundColor: "blue",
    width: "80%",
    alignSelf: "center",
    borderRadius: 999,
    paddingVertical: 10,
  },
});

// import { Image, StyleSheet, Platform } from "react-native";

// import { HelloWave } from "@/components/HelloWave";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
//       headerImage={
//         <Image
//           source={require("@/assets/images/partial-react-logo.png")}
//           style={styles.reactLogo}
//         />
//       }
//     >
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit{" "}
//           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
//           to see changes. Press{" "}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
//           </ThemedText>{" "}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this
//           starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{" "}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
//           to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
//           directory. This will move the current{" "}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: "absolute",
//   },
// });
