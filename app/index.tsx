import Calender from "@/components/Calender";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MonthSelector } from "@/components/MonthSelector";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import { BaseWrapper } from "@/components/BaseWrapper";

export default function HomeScreen() {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);

  return (
    <BaseWrapper>
      <View style={styles.inner}>
        <MonthSelector month={month} setMonth={setMonth} />
        <Calender month={month} />
        <TouchableOpacity style={styles.linkWrapper}>
          <Link
            href={{
              pathname: "/dates",
              params: { month },
            }}
            style={{ paddingVertical: 20 }}
          >
            <Text style={styles.enter}>Next</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </BaseWrapper>
  );
}

const styles = StyleSheet.create({
  inner: {
    paddingTop: 30,
    paddingBottom: 60,
    minHeight: "100%",
  },

  linkWrapper: {
    marginTop: "auto",
    backgroundColor: "#C72C13",
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 999,
  },

  enter: {
    textAlign: "center",
    width: "100%",
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.default.textWhite,
  },
});
