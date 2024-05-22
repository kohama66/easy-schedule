import Calender from "@/components/Calender";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MonthSelector } from "@/components/MonthSelector";
import { Link } from "expo-router";

export default function HomeScreen() {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);

  return (
    <ScrollView style={styles.baseContainer}>
      <View style={styles.inner}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: "#181033",
  },

  inner: {
    paddingTop: 30,
    paddingBottom: 60,
  },

  linkWrapper: {
    marginTop: 40,
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
