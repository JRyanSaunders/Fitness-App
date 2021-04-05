import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppLoading from "expo-app-loading";

import { AntDesign } from "@expo/vector-icons";
import * as Font from "expo-font";

import { Colors } from "./src/colors/Colors";

import HomeScreen from "./src/screens/HomeScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import ExercisesScreen_FR from "./src/screens/ExercisesScreen_FR";
import SettingsScreen from "./src/screens/SettingsScreen";
import WorkoutScreen from "./src/screens/WorkoutScreen";
import StatsScreen from "./src/screens/StatsScreen";
import ExercisesScreen_S from "./src/screens/ExercisesScreen_S";
import { ExerciseProvider } from "./src/components/ExerciseContext";

import TermsOfUseScreen from "./src/screens/TermsOfUseScreen";
import PrivacyPolicyScreen from "./src/screens/PrivacyPolicyScreen";

const getFonts = () =>
  Font.loadAsync({
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

const Tab = createBottomTabNavigator();
const NestedStack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Nested}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Exercises"
        component={MyTopTabs}
        options={{
          tabBarLabel: "Exercises",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={NestedSettings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Nested = () => {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen
        options={{ headerShown: false, title: "Back" }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <NestedStack.Screen
        name="WorkoutScreen"
        component={WorkoutScreen}
        options={{
          title: "Workout",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: "#fff",
        }}
      />
      <NestedStack.Screen
        name="StatsScreen"
        component={StatsScreen}
        options={{
          title: "Statistics",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: "#fff",
        }}
      />
    </NestedStack.Navigator>
  );
};

const NestedSettings = () => {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen
        options={{ headerShown: false, title: "Back" }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <NestedStack.Screen
        name="TermsOfUseScreen"
        component={TermsOfUseScreen}
        options={{
          title: "Terms of Use",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: "#fff",
        }}
      />
      <NestedStack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
        options={{
          title: "Privacy Policy",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: "#fff",
        }}
      />
    </NestedStack.Navigator>
  );
};

const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <TopTab.Navigator>
        <TopTab.Screen name="Foam Roller" component={ExercisesScreen_FR} />
        <TopTab.Screen name="Stretches" component={ExercisesScreen_S} />
      </TopTab.Navigator>
    </SafeAreaView>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <ExerciseProvider>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </ExerciseProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
