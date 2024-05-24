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
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);

  return (
    <LinearGradient
      colors={["#2C3135", "#24282D", "#191B1E"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.baseContainer}
    >
      <ScrollView>
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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
  },

  inner: {
    paddingTop: 30,
    paddingBottom: 60,
    flex: 1,
  },

  linkWrapper: {
    marginTop: 40,
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
    color: "#d1d1d1",
  },
});
