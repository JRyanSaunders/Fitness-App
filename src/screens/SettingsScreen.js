import React, { useState, useContext } from "react";
import { StyleSheet, View, Switch, Linking } from "react-native";
import { Text, Button } from "react-native-elements";
import { ExerciseContext } from "../components/ExerciseContext";

import { Colors } from "../colors/Colors";
import { Permissions, Notifications } from "expo";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-community/async-storage';

export default function SettingsScreen({ navigation }) {
  const [isNotifEnabled, setIsNotifEnabled] = useState(true);
  const [exerciseContext, setExerciseContext] = useContext(ExerciseContext);

  // const toggleNotifSwitch = () =>
  //   setIsNotifEnabled((previousState) => !previousState);

  const removeDates = async () => {
    try {
      await AsyncStorage.removeItem("MyCompletedDates");
    } catch (err) {
      alert(err);
    } finally {
      setExerciseContext((prevState) => ({
        ...prevState,
        completedDates: {},
      }));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageRef}>SETTINGS</Text>
      <View style={styles.top}>
        <Text style={styles.title}>You are ready to go</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.settingsTitle}>Settings Screen</Text>
        <Text style={styles.lockDesc}>
          "Your PERSONAL TRAINER that helps you workout any-time, anywhere with a full list of full body stretch and roll exercises. Look and feel your best, improve flexibility and accomplish your body goals from just as 10 minutes a day."
        </Text>
        <Text style={styles.lockDesc}> • Track your progress from stats and the calendar</Text>
        <Text style={styles.lockDesc}> • Pictures and descriptions showing how to do each stretch & roll</Text>
        <Text style={styles.lockDesc}> • Great for both Men and Women</Text>
        <Text style={styles.lockDesc}>This application is still in early development, let us know what you would like to see on this app!</Text>
        {/* <Text style={styles.lockDescBold}>Remind me to workout every day</Text>
        <View style={styles.row}>
          <Text style={{ fontSize: 16, color: Colors.primaryFont }}>
            Show Notifications
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: Colors.primary }}
            thumbColor={isNotifEnabled ? "#ffffff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleNotifSwitch}
            value={isNotifEnabled}
            style={{ marginLeft: 16 }}
          />
        </View> */}
        <TouchableOpacity style={styles.remove} onPress={() => removeDates()}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Reset Calendar Dates</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 5,
          }}
          onPress={() => navigation.navigate("PrivacyPolicyScreen")}
        >
          <Text style={{ color: Colors.primary, fontWeight: "bold" }}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 5,
          }}
          onPress={() => navigation.navigate("TermsOfUseScreen")}
        >
          <Text style={{ color: Colors.primary, fontWeight: "bold" }}>
            Terms of Use
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ratingSection}>
        <Text style={styles.rateDesc}>
          Enjoying the app? Got a suggestion?{" "}
          <Text
            style={styles.ratingStyle}
            onPress={() => Linking.openURL("https://www.jack-saunders.com")}
          >
            Contact me.
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greyLight,
    justifyContent: "center",
    alignItems: "center",
  },
  pageRef: {
    zIndex: 4,
    position: "absolute",
    top: "5%",
    left: "7%",
    color: "#ffffff",
    fontSize: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonGroup: {
    height: 60,
    width: 300,
  },
  buttonGroupText: {
    fontSize: 18,
    color: "white",
  },
  slider: {
    width: 250,
    marginLeft: 16,
  },
  card: {
    alignItems: "center",
    backgroundColor: "#eeeeee",
    borderColor: "#ABB2B9",
    borderWidth: 0.3,
    width: "90%",
    borderRadius: 10,
  },
  restoreButtonContainer: {
    marginTop: 48,
    marginHorizontal: 48,
    marginBottom: 24,
    left: 40,
    bottom: 0,
    position: "absolute",
  },
  top: {
    height: "35%",
    width: "100%",
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    zIndex: 1,
    backgroundColor: "#5257F2",
    top: 0,
  },
  middle: {
    width: "85%",
    height: "60%",
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    zIndex: 2,
    backgroundColor: "#ffffff",
    paddingLeft: 26.3,
    paddingRight: 26.3,
    borderRadius: 10,
    top: "30%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    top: "20%",
    left: 80,
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    bottom: "5%",
    color: "#2D3057",
  },
  lockDesc: {
    fontSize: 9,
    width: "100%",
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
    color: Colors.primaryFont,
    marginBottom: 3,
  },
  lockDescBold: {
    fontSize: 12,
    width: "100%",
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
    color: Colors.primaryFont,
    fontWeight: "500",
    marginTop: 10,
  },
  ratingSection: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: "145%",
    zIndex: 4,
  },
  rateDesc: {
    padding: 10,
    fontSize: 9,
    width: "100%",
    paddingHorizontal: 5,
    color: Colors.primaryFont,
    position: "relative"
  },
  ratingStyle: {
    color: Colors.primary,
    fontSize: 9,
    textDecorationLine: "underline",
    padding: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: Colors.greyLight,
    width: "90%",
    marginVertical: 10,
  },
  remove: {
    width: "70%",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    left: 0,
    backgroundColor: "#fc6781",
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 5,
  },
});
