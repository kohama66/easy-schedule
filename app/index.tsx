import Calender from "@/components/Calender";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MonthSelector } from "@/components/MonthSelector";
import { Link } from "expo-router";

export default function HomeScreen() {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);

  return (
    <View style={styles.baseContainer}>
      <MonthSelector month={month} setMonth={setMonth} />
      <Calender month={month} />

      <TouchableOpacity style={styles.linkWrapper}>
        <Link
          href={{
            pathname: "/time",
            params: { month },
          }}
          style={{ paddingVertical: 20 }}
        >
          <Text style={styles.enter}>Enter</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#181033",
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

  linkWrapper: {
    marginTop: "auto",
    marginBottom: 40,
    backgroundColor: "blue",
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 999,
  },

  enter: {
    textAlign: "center",
    width: "100%",
    fontSize: 18,
    color: "white",
  },
});
